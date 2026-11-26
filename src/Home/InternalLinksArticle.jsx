
import React from "react";
import { Link } from "react-router-dom";
import {
  FaGamepad,
  FaMobileAlt,
  FaCode,
  FaCalendarAlt,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";

function InternalLinksArticle() {
  const information = [
    {
      icon: <FaGamepad />,
      label: "App Name",
      value: "75Pak Game",
    },
    {
      icon: <FaCode />,
      label: "Version",
      value: "User-provided: v1.0.2",
    },
    {
      icon: <FaMobileAlt />,
      label: "Platform",
      value: "Android",
    },
    {
      icon: <FaGlobe />,
      label: "Category",
      value: "Card Game",
    },
    {
      icon: <FaCalendarAlt />,
      label: "Last Updated",
      value: "23 July 2026 (provided)",
    },
    {
      icon: <FaShieldAlt />,
      label: "Language",
      value: "English, Urdu",
    },
  ];

  return (
    <section
      aria-labelledby="pak75-useful-pages"
      className="bg-gray-200 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* PLATFORM INFORMATION */}
        <div className="mb-10">

          <div className="mb-6 text-center">

            <span className="inline-flex rounded-full border border-yellow-500/30 bg-white/70 px-5 py-2 text-xs font-extrabold uppercase tracking-widest text-yellow-700 shadow-sm">
              Platform Details
            </span>

            <h2 className="mt-4 text-2xl font-black text-gray-900 sm:text-3xl">
              Pak75 Platform Information
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              General reference information about the platform,
              its listed features, and compatibility details.
            </p>

          </div>

          {/* INFORMATION CARDS */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">

            {information.map((item) => (
              <article
                key={item.label}
                className="group flex min-h-[165px] flex-col items-center justify-center rounded-2xl border border-gray-300 bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
              >

                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/15 text-2xl text-yellow-600 transition group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="text-base font-extrabold text-gray-900">
                  {item.label}
                </h3>

                <p className="mt-3 text-xs font-medium leading-5 text-gray-600 sm:text-sm">
                  {item.value}
                </p>

              </article>
            ))}

          </div>

          <p className="mt-4 text-center text-xs leading-5 text-gray-500">
            Information is based on supplied reference details
            and has not been independently verified.
          </p>

        </div>

        {/* INTERNAL LINKS ARTICLE */}
        <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

          <h2
            id="pak75-useful-pages"
            className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl"
          >
            Pak75 Useful Pages and Guides
          </h2>

          <div className="mt-5 space-y-5 text-base leading-8 text-gray-600">

            <p>
              Explore <strong>Pak75</strong> and learn more about the{" "}
              <strong>Pak75 Platform</strong>, online gaming information,
              gameplay concepts, mobile access, account security, and useful
              resources available throughout this website.
            </p>

            <p>
              Visitors interested in the <strong>Pak75 Platform</strong>{" "}
              can visit the{" "}
              <Link
                to="/about"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                About Pak75
              </Link>{" "}
              page to learn about the website, its purpose, platform
              information, and available gaming guides.
            </p>

            <p>
              Visitors looking for <strong>Pak75 Guides</strong> and useful
              gaming information can explore the{" "}
              <Link
                to="/blog"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Pak75 Blog
              </Link>
              , which covers gameplay basics, platform information, mobile
              access, account security, and online gaming safety.
            </p>

            <p>
              For questions about <strong>Pak75 Online</strong> information
              or this website, visit the{" "}
              <Link
                to="/contact"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Pak75 Contact Page
              </Link>{" "}
              for general enquiries, feedback, and website-related support.
            </p>

            <p>
              Visitors researching <strong>Pak75 Mobile Access</strong> can
              review the information available on this website about
              compatible devices, browser access, and mobile security.
              Always verify information through trusted sources.
            </p>

            <p>
              People researching{" "}
              <strong>Pak75 Real Money Gaming</strong> should understand that
              some online games involve financial risk and do not guarantee
              winnings. Check the provider's terms, platform authenticity,
              applicable age requirements, and local laws.
            </p>

            <p>
              These internal links connect the Pak75 home page with the main
              informational sections of <strong>paks75.com</strong>, helping
              visitors navigate between platform information, gaming guides,
              contact details, and mobile access resources.
            </p>

          </div>

        </article>

      </div>
    </section>
  );
}

export default InternalLinksArticle;
