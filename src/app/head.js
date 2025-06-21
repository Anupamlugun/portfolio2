export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anupam Lugun",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    jobTitle: "Full Stack Java Developer",
    sameAs: [
      "https://www.linkedin.com/in/anupam-lugun",
      "https://github.com/anupamlugun",
      "https://www.instagram.com/anupam_lugun",
      "https://m.youtube.com/@anupamlugun",
    ],
  };

  return (
    <>
      <meta
        name="google-site-verification"
        content="S4PxhMF5hiEdAwaq9VxxRMkCnzCnU2GnPcnoo-5r5_g"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
