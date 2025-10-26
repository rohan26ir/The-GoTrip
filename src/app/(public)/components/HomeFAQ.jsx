import React from 'react';
import FAQSection from '../../../../components/dynamic/FAQSection';
import SectionHeading from '../../../../components/section/SectionHeading';

const HomeFAQ = () => {

  const faqs = [
  {
    question: "How do I book a tour package?",
    answer:
      "You can book directly through our website, call our hotline, or visit our office for personalized assistance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit cards, debit cards, PayPal, and bank transfers. All payments are secure and encrypted.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes, you can cancel or modify your booking up to 48 hours before departure. Some conditions may apply.",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Absolutely! We offer special discounts for groups of 10 or more people. Contact us for custom group packages.",
  },
];






  return (
    <div>

      <div>
        <SectionHeading
        
          badge="FAQ"
          title="Your Questions Answered"
          description="Find quick answers to common questions about our services and bookings."
          alignment="center"
          badgeColor="#5BBF31"
          badgeTextColor="black"
          h2Textcolor="#323232"
          descriptionClolor="gray"
          className="mb-16"

        />
      </div>
      <FAQSection faqs={faqs} ></FAQSection>
    </div>
  );
};

export default HomeFAQ;