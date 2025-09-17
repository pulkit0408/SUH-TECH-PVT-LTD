import { useState, useEffect } from "react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6);

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      client: "TechMart Inc.",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      duration: "3 months",
      status: "Completed",
      results: "300% increase in online sales",
      link: "#"
    },
    {
      id: 2,
      title: "Fitness Tracking Mobile App",
      category: "app",
      client: "FitLife Studios",
      description: "Cross-platform mobile app with workout tracking, nutrition planning, and social features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "Redux"],
      duration: "4 months",
      status: "Completed",
      results: "50k+ downloads in first month",
      link: "#"
    },
    {
      id: 3,
      title: "Digital Marketing Campaign",
      category: "seo",
      client: "Green Energy Co.",
      description: "Comprehensive SEO strategy and digital marketing campaign for renewable energy company.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["Google Analytics", "SEMrush", "Google Ads"],
      duration: "6 months",
      status: "Ongoing",
      results: "400% organic traffic growth",
      link: "#"
    },
    {
      id: 4,
      title: "Cloud Infrastructure Setup",
      category: "cloud",
      client: "StartupXYZ",
      description: "Scalable cloud architecture with auto-scaling, monitoring, and CI/CD pipeline implementation.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      duration: "2 months",
      status: "Completed",
      results: "60% reduction in hosting costs",
      link: "#"
    },
    {
      id: 5,
      title: "Restaurant Management System",
      category: "web",
      client: "Bella Vista Restaurant",
      description: "Complete restaurant management solution with POS, inventory, and customer relationship features.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      duration: "5 months",
      status: "Completed",
      results: "40% improvement in order efficiency",
      link: "#"
    },
    {
      id: 6,
      title: "Learning Management App",
      category: "app",
      client: "EduTech Solutions",
      description: "Educational mobile app with video streaming, quiz system, and progress tracking.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      technologies: ["Flutter", "Firebase", "Vimeo API"],
      duration: "4 months",
      status: "Completed",
      results: "25k+ active students",
      link: "#"
    },
    {
      id: 7,
      title: "Local SEO Optimization",
      category: "seo",
      client: "City Dental Clinic",
      description: "Local search optimization and Google My Business management for healthcare provider.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
      technologies: ["Local SEO", "Google My Business", "Schema Markup"],
      duration: "3 months",
      status: "Completed",
      results: "200% increase in local appointments",
      link: "#"
    },
    {
      id: 8,
      title: "Microservices Architecture",
      category: "cloud",
      client: "FinTech Pro",
      description: "Migration from monolithic to microservices architecture with enhanced security and scalability.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      technologies: ["Docker", "Kubernetes", "API Gateway", "MongoDB"],
      duration: "6 months",
      status: "Completed",
      results: "90% improvement in system reliability",
      link: "#"
    },
    {
      id: 9,
      title: "Corporate Website Redesign",
      category: "web",
      client: "Global Manufacturing Inc.",
      description: "Modern, responsive website redesign with improved UX and conversion optimization.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "Contentful", "Vercel"],
      duration: "2 months",
      status: "Completed",
      results: "150% increase in conversion rate",
      link: "#"
    }
  ];

  const categories = [
    { key: "all", label: "All Projects", count: projects.length },
    { key: "web", label: "Web Development", count: projects.filter(p => p.category === "web").length },
    { key: "app", label: "Mobile Apps", count: projects.filter(p => p.category === "app").length },
    { key: "seo", label: "SEO & Marketing", count: projects.filter(p => p.category === "seo").length },
    { key: "cloud", label: "Cloud Solutions", count: projects.filter(p => p.category === "cloud").length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.project-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [displayedProjects]);

  const getCategoryIcon = (category) => {
    const icons = {
      web: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
        </svg>
      ),
      app: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
        </svg>
      ),
      seo: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      ),
      cloud: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      )
    };
    return icons[category] || icons.web;
  };

  const getCategoryGradient = (category) => {
    const gradients = {
      web: "from-blue-500 via-cyan-500 to-teal-500",
      app: "from-purple-500 via-pink-500 to-rose-500",
      seo: "from-green-500 via-emerald-500 to-teal-500",
      cloud: "from-orange-500 via-amber-500 to-yellow-500"
    };
    return gradients[category] || gradients.web;
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-full mb-6">
            <div className="flex space-x-1 mr-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-400"></div>
            </div>
            <span className="text-white font-medium">Our Success Stories</span>
          </div>

          <h2 className="font-inter text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="brand-gradient-text">Portfolio</span>
          </h2>
          <p className="font-poppins text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse collection of successful projects that showcase our expertise across web development, mobile applications, SEO, and cloud solutions.
          </p>
        </div>

        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => {
                setActiveFilter(category.key);
                setVisibleProjects(6);
              }}
              className={`group btn-quote relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm ${
                activeFilter === category.key
                  ? 'text-white shadow-lg transform scale-105 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 hover:bg-white/20 hover:border-white/30'
                  : 'text-gray-400 hover:text-white hover:scale-105 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 hover:bg-white/20 hover:border-white/30'
              }`}
            >
              <span className="relative flex items-center space-x-2">
                <span>{category.label}</span>
                <span className={`inline-flex  items-center justify-center w-6 h-6 text-xs rounded-full ${
                  activeFilter === category.key 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-700 text-gray-300 group-hover:bg-gray-600'
                }`}>
                  {category.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group relative opacity-0 transform translate-y-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated border */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${getCategoryGradient(project.category)} rounded-2xl blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-400/20' 
                      : 'bg-blue-500/20 text-blue-400 border border-blue-400/20'
                  }`}>
                    {project.status}
                  </div>

                  {/* Category Icon */}
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryGradient(project.category)} flex items-center justify-center text-white shadow-lg`}>
                    {getCategoryIcon(project.category)}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-inter text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">Client: {project.client}</p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-xs rounded-full border border-purple-400/20">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide">Duration</p>
                      <p className="text-white font-semibold text-sm">{project.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide">Impact</p>
                      <p className={`font-semibold text-sm bg-gradient-to-r ${getCategoryGradient(project.category)} bg-clip-text text-transparent`}>
                        {project.results}
                      </p>
                    </div>
                  </div>

                  {/* View Project Button */}
                  <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white font-medium text-sm rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg">
                    View Project Details
                    <svg className="inline-block ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center">
            <button
              onClick={loadMore}
              className="group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-xl opacity-90"></div>
              <div className="absolute inset-0 rounded-xl border border-white/20"></div>
              <span className="relative flex items-center text-white">
                Load More Projects
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        )}

        {/* Portfolio CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="glass-card p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="font-inter text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="font-poppins text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our proven expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-quote px-8 py-4 hover:text-white text-white font-semibold rounded-xl">
                Start Your Project
                <span className="btn-quote-glow"></span>
              </a>
              <a href="#contact" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;