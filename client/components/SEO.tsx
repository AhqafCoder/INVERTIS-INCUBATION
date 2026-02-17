import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
  noindex?: boolean;
}

export function SEO({
  title = "Invertis Innovation & Incubation",
  description = "Invertis Innovation & Incubation (III) is the hub for innovators and entrepreneurs at Invertis University, Bareilly.",
  canonical,
  ogImage = "/assets/incub-logo-final.png",
  ogType = "website",
  twitterHandle = "@invertisuniv",
  noindex = false,
}: SEOProps) {
  const siteTitle = title.includes("Invertis") 
    ? title 
    : `${title} | Invertis Innovation & Incubation`;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  );
}
