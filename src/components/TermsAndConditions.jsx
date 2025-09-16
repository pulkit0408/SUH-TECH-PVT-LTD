import React from "react";
import {
  FileText,
  Scroll,
  CreditCard,
  Shield,
  Briefcase,
  AlertTriangle,
  LifeBuoy,
  Ban,
  Gavel,
  RefreshCw,
  Phone,
} from "lucide-react";

const TermsAndConditions = () => {
  const lastUpdated = new Date().toLocaleDateString();

  const sections = [
    {
      title: "Agreement to Terms",
      icon: <Scroll className="w-6 h-6 text-purple-400" />,
      content: (
        <p>
          By using{" "}
          <span className="font-semibold text-white">Suhtech’s</span> website
          and services, you agree to the terms and conditions mentioned here. If
          you do not accept these terms, please discontinue use of our services.
        </p>
      ),
    },
    {
      title: "Service Description",
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      content: (
        <>
          <p>Suhtech provides technology solutions including:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Web development and design</li>
            <li>Mobile app development (iOS & Android)</li>
            <li>SEO and digital marketing</li>
            <li>Cloud & DevOps solutions</li>
            <li>IT consulting and support</li>
            <li>Software maintenance</li>
          </ul>
        </>
      ),
    },
    {
      title: "User Responsibilities",
      icon: <Briefcase className="w-6 h-6 text-pink-400" />,
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Provide accurate project details</li>
          <li>Keep account details confidential</li>
          <li>Follow applicable laws when using our services</li>
          <li>Respect intellectual property rights</li>
          <li>Give timely feedback and approvals</li>
          <li>Make payments as agreed</li>
        </ul>
      ),
    },
    {
      title: "Payment Terms",
      icon: <CreditCard className="w-6 h-6 text-green-400" />,
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Costs are detailed in proposals or contracts</li>
          <li>Generally 50% upfront, 50% on completion</li>
          <li>Retainers billed monthly in advance</li>
          <li>Late payments may incur fees</li>
          <li>Refunds depend on project stage and contract</li>
        </ul>
      ),
    },
    {
      title: "Intellectual Property",
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Clients own final deliverables after full payment</li>
          <li>Suhtech retains rights to its methods and frameworks</li>
          <li>Third-party tools remain with their owners</li>
          <li>Suhtech may showcase projects in its portfolio</li>
        </ul>
      ),
    },
    {
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Liability limited to amount paid for services</li>
          <li>No responsibility for indirect or incidental damages</li>
          <li>Client must ensure proper data backup</li>
          <li>Not liable for third-party service failures</li>
        </ul>
      ),
    },
    {
      title: "Warranty & Support",
      icon: <LifeBuoy className="w-6 h-6 text-cyan-400" />,
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>30-day warranty for bug fixes</li>
          <li>Support provided on best-effort basis</li>
          <li>Extended support via maintenance contracts</li>
          <li>No warranty for third-party integrations</li>
        </ul>
      ),
    },
    {
      title: "Termination",
      icon: <Ban className="w-6 h-6 text-pink-500" />,
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Either party may terminate with 30 days’ notice</li>
          <li>Immediate termination for contract breach</li>
          <li>Work done till termination will be billed</li>
          <li>Client data will be shared within 30 days</li>
        </ul>
      ),
    },
    {
      title: "Governing Law",
      icon: <Gavel className="w-6 h-6 text-indigo-400" />,
      content: (
        <p>
          These terms will be governed by the laws of the jurisdiction where
          Suhtech operates. Disputes will fall under the courts of that
          jurisdiction.
        </p>
      ),
    },
    {
      title: "Changes to Terms",
      icon: <RefreshCw className="w-6 h-6 text-orange-400" />,
      content: (
        <p>
          Suhtech may update these Terms at any time. Changes will apply once
          published on our website. Continued use of services means acceptance
          of updated terms.
        </p>
      ),
    },
    {
      title: "Contact Information",
      icon: <Phone className="w-6 h-6 text-teal-400" />,
      content: (
        <div className="mt-4 p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl border border-white/10 shadow-lg">
          <p className="text-white font-semibold text-lg">Suhtech</p>
          <p className="text-gray-300">Email: info@suhtech.top</p>
          <p className="text-gray-300">Phone: +91 8298252909</p>
          <p className="text-gray-300">
            Business Hours: Mon - Fri, 10:00 AM - 6:00 PM
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      id="terms-conditions"
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h4 className="text-lg font-semibold text-purple-400 tracking-wide mb-2">
            Legal Information
          </h4>
          <h1 className="heading-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold brand-gradient-text mb-6">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 text-sm tracking-wide uppercase">
            Last updated: {lastUpdated}
          </p>
        </header>

        {/* Content Sections */}
        <main className="space-y-10 text-gray-300 leading-relaxed">
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
              {section.content}
            </section>
          ))}
        </main>
      </div>
    </section>
  );
};

export default TermsAndConditions;
