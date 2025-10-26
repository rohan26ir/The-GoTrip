"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="">
      <div className="container mx-auto px-4">

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl px-6 transition-all duration-200 ${
                openFaq === index
                  ? "bg-blue-50/50 border-blue-200 shadow-sm"
                  : "bg-white border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full py-6 text-left flex items-center justify-between hover:no-underline"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openFaq === index ? "max-h-48 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;