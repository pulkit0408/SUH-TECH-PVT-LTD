import React from "react";

const products = [
  {
    key: "crm",
    title: "CRM SaaS",
    desc: "Manage leads, pipelines, and customer success with dashboards and automation.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1600&fit=crop",
  },
  {
    key: "payroll",
    title: "Payroll Management",
    desc: "Streamline payroll, attendance, and compliance with one click.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&fit=crop",
  },
  {
    key: "chatbot",
    title: "AI Chatbot (RBAC)",
    desc: "Role-based access control with secure conversations across teams.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&fit=crop",
  },
  {
    key: "lms",
    title: "LMS SaaS",
    desc: "Launch courses, track progress, and certify learners at scale.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&fit=crop",
  },
];

const InhouseProducts = () => {
  return (
    <section className="relative py-20 overflow-hidden parallax-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1527443224154-c4f2a9d4a80a?w=1920&fit=crop)", backgroundColor: "var(--bg-primary)" }}>
      <div className="absolute inset-0 parallax-overlay" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-inter text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Our <span className="brand-gradient-text">In‑House SaaS</span>
          </h2>
          <p className="font-poppins text-gray-300 mt-3 max-w-2xl mx-auto">
            Tools that power our operations and can accelerate yours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.key} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl">
              <div className="h-40">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.6) 100%)" }} />
              <div className="p-5">
                <h3 className="font-inter text-lg font-bold text-white">{p.title}</h3>
                <p className="font-poppins text-sm text-gray-300 mt-2">{p.desc}</p>
                <div className="mt-4">
                  <a href="#contact" className="inline-block px-4 py-2 rounded-lg text-sm font-semibold btn-quote">Explore</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InhouseProducts;
