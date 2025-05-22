import React from "react";

export const meta = () => {
  return [
    { title: "The Ardee Group | Terms and Conditions" },
    {
      description:
        "Over 5 decades, the Ardee Group has been instrumental in shaping some of the most iconic structures in the Delhi-NCR region.",
    },
  ];
};

export default function TermsAndConditions() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-10 mt-5 text-center">
          Terms and Conditions
        </h1>
        <div className="w-72 mt-2 mb-8 h-[2px] bg-gradient-to-r from-zinc-500/0 via-zinc-700/50 to-zinc-500/0 border-none mx-auto" />

        <div className="max-w-3xl mx-auto">
          {[
            {
              title: "1. Acceptance of Terms",
              content:
                "By accessing and using The Ardee Group website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.",
            },
            {
              title: "2. Use of Website",
              content:
                "The content of this website is for your general information and use only. It is subject to change without notice. You agree to use the website for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.",
            },
            {
              title: "3. Intellectual Property",
              content:
                "All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.",
            },
            {
              title: "4. Disclaimer",
              content:
                "The information contained in this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.",
            },
            {
              title: "5. Limitation of Liability",
              content:
                "In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.",
            },
            {
              title: "6. Governing Law",
              content:
                "These terms and conditions are governed by and construed in accordance with the laws of India. You hereby irrevocably consent to the exclusive jurisdiction and venue of courts in New Delhi, India in all disputes arising out of or relating to the use of this website.",
            },
            {
              title: "7. Changes to Terms",
              content:
                "The Ardee Group reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
            },
          ].map((section, index) => (
            <section key={index} className="mb-8  rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-500">
                {section.title}
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}

          <section className="mb-8 bg-zinc-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-zinc-500">
              Contact Us
            </h2>
            <p className="mb-4 text-gray-300">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="text-gray-300">
              <p className="mb-2">The Ardee Group</p>
              <p className="mb-2">
                Email:{" "}
                <a href="mailto:info@theardeegroup.com">
                  info@theardeegroup.com
                </a>
              </p>
              <p className="mb-2">
                Phone: <a href="tel:911145685035">+91-11-45685035</a> /{" "}
                <a href="tel:911141808628">41808628</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
