function loadPublications(): InsightArticle[] {
  let filenames: string[];

  try {
    filenames = readdirSync(publicationsDirectory, {
      withFileTypes: true,
    })
      .filter(
        (entry) =>
          entry.isFile() && /\.pdf$/i.test(entry.name),
      )
      .map((entry) => entry.name);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }

  return filenames
    .sort((a, b) => a.localeCompare(b, "fr"))
    .map((filename): InsightArticle => {
      const title = filename
        .replace(/\.pdf$/i, "")
        .replace(/[_-]+/g, " ")
        .trim();

      const slug = `pdf-${Buffer.from(filename, "utf8").toString("hex")}`;

      return {
        slug,
        status: "confirmed",
        category: "publication",
        title: {
          fr: title,
          en: title,
        },
        excerpt: {
          fr: "Consulter la publication au format PDF.",
          en: "Read the publication in PDF format.",
        },
        body: {
          fr: "",
          en: "",
        },
        publishedAt: null,
        isPlaceholder: false,
        pdfUrl: `/assets/publications/${encodeURIComponent(filename)}`,
      };
    });
}
