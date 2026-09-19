function Hero() {
  return (
    <section className="border-b border-gray-300 bg-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">

        <div className="mx-auto w-fit rounded-full border border-yellow-300 bg-white px-5 py-2">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-yellow-600">
            Pak75 Information
          </p>
        </div>

        <h1 className="mt-6 text-center text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Pak75 <span className="text-yellow-500">Blog</span>
        </h1>

        <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-yellow-400" />

        <article className="mx-auto mt-9 max-w-4xl rounded-2xl border border-gray-300 bg-white px-6 py-8 shadow-sm sm:px-9">

          <p className="text-base leading-8 text-slate-600">
            Welcome to the Pak75 Blog, a useful space for information about
            Pak75 Game, platform updates, mobile accessibility, website
            features, and related entertainment topics. Here you can explore
            helpful content about the Pak75 platform and learn more about its
            modern online experience.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Pak75 is designed with a simple and responsive interface that makes
            browsing convenient across smartphones, tablets, laptops, and
            desktop devices. The platform focuses on clear navigation,
            organized content, and a modern layout for visitors exploring
            Pak75 Game information.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Visitors searching for Pak75 Download, Pak75 App, Pak75 APK, or
            Pak75 Game Download can use this blog to learn about available
            information and access options. Always review the source,
            application details, device compatibility, and current information
            before downloading or installing any external application.
          </p>

        </article>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Pak75 Game",
            "Pak75 Download",
            "Pak75 App",
            "Pak75 APK",
            "Mobile Experience",
          ].map((keyword) => (
            <span
              key={keyword}
              className="border-l-4 border-yellow-400 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm"
            >
              {keyword}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;