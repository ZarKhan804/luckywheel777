function Hero() {
  return (
    <section className="border-b border-gray-300 bg-gray-200">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto w-fit rounded-lg bg-yellow-50 px-5 py-2">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-yellow-700">
              Contact Pak75
            </p>
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Get in <span className="text-yellow-500">Touch With Us</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Have a question, suggestion, or want to learn more about Pak75?
            Feel free to get in touch with us for general information,
            website feedback, or questions related to the platform.
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-yellow-300" />
            <span className="h-1 w-14 rounded-full bg-yellow-500" />
            <span className="h-1 w-8 rounded-full bg-yellow-300" />
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gray-300 bg-white p-6 text-sm leading-7 text-slate-500 shadow-sm sm:p-8">
            <p>
              Pak75 welcomes communication from visitors who would like to
              learn more about the website, share useful feedback, or ask a
              general question. Our contact section is designed to keep
              communication simple and provide an easy way to discuss
              information related to the Pak75 platform.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <span className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm">
              General Questions
            </span>

            <span className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm">
              Feedback & Suggestions
            </span>

            <span className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm">
              Pak75 Information
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;