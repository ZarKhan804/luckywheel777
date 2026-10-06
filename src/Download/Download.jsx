
import { Helmet } from "react-helmet-async";

import DownloadHero from "./DownloadHero";
import InternalLinksArticle from "./InternalLinksArticle";
import Article from "./Article";

function Download() {
  return (
    <>
      <Helmet>
        <title>Pak75 Download Guide | Mobile Access Information</title>

        <meta
          name="description"
          content="Explore the Pak75 download and mobile access guide, compatible device information, application safety, account guidance, and general gaming resources."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link
          rel="canonical"
          href="https://www.paks75.com/download"
        />

        <meta
          property="og:title"
          content="Pak75 Download Guide | Mobile Access Information"
        />

        <meta
          property="og:description"
          content="Learn about Pak75 mobile access, application information, device compatibility, account guidance, and general gaming resources."
        />

        <meta
          property="og:url"
          content="https://www.paks75.com/download"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://www.paks75.com/og-image.webp"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Pak75 Download Guide | Mobile Access Information"
        />

        <meta
          name="twitter:description"
          content="Learn about Pak75 mobile access, application information, device compatibility, account guidance, and general gaming resources."
        />

        <meta
          name="twitter:image"
          content="https://www.paks75.com/og-image.webp"
        />
      </Helmet>

      <main id="main-content">
        <DownloadHero />
        <InternalLinksArticle />
        <Article />
      </main>
    </>
  );
}

export default Download;
