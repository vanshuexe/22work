"use client";

import { useState } from "react";
import { company } from "@/lib/company";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = "Website enquiry from " + data.get("name");
    const body = [
      "Name: " + data.get("name"),
      "Phone: " + data.get("phone"),
      "Email: " + data.get("email"),
      "",
      data.get("message"),
    ].join("\n");
    window.location.href =
      "mailto:" +
      company.email +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    setSent(true);
  }

  return (
    <form className="ras-form" onSubmit={handleSubmit}>
      <div className="ras-form-row">
        <label>
          <span>Your Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
      </div>
      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>
      <button className="btn-read" type="submit">
        Send Message
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 2 11 13" />
          <path d="M22 2 15 22l-4-9-9-4 20-7z" />
        </svg>
      </button>
      {sent ? (
        <p className="ras-form-note" role="status">
          Your email app should open with the message ready to send. If it
          did not, write to {company.email}.
        </p>
      ) : null}
    </form>
  );
}
