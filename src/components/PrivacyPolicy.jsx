import React from "react";
import { Shield, FileText, Lock, UserCheck, Phone } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString();

  const sections = [
    {
      title: "Introduction",
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      content: (
        <p>
          At{" "}
          <span className="font-semibold text-white">SUH TECH PVT LTD</span>, we
          value your privacy and are committed to safeguarding your personal
          information. This Privacy Policy outlines how we collect, use, and
          protect the data you share with us.
        </p>
      ),
    },
    {
      title: "Information We Collect",
      icon: <UserCheck className="w-6 h-6 text-blue-400" />,
      content: (
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Personal details such as name, email, and phone number</li>
          <li>Company and project-related information</li>
          <li>Technical data like IP address, browser, and device type</li>
          <li>Website usage analytics and cookies</li>
        </ul>
      ),
    },
    {
      title: "How We Use Your Information",
      icon: <Shield className="w-6 h-6 text-pink-400" />,
      content: (
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>To provide and improve our services</li>
          <li>To respond to inquiries and support requests</li>
          <li>To share project updates and important notices</li>
          <li>To analyze usage and enhance user experience</li>
          <li>To comply with legal obligations</li>
        </ul>
      ),
    },
    {
      title: "Information Sharing",
      icon: <Lock className="w-6 h-6 text-green-400" />,
      content: (
        <>
          <p>We do not sell or trade your information. We may only share it:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
            <li>With trusted service providers assisting our operations</li>
            <li>When required by law or legal processes</li>
            <li>In case of business transfers or mergers</li>
            <li>To protect our rights and security</li>
          </ul>
        </>
      ),
    },
    {
      title: "Data Security",
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      content: (
        <p>
          We implement technical and organizational measures to protect your
          information from unauthorized access, alteration, or misuse. This
          includes encryption, secure servers, and regular security checks.
        </p>
      ),
    },
    {
      title: "Your Rights",
      icon: <UserCheck className="w-6 h-6 text-red-400" />,
      content: (
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Access and review your personal information</li>
          <li>Request corrections or updates</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      ),
    },
    {
      title: "Contact Us",
      icon: <Phone className="w-6 h-6 text-cyan-400" />,
      content: (
        <>
          <p>
            If you have any questions about this Privacy Policy, feel free to
            reach out:
          </p>
          <div className="mt-4 p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl border border-white/10 shadow-lg">
            <p className="text-white font-semibold text-lg">SUH TECH PVT LTD</p>
            <p className="text-gray-300">Email: info@suhtech.top</p>
            <p className="text-gray-300">Phone: +91 8298252909</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <section
      id="privacy-policy"
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-lg font-semibold text-purple-400 tracking-wide mb-2">
            Legal Information
          </h4>
          <h1 className="heading-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold brand-gradient-text mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm tracking-wide uppercase">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10 text-gray-300 leading-relaxed">
          {sections.map((section, idx) => (
            <section
              key={idx}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:scale-[1.01] transform transition duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                {section.icon}
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>
              </div>
              <div className="text-gray-300">{section.content}</div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
