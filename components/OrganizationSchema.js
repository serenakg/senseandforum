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
      sameAs: ["https://www.linkedin.com/company/sense-forum/"],
      founder: { "@id": `${siteUrl}/#serena-gasparini` },
      description:
        "A no-nonsense community-led marketing agency: senior marketing leadership and community strategy, minus the full-time hire, built on the DELIA Model™, Serena Gasparini's methodology.",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#serena-gasparini`,
      name: "Serena Gasparini",
      jobTitle: "Founder",
      worksFor: { "@id": `${siteUrl}/#organization` },
      description:
        "Founder of Sense & Forum® and creator of the DELIA Model™, her methodology for designing inclusive community and marketing systems.",
    },
    {
      "@type": "CreativeWork",
      "@id": `${siteUrl}/#delia-model`,
      name: "The DELIA Model™",
      creator: { "@id": `${siteUrl}/#serena-gasparini` },
      description:
        "Serena Gasparini's methodology for designing community and marketing systems that identify who a system leaves out, and design them back in from the start.",
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
