const siteUrl = "https://senseandforum.com";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Sense & Forum",
      alternateName: "Sense & Forum®",
      url: siteUrl,
      logo: `${siteUrl}/brand/logo-black.svg`,
      founder: { "@id": `${siteUrl}/#serena-gasparini` },
      description:
        "A no-nonsense community-led marketing agency: senior marketing leadership and community strategy, minus the full-time hire, built on the DELIA Model™.",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#serena-gasparini`,
      name: "Serena Gasparini",
      jobTitle: "Founder",
      worksFor: { "@id": `${siteUrl}/#organization` },
      description:
        "Founder of Sense & Forum® and creator of the DELIA Model™, a framework for designing inclusive community and marketing systems.",
    },
  ],
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
