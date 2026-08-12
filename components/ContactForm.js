"use client";

import { useState } from "react";

const budgetRanges = [
  "Under €5,000",
  "€5,000 – €15,000",
  "€15,000 – €30,000",
  "€30,000+",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {status === "success" && (
        <div className="form-status success" role="status">
          Thanks — we&rsquo;ll be in touch within two business days.
        </div>
      )}
      {status === "error" && (
        <div className="form-status error" role="alert">
          Something went wrong sending that. Try again, or email us
          directly.
        </div>
      )}

      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required autoComplete="name" />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
        />
      </div>

      <div className="form-field">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" autoComplete="organization" />
      </div>

      <div className="form-field">
        <label htmlFor="budget">Budget range</label>
        <select id="budget" name="budget" defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>

      <button type="submit" className="pill pill-solid" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
