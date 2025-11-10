"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import AboutBG from "../../../../public/Section/About.webp";
import AboutBGbtm from "../../../../public/Section/about-bottom.webp";
import Image from "next/image";
import Lottie from "lottie-react";

import support from '../../../../public/lottie/Support-chat.json'
import tavel from '../../../../public/lottie/travel-the-globe.json'

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Our Location",
      details: "123 Travel Street, Adventure City",
      description: "Visit our office for personalized consultation",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone Number",
      details: "+1 (555) 123-4567",
      description: "Mon to Fri 9am to 6pm",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Address",
      details: "hello@thegotrip.com",
      description: "Send us your query anytime!",
    },
  ];

  const faqs = [
    {
      question: "How do I book a tour package?",
      answer: "You can book directly through our website, call our hotline, or visit our office for personalized assistance.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, debit cards, PayPal, and bank transfers. All payments are secure and encrypted.",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Yes, you can cancel or modify your booking up to 48 hours before departure. Some conditions may apply.",
    },
    {
      question: "Do you offer group discounts?",
      answer: "Absolutely! We offer special discounts for groups of 10 or more people. Contact us for custom group packages.",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={AboutBG}
            className="h-full w-full object-cover"
            alt="background-pattern"
            priority
          />
        </div>
        <div className="absolute inset-0 "></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-3 h-3" />
            We're Here to Help
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Ready to start your next adventure? Our team is here to make your travel dreams come true.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="container mx-auto px-4">


          <div className="mx-auto grid grid-cols-1 md:grid-cols-5">

            <div className="relative mx-auto z-0 col-span-2 -mb-36 md:-mr-80 flex items-center justify-center overflow-hidden p-5 md:p-0">
              <Lottie
                animationData={tavel}
                loop={true}
                autoplay={true}
                className="h-60 md:h-full w-auto mb-0 rotate-[120deg]"
              />

            </div>

            {/* Contact Form */}
            <div className="col-span-3 relative z-10 justify-between p-8 bg-white rounded-lg border-l md:border-l-0 border-y border-r overflow-hidden">

              <div>
                <Lottie
                animationData={support}
                loop={true}
                autoplay={true}
                className="h-28 w-auto mb-0"
                />
              </div>

              <div className="text-start mb-3">
                <h2 className="text-3xl font-bold">Send us a Message</h2>
                <p className="text-md mt-0">
                  Fill out the form and we'll reply within 24 hours.
                </p>
              </div>

              <div className="border-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 block">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 block">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">
                      Subject *
                    </label>
                    <select className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                      <option>General Inquiry</option>
                      <option>Tour Booking</option>
                      <option>Group Travel</option>
                      <option>Custom Package</option>
                      <option>Complaint</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">
                      Message *
                    </label>
                    <textarea
                      required
                      placeholder="Tell us about your travel plans or questions..."
                      className="w-full min-h-[130px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 text-lg bg-black hover:bg-[#fa6741] cursor-pointer text-white rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="container mx-auto">
        {/* Contact Information */}
            <div className="space-y-6">

              

              {/* Map */}
              <div className="relative w-full bg-white rounded-3xl shadow-xl  md:overflow-hidden border-0  ">
                
                <div className="w-full h-[525px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4681926535022!2d90.30707740958026!3d23.873091083971303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e67bbf977%3A0xad83526c894485f0!2sCity%20University!5e0!3m2!1sen!2sbd!4v1760938760659!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="City University Location"
                    className="w-full h-full"
                  />
                </div>



                <div className="relative md:absolute right-2 top-2 w-full md:w-[50%] flex flex-col justify-between bg-white rounded-3xl shadow-xl p-8 border-0">
                <h2 className="text-3xl font-bold bg-black bg-clip-text text-transparent mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 text-lg mb-1">
                  Choose the most convenient way to reach out to our team.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300 border-0"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white shadow-lg">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-800 font-medium mb-1">
                            {item.details}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
                
              </div>
            </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 mb-4">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services and bookings.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-2xl px-6 transition-all duration-200 ${
                  openFaq === index 
                    ? 'bg-blue-50/50 border-blue-200 shadow-sm' 
                    : 'bg-white border-gray-200'
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
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-200 ${
                    openFaq === index ? 'max-h-48 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={AboutBGbtm}
            alt="footer"
            className="h-full w-full object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 "></div>
        
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Start Your Journey
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Start your journey with Wanderlust Tours and discover amazing destinations with our carefully crafted travel experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center gap-2">
              Explore Tours
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;