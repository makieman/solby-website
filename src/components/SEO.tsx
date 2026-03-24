import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  structuredData?: object | object[];
}

const BASE_URL = "https://solby.io";
const DEFAULT_IMAGE = "https://res.cloudinary.com/dzorbbb7s/image/upload/v1760597632/Solby_Logo_rzhueo.png";
const DEFAULT_DESC = "Solby helps African businesses run operations, finance, analytics, and people workflows in one platform. ERP, POS, Accounting, HR & Payroll built for Kenya.";

const SEO = ({
  title,
  description = DEFAULT_DESC,
  keywords = "ERP software Kenya, POS system Africa, business management software, accounting software Kenya, HR payroll Kenya, eTIMS integration",
  image = DEFAULT_IMAGE,
  url = "/",
  type = "website",
  noIndex = false,
  structuredData,
}: SEOProps) => {
  const fullTitle = title 
    ? `${title} | Solby` 
    : "Solby — Business Software Built for Africa";
  const fullUrl = `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Solby" />
      <link rel="canonical" href={fullUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Solby" />
      <meta property="og:locale" content="en_KE" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@solbyio" />

      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Eldoret, Kenya" />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(
            Array.isArray(structuredData) ? structuredData : [structuredData]
          )}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
