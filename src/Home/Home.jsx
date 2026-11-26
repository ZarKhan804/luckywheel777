
import { Helmet } from "react-helmet-async";

import HeroSection from "./HeroSection";
import GameSection from "./GameSection";
import ContentSection from "./ContentSection";
import InternalLinksArticle from "./InternalLinksArticle";

function Home() {
  return (
    <>
      <Helmet>
        <title>Pak75 Game Download APK – Official Pak75 App in Pakistan</title>

        <meta
          name="description"
          content=" Pak75 Game is a simple and fun earning app for students and beginners. Enjoy easy gameplay, explore earning opportunities, and download the Pak75 APK for Android."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link
          rel="canonical"
          href="https://www.paks75.com/"
        />

      <meta
  property="og:title"
  content="Pak75 Game Download APK | Official Pak75 Website"
/>

      <meta
  property="og:description"
  content="Pak75 Game is a fun earning app for beginners. Explore easy gameplay, discover app features, and download Pak75 APK for Android."
/>
        <meta
          property="og:url"
          content="https://www.paks75.com/"
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
          name="twitter:title"
          content="Pak75 Online | Pak75 Official Website"
        />

        <meta
          name="twitter:description"
          content="Explore Pak75 platform information, gaming features, mobile access, gameplay guides, account information, and responsible gaming resources."
        />

        <meta
          name="twitter:image"
          content="https://www.paks75.com/og-image.webp"
        />
      </Helmet>

      <main id="main-content">
        <HeroSection />
        <GameSection />
        <ContentSection />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default Home;

