"use client"

import Image from "next/image";
import React from "react";

import AboutBG from "../../../../public/Section/About.webp";
import AboutBGbtm from "../../../../public/Section/about-bottom.webp";

// Lottie
import Lottie from "lottie-react";
import TeamworkAnimation from "../../../../public/lottie/Teamwork-productivy.json";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sharmin Akter",
      role: "Supervisor/Assistant Professor",
      description: "Project guide and mentor",
    },
    {
      name: "Rohan",
      description: "Frontend & Backend development",
    },
    {
      name: "Touhid",
      description: "Frontend development & Deployment",
    },
    {
      name: "Hridoy",
      description: "Database management, Logic Building & Testing",
    },
    {
      name: "Ummehany",
      description: "Planning, Design system & Testing",
    },
  ];

  const features = [
    {
      icon: "🎯",
      title: "Tour Packages",
      description: "Browse curated travel experiences",
    },
    {
      icon: "💰",
      title: "Easy Booking",
      description: "Simple and secure reservation system",
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      description: "Safe and reliable payment processing",
    },
    {
      icon: "⭐",
      title: "User Reviews",
      description: "Authentic feedback from travelers",
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Optimized for all devices",
    },
    {
      icon: "🛡️",
      title: "24/7 Support",
      description: "Round-the-clock customer service",
    },
  ];

  const softwareBuildSteps = [
    { step: "Planning", timeline: "5 days" },
    { step: "Design", timeline: "7 Days" },
    { step: "Coding", timeline: "20 Days" },
    { step: "Testing", timeline: "2 Days" },
    { step: "Deployment", timeline: "1 Days" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <Image
            src={AboutBG}
            className="h-full w-full object-cover"
            alt="background-pattern"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/30 mb-8">
              <span className="text-sm font-semibold">
                City University Project
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Explore The World With{" "}
              <span className="bg-gradient-to-r from-[#FA6741] to-orange-400 bg-clip-text text-transparent">
                Wanderlust Tours
              </span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-12 leading-relaxed">
              A comprehensive tourism platform developed as part of our Software
              Engineering course, bringing seamless travel experiences to your
              fingertips.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16">
              {softwareBuildSteps.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.timeline}
                  </div>
                  <div className="text-blue-100 font-medium">{stat.step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Software Engineering Project
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                This platform represents our team's dedication to applying
                software engineering principles in a real-world scenario.
                Developed at{" "}
                <strong className="text-gray-900">City University</strong>,
                Wanderlust Tours showcases modern web development practices and
                user-centered design.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our tourism website enables users to discover amazing
                destinations, book travel packages, and create unforgettable
                memories with just a few clicks.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Artificial intelligence",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-gray-700 font-medium transition-colors duration-200 border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-96 flex items-center justify-center">
              <Lottie
                animationData={TeamworkAnimation}
                loop={true}
                autoplay={true}
                className="h-full w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize travel planning by providing an intuitive
                platform that makes discovering and booking tours effortless,
                affordable, and enjoyable for everyone.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted travel platform that connects
                adventurers with authentic experiences while promoting
                sustainable tourism practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Combining cutting-edge technology with user-centered design to
                create seamless travel experiences that inspire exploration and
                create memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Our Team
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet The Creative Minds
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated students from City University bringing this project to
              life
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-[100%] md:w-[50%] mx-auto">
              {teamMembers.slice(0, 1).map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="p-6 text-center">
                    <div className="w-20 h-20 bg-[#FA6741] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-[#FA6741] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="font-semibold mb-3">{member.role}</p>
                      <p className="text-sm opacity-90">{member.description}</p>
                      <div className="mt-4 text-xs opacity-75">
                        City University
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.slice(1).map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="p-6 text-center">
                    <div className="w-20 h-20 bg-[#FA6741] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-[#FA6741] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="font-semibold mb-3">{member.role}</p>
                      <p className="text-sm opacity-90">{member.description}</p>
                      <div className="mt-4 text-xs opacity-75">
                        City University
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Features
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Amazing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for perfect travel planning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Technology
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built With Modern Stack
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We've used the latest technologies to ensure optimal
                performance, scalability, and great user experience.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Frontend
                  </h4>
                  <p className="text-gray-600">
                    React.js, Next.js, Tailwind CSS, JavaScript ES6+
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Backend
                  </h4>
                  <p className="text-gray-600">
                    Node.js, Express.js, MongoDB, REST API
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Tools
                  </h4>
                  <p className="text-gray-600">
                    Git, GitHub, VS Code, Postman
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-80">
              {/* Tech Orbs */}
              <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg transform hover:scale-110 transition-transform duration-300">
                React
              </div>
              <div className="absolute top-4 right-20 w-20 h-20 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center text-white font-semibold shadow-lg transform hover:scale-110 transition-transform duration-300">
                Next.js
              </div>
              <div className="absolute bottom-20 left-20 w-22 h-22 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg transform hover:scale-110 transition-transform duration-300">
                Node.js
              </div>
              <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold shadow-lg transform hover:scale-110 transition-transform duration-300">
                MongoDB
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white">
        <div className="absolute w-full h-full object-cover z-0">
          <Image 
          src={AboutBGbtm}
          alt="footer"
          className="h-full w-full brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start your journey with Wanderlust Tours and discover amazing
            destinations with our carefully crafted travel experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 transform hover:scale-105">
              Explore Tours
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;