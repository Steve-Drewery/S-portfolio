import { React, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_vyboe0j", "template_zul59ts", form.current, {
        publicKey: "-aGpW54Ip6J1rizgE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitted(false);
        }
      );
    event.target.reset();
    setIsSubmitting(false);
  }

  return (
    <div
      className="isolate bg-yellow-900 px-6 py-24 sm:py-32 lg:px-8 opacity-60"
      id="contact"
    >
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center mt-32">
        <h2 className="text-6xl font-bold tracking-tight text-gray-100 sm:text-4xl">
          Contact me
        </h2>
      </div>
      <form
        className="mx-auto mt-16 max-w-xl mb-20 sm:mt-20"
        ref={form}
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-2xl font-semibold leading-6 text-gray-100"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstname"
                id="firstname"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-2xl font-semibold leading-6 text-gray-100"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastname"
                id="lastname"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-2xl font-semibold leading-6 text-gray-100"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-2xl font-semibold leading-6 text-gray-100"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-neutral-900 px-3.5 py-2.5 text-center text-2xl font-semibold text-white shadow-sm hover:bg-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {isSubmitting ? "Submitting..." : "Lets talk"}
          </button>
        </div>
        {isSubmitted == null ? (
          ""
        ) : (
          <div className="mx-auto max-w-2xl text-center mt-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
              {isSubmitted ? "Thank you" : "Error ocurred"}
            </h2>
          </div>
        )}
      </form>
    </div>
  );
}
