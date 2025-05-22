import React from "react";
import Button from "../button";
import { Form, useActionData } from "@remix-run/react";

export const ContactForm = () => {
  const actionData = useActionData();

  return (
    <Form method="POST" className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-zinc-500 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name *
          </label>
          <input
            className="custom-text-input appearance-none block w-full bg-zinc-800 text-zinc-200 border border-zinc-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-zinc-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-zinc-500 animate-fadeIn"
            id="grid-first-name"
            type="text"
            name="firstName"
            placeholder="Ardee"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-zinc-500 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="custom-text-input appearance-none block w-full bg-zinc-800 text-zinc-200 border border-zinc-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-zinc-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-zinc-500 animate-fadeIn animation-delay-200"
            id="grid-last-name"
            type="text"
            name="lastName"
            placeholder="Group"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-zinc-500 text-xs font-bold mb-2"
            htmlFor="grid-email"
          >
            Email *
          </label>
          <input
            className="custom-email-input appearance-none block w-full bg-zinc-800 text-zinc-200 border border-zinc-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-zinc-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-zinc-500 animate-fadeIn animation-delay-400"
            id="grid-email"
            type="email"
            name="email"
            placeholder="ardee@example.com"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-zinc-500 text-xs font-bold mb-2"
            htmlFor="grid-message"
          >
            Message *
          </label>
          <textarea
            className="appearance-none block w-full bg-zinc-800 text-zinc-200 border border-zinc-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-zinc-700 h-48 transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-zinc-500 animate-fadeIn animation-delay-600"
            id="grid-message"
            name="message"
            placeholder="Your message here..."
            maxLength={256}
            required
          ></textarea>
        </div>
      </div>
      {actionData?.error && <p style={{ color: "red" }} className="pb-2">{actionData.error}</p>}
      {actionData?.success && (
        <p style={{ color: "green" }} className="pb-2">{actionData.success}</p>
      )}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Button
            type={"submit"}
            buttonText="Send Message"
            containerClasses="mt-4"
            classes="w-full py-3 px-4"
          />
        </div>
      </div>
    </Form>
  );
};
