"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail } from "lucide-react"; // ✅ Proper icons

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // 🔹 replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // 🔹 replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // 🔹 replace with your EmailJS public key
      )
      .then(
        () => {
          setSent(true);
          e.target.reset();
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-8 md:px-40 py-16 gap-16"
    >
      {/* LEFT SIDE: Contact Info */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold border-l-4 border-yellow-400 pl-3">
          Get in Touch
        </h2>
        <p className="text-gray-300 max-w-md">
          Have questions or want to collaborate? Fill out the form, and I’ll get
          back to you as soon as possible.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <MapPin className="text-white" />
            <span className="text-white">123 Estate Avenue, New York</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-white" />
            <span className="text-white">+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-white" />
            <span className="text-white">contact@estatixprime.com</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="md:w-1/2 w-[50vb] bg-[#111] p-8 shadow-lg border border-yellow-400 space-y-4"
      >
        <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>

        <div>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white outline-none py-2 px-1"
          />
        </div>
        <div>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white outline-none py-2 px-1"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full bg-transparent border-b-2 border-yellow-400 text-white outline-none py-2 px-1 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
        >
          {sent ? "Message Sent!" : "Send Message"}
        </button>
      </form>
    </section>
  );
}
