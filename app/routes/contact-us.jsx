import React from "react";
import HeroBannerCard from "../components/heroBannerCard";
import { CONTACT_HERO_BANNER } from "../enums/constants";
import Button from "../components/button";
import { ContactForm } from "../components/contactForm";
import { useRef } from "react";
import { json } from "@remix-run/node";
import { sendEmail } from "../utils/email.server";

export const meta = () => {
  return [
    { title: "The Ardee Group | Contact Us" },
    {
      description:
        "Over 5 decades, the Ardee Group has been instrumental in shaping some of the most iconic structures in the Delhi-NCR region.",
    },
  ];
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!firstName || !email || !message) {
    return json({ error: "Please fill required(*) fields!" }, { status: 400 });
  }

  try {
    await sendEmail(
      `${firstName} ${lastName}`.trim().toString(),
      email.toString(),
      message.toString()
    );
    return json({ success: "Email sent successfully!" });
  } catch (error) {
    return json({ error: "Failed to send email." }, { status: 500 });
  }
};

const ContactUs = () => {
  const firstSectionRef = useRef(null);

  const scrollToFirstSection = () => {
    firstSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const contactHeroBanner = {
    ...CONTACT_HERO_BANNER,
    action: scrollToFirstSection,
    actionText: "Know More",
  };

  return (
    <div className="w-full container mx-auto p-2 md:p-3 lg:p-5 mb-10">
      <div className="w-full">
        <HeroBannerCard item={contactHeroBanner} index={0} />
      </div>

      <div className="min-h-96 py-20 px-5 lg:px-10" ref={firstSectionRef}>
        <div className="flex items-start flex-wrap w-full">
          <div className="w-full lg:w-1/2 flex flex-col lg:pr-16">
            <div className="text-[min(min(3rem,12vw),5rem)] font-extrabold font-times text-white mt-10">
              Get in Touch
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none" />

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              <p className="text-zinc-500">
                We'd love to hear from you. Whether you have a question about
                our projects, services, or anything else, our team is ready to
                answer all your questions.
              </p>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Address
                </h3>
                <p className="text-zinc-400">
                  16th & 17th Floor, Gopal Das Bhawan,
                </p>
                <p className="text-zinc-400">
                  28, Barakhamba Road, New Delhi - 110001
                </p>
                <p className="text-zinc-400">India.</p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Contact Information
                </h3>
                <p className="text-zinc-400">
                  Phone: <a href="tel:911145685035">+91-11-45685035</a> /{" "}
                  <a href="tel:911141808628">41808628</a>
                </p>
                <p className="text-zinc-400">
                  Email:{" "}
                  <a href="mailto:info@theardeegroup.com">
                    info@theardeegroup.com
                  </a>
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Business Hours
                </h3>
                <p className="text-zinc-400">09.30am to 05.30pm</p>
              </div>
            </div>
          </div>

          <div className="w-full mt-10 lg:mt-10 lg:w-1/2">
            <div className="bg-zinc-900 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-white mb-6 font-times">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
