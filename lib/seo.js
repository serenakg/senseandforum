const siteUrl = "https://senseandforum.com";
const defaultImage = {
  url: "/brand/og-image.png",
  width: 1200,
  height: 630,
  alt: "Sense & Forum",
};

// For interior pages only — Next's root-layout title template already
// appends " | Sense & Forum" to the browser tab title automatically, but
// openGraph/twitter titles aren't covered by that template, so they need
// the full string built here.
export function buildMetadata({ title, description, path }) {
  const fullTitle = `${title} | Sense & Forum`;

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteUrl}${path}`,
      siteName: "Sense & Forum",
      images: [defaultImage],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultImage.url],
    },
  };
}
