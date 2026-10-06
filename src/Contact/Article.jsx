
import React from "react";

const Article = () => {
  return (
    <section className="bg-gray-200 py-4 sm:py-6">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Pak75 Contact &amp; Support
          </h2>

          <p className="mt-4 text-base leading-8 text-gray-600 sm:text-[17px]">
            If you need <strong>Pak75 Contact</strong> information, this
            page provides guidance for visitors looking for{" "}
            <strong>Pak75 Contact Us</strong>,{" "}
            <strong>Pak75 Support</strong>, and general website assistance.
            Visitors can use the contact form to ask questions about website
            information, account access, gameplay guides, mobile access, and
            platform-related topics. If you need help understanding the
            website or finding relevant resources, describe your question
            clearly when submitting a message. For{" "}
            <strong>Pak75 Technical Support</strong>,{" "}
            <strong>Pak75 Account Help</strong>,{" "}
            <strong>Pak75 Login Help</strong>, or registration-related
            questions, provide only the information necessary to explain your
            issue. Never share your password, verification codes, payment
            credentials, or other sensitive account details through a contact
            form. Visitors can also explore information about mobile access,
            platform features, account security, payment guidance, and
            responsible gaming throughout this website.
          </p>

          {/* 14 CONTACT ARTICLE TOPICS */}
          <div className="mt-8 border-t border-gray-300 pt-6">
            <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
              Pak75 Contact &amp; Support Articles
            </h3>

            <div className="mt-5 grid gap-x-10 gap-y-2 text-base leading-7 text-gray-600 sm:grid-cols-2">
              {/* LEFT SIDE */}
              <div className="space-y-2">
                <p>• Pak75 Contact and Support Guide</p>
                <p>• Pak75 Customer Support Information</p>
                <p>• Pak75 Account Help Guide</p>
                <p>• Pak75 Login Help and Common Issues</p>
                <p>• Pak75 Registration Information</p>
                <p>• Pak75 Website Access Guide</p>
                <p>• Pak75 Mobile Access Information</p>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-2">
                <p>• Pak75 Payment Information and Safety</p>
                <p>• Pak75 Deposit Information Guide</p>
                <p>• Pak75 Withdrawal Information Guide</p>
                <p>• Pak75 Technical Help Guide</p>
                <p>• Pak75 Frequently Asked Questions</p>
                <p>• Pak75 Platform Features and Information</p>
                <p>• Pak75 User Support Guide</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Article;
