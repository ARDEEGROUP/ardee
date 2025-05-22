import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-10 mt-5 text-center">Privacy Policy</h1>
        <div className="w-72 mt-2 mb-8 h-[2px] bg-gradient-to-r from-zinc-500/0 via-zinc-700/50 to-zinc-500/0 border-none mx-auto" />

        <div className="max-w-3xl mx-auto">
          {[
            {
              title: "1. Introduction",
              content: "Welcome to the Ardee Group's Privacy Policy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."
            },
            {
              title: "2. Data We Collect",
              content: "We may collect, use, store and transfer different kinds of personal data about you, including but not limited to your name, contact details, and information about your interactions with our website and services."
            },
            {
              title: "3. How We Use Your Data",
              content: "We use your personal data to provide you with our services, to communicate with you, to improve our website and services, and to comply with legal obligations. We will only use your personal data for the purposes for which we collected it."
            },
            {
              title: "4. Data Security",
              content: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed."
            },
            {
              title: "5. Your Rights",
              content: "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to access, correct, erase, restrict, transfer, or object to the processing of your personal data."
            },
            {
              title: "6. Changes to This Policy",
              content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page."
            },
          ].map((section, index) => (
            <section key={index} className="mb-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-500">{section.title}</h2>
              <p className="mb-4 text-gray-300 leading-relaxed">{section.content}</p>
            </section>
          ))}

          <section className="mb-8 bg-zinc-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-zinc-500">Contact Us</h2>
            <p className="mb-4 text-gray-300">
              If you have any questions about the Privacy Policy, please contact us at:
            </p>
            <div className="text-gray-300">
              <p className="mb-2">The Ardee Group</p>
              <p className="mb-2">Email: <a href="mailto:info@theardeegroup.com">info@theardeegroup.com</a></p>
              <p className="mb-2">Phone: <a href="tel:911145685035">+91-11-45685035</a> / <a href="tel:911141808628">41808628</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

