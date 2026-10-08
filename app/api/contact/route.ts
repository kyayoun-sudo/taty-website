export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      email,
      phone,
      subject,
      message,
      website,
    } = body;

    // Honeypot anti-spam
    if (website) {
      return Response.json({ success: true });
    }

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          error: "Invalid email address",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return Response.json(
        {
          success: false,
          error: "Email service is not configured",
        },
        { status: 500 }
      );
    }

    const to =
      process.env.CONTACT_TO_EMAIL || "info@taty.info";

    const from =
      process.env.CONTACT_FROM_EMAIL ||
      "TATY & Associés <site@taty.info>";

    const emailSubject = subject
      ? `[Site TATY] ${subject}`
      : `[Site TATY] Nouvelle demande de ${name}`;

    const emailText = `
Nouvelle demande reçue depuis le site TATY & Associés

Nom :
${name}

Entreprise :
${company || "Non renseignée"}

Email :
${email}

Téléphone :
${phone || "Non renseigné"}

Objet :
${subject || "Demande de contact"}

Message :
${message}

-----------------------------------------
Message envoyé depuis le formulaire du site TATY & Associés.
`;

    const resendResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: emailSubject,
          text: emailText,
        }),
      }
    );

    if (!resendResponse.ok) {
      const error = await resendResponse.text();

      console.error("Resend error:", error);

      return Response.json(
        {
          success: false,
          error: "Unable to send email",
        },
        { status: 500 }
      );
    }

    const result = await resendResponse.json();

    return Response.json({
      success: true,
      id: result.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      {
        success: false,
        error: "Unexpected server error",
      },
      { status: 500 }
    );
  }
}
