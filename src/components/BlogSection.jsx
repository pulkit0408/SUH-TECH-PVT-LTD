import React from "react";

const posts = [
  {
    title: "Why Performance Matters in Web Apps",
    excerpt: "Tech choices that keep your app fast as you scale.",
    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=1200&fit=crop",
  },
  {
    title: "Design Systems for Startup Teams",
    excerpt: "Stay consistent and ship faster with a shared language.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&fit=crop",
  },
  {
    title: "CI/CD for Mobile and Web",
    excerpt: "Automate your release train and sleep better at night.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section className="relative py-20" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl brand-gradient-text">
            Leading companies trust us<br className="hidden sm:block" /> to develop software
          </h2>
          <p className="subheading text-gray-300 mt-3 max-w-2xl mx-auto">
            Insights from our product, design, and engineering teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <article key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl group">
              <div className="h-44">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-inter text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="font-poppins text-sm text-gray-300">{p.excerpt}</p>
                <div className="mt-4">
                  <a href="#" className="btn btn-outline">Read More</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
