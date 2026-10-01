"use client";

import { useState } from "react";

function FaqItem({ item, id }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <h3>
        <button
          type="button"
          className="faq-question"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{item.q}</span>
          <svg
            className="faq-arrow"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </h3>
      <div id={id} className="faq-answer" hidden={!open}>
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items }) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <FaqItem key={item.q} item={item} id={`faq-answer-${i}`} />
      ))}
    </div>
  );
}
