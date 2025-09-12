import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const CareersPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    currentRole: "",
    resume: null,
    coverLetter: "",
    jobTitle: "",
    portfolio: "",
    expectedSalary: "",
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Mouse tracking for interactive elements
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const jobPostings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "4-6 years",
      description:
        "Lead full-stack development using React, Node.js, and cloud technologies. Drive architecture decisions and mentor junior developers.",
      datePosted: "2024-08-20",
      validThrough: "2024-09-20",
      skills: ["React", "Node.js", "AWS", "MongoDB", "TypeScript"],
      salary: "8-15 LPA",
    },
    {
      id: 2,
      title: "Business Intelligence Analyst",
      department: "Analytics",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Transform data into actionable insights, create dashboards, and support strategic decision-making across the organization.",
      datePosted: "2024-08-18",
      validThrough: "2024-09-18",
      skills: ["SQL", "Power BI", "Tableau", "Python", "Excel"],
      salary: "6-12 LPA",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure system reliability and scalability.",
      datePosted: "2024-08-17",
      validThrough: "2024-09-17",
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform"],
      salary: "7-14 LPA",
    },
    {
      id: 4,
      title: "Mobile App Developer (React Native)",
      department: "Mobile Development",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Develop cross-platform mobile applications using React Native, integrate APIs, and ensure optimal performance.",
      datePosted: "2024-08-16",
      validThrough: "2024-09-16",
      skills: ["React Native", "JavaScript", "Firebase", "Redux", "REST APIs"],
      salary: "5-10 LPA",
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Data Science",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Build machine learning models, analyze complex datasets, and develop predictive analytics solutions for clients.",
      datePosted: "2024-08-15",
      validThrough: "2024-09-15",
      skills: ["Python", "Machine Learning", "TensorFlow", "Pandas", "SQL"],
      salary: "6-12 LPA",
    },
    {
      id: 6,
      title: "UI/UX Designer",
      department: "Design",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "2-5 years",
      description:
        "Create intuitive user interfaces, conduct user research, design wireframes and interactive prototypes for web and mobile apps.",
      datePosted: "2024-08-14",
      validThrough: "2024-09-14",
      skills: [
        "Figma",
        "Adobe XD",
        "User Research",
        "Prototyping",
        "Design Systems",
      ],
      salary: "4-8 LPA",
    },
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setFormData((prev) => ({ ...prev, jobTitle: job.title }));
    setShowForm(true);
    document.body.style.overflow = "hidden";
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedJob(null);
    document.body.style.overflow = "unset";
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.experience ||
      !formData.coverLetter
    ) {
      alert("Please fill in all required fields (marked with *)");
      return;
    }

    const subject = encodeURIComponent(`Job Application: ${formData.jobTitle}`);
    const body = encodeURIComponent(`
Dear SUH TECH Hiring Team,

I am applying for the ${formData.jobTitle} position. Here are my details:

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Experience: ${formData.experience}
Current Role: ${formData.currentRole || "Not specified"}
Portfolio/LinkedIn: ${formData.portfolio || "Not provided"}
Expected Salary: ${formData.expectedSalary || "Negotiable"}

Cover Letter:
${formData.coverLetter}

Best regards,
${formData.fullName}
    `);

    window.location.href = `mailto:careers@suhtech.top?subject=${subject}&body=${body}`;
    closeForm();
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return dateString;
    }
  };

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <section
      id="#careers"
      className="relative py-20 overflow-hidden"
      style={{ 
        backgroundColor: "var(--bg-primary)",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 25%, #16213e 50%, #0a0a0a 75%, #1a0a2e 100%)"
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Interactive cursor glow */}
      <div 
        className="fixed w-96 h-96 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-300"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Hero Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative inline-block mb-6">
            <h1 className="heading-lg text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Join Our{" "}
              <span className="relative">
                <span className="brand-gradient-text animate-pulse">Innovation</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-600/20 to-purple-600/20 blur-xl rounded-lg"></div>
              </span>{" "}
              Journey
            </h1>
          </div>
          
          <p className="subheading text-gray-300 text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            Shape the future of digital transformation with cutting-edge
            technologies
            <br className="hidden sm:block" />
            and make an impact across industries worldwide.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { text: "500+ Projects", gradient: "from-pink-500 to-purple-500", icon: "🚀" },
              { text: "50+ Team Members", gradient: "from-blue-500 to-cyan-500", icon: "👥" },
              { text: "5+ Years Experience", gradient: "from-purple-500 to-pink-500", icon: "⭐" }
            ].map((badge, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${badge.gradient} rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300`}></div>
                <span className={`relative bg-gradient-to-r ${badge.gradient} text-white px-6 py-3 rounded-full font-semibold backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300 flex items-center gap-2`}>
                  <span>{badge.icon}</span>
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Why Choose SUH TECH */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl brand-gradient-text mb-4 relative">
              Why Choose SUH TECH?
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🚀",
                title: "Innovation-Driven",
                desc: "Work with latest technologies and innovative solutions that transform businesses globally.",
                color: "from-pink-500 to-purple-500"
              },
              {
                emoji: "💰",
                title: "Competitive Package",
                desc: "Industry-leading compensation with performance bonuses and comprehensive benefits.",
                color: "from-green-500 to-emerald-500"
              },
              {
                emoji: "📈",
                title: "Career Growth",
                desc: "Clear progression paths with skill development programs and leadership opportunities.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                emoji: "🏠",
                title: "Work-Life Balance",
                desc: "Flexible hours, hybrid work options, and comprehensive health benefits.",
                color: "from-purple-500 to-indigo-500"
              },
              {
                emoji: "🎯",
                title: "Impactful Projects",
                desc: "Work on diverse projects across healthcare, fintech, e-commerce, and education.",
                color: "from-orange-500 to-red-500"
              },
              {
                emoji: "👥",
                title: "Collaborative Culture",
                desc: "Join a supportive environment that values creativity, innovation, and teamwork.",
                color: "from-cyan-500 to-blue-500"
              },
            ].map((item, index) => (
              <article
                key={index}
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl group p-6 text-center hover:bg-white/10 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {item.emoji}
                  </div>
                  <h3 className="font-inter text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </article>
            ))}
          </div>
        </div>

        {/* Enhanced Current Opportunities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl brand-gradient-text mb-4 relative">
              Current Opportunities
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            </h2>
            <p className="text-gray-400 text-lg mt-4">Discover your next career milestone with us</p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobPostings.map((job, index) => (
              <div
                key={job.id}
                className={`rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl group p-6 hover:bg-white/10 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 ${
                  index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-inter text-xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                        {job.title}
                      </h3>
                      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
                      <span className="flex items-center gap-1 hover:text-pink-300 transition-colors">
                        📍 {job.location}
                      </span>
                      <span className="flex items-center gap-1 hover:text-blue-300 transition-colors">
                        🏢 {job.department}
                      </span>
                      <span className="flex items-center gap-1 hover:text-green-300 transition-colors">
                        ⏰ {job.type}
                      </span>
                      <span className="flex items-center gap-1 hover:text-purple-300 transition-colors">
                        🎯 {job.experience}
                      </span>
                      <span className="flex items-center gap-1 text-green-400 font-semibold hover:text-green-300 transition-colors">
                        💰 {job.salary}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 px-3 py-1 rounded-full text-xs text-white border border-white/20 hover:from-purple-500/50 hover:to-pink-500/50 hover:scale-105 transition-all duration-300"
                          style={{
                            animationDelay: `${skillIndex * 0.1}s`
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="btn btn-solid px-6 py-3 text-white font-semibold relative overflow-hidden group/btn hover:scale-110 transition-all duration-300"
                  >
                    <span className="relative z-10">Apply Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
                
                <p className="font-poppins text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {job.description}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span className="hover:text-pink-300 transition-colors">Posted: {formatDate(job.datePosted)}</span>
                  <span className="hover:text-purple-300 transition-colors">Apply by: {formatDate(job.validThrough)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Hiring Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl brand-gradient-text mb-4 relative">
              Our Hiring Process
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            </h2>
            <p className="text-gray-400 text-lg mt-4">Your journey to joining our team</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Apply Online",
                desc: "Submit your application through our comprehensive form",
                icon: "📝"
              },
              {
                step: "2",
                title: "Initial Screening",
                desc: "HR team reviews applications and conducts phone screening",
                icon: "📞"
              },
              {
                step: "3",
                title: "Technical Interview",
                desc: "Technical assessment and interview with team leads",
                icon: "💻"
              },
              {
                step: "4",
                title: "Final Round",
                desc: "Culture fit interview and offer discussion",
                icon: "🎉"
              },
            ].map((item, index) => (
              <div key={index} className="text-center group relative">
                <div className="relative mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:scale-125 transition-all duration-500 animate-pulse"></div>
                  <div className="absolute inset-1 bg-black rounded-full group-hover:inset-0 transition-all duration-500"></div>
                  <span className="relative z-10 text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </span>
                </div>
                
                <div className="text-2xl mb-3 group-hover:scale-110 group-hover:bounce transition-all duration-300">
                  {item.icon}
                </div>
                
                <h3 className="font-inter text-lg font-bold mb-2 text-white group-hover:text-pink-300 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="font-poppins text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {item.desc}
                </p>
                
                {/* Connection line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 opacity-50"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Contact Section */}
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-3xl blur-3xl"></div>
          <div className="relative z-10 p-8">
            <h2 className="heading-lg text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Join Our Team?
            </h2>
            <p className="subheading text-lg mb-6 text-gray-300">
              Contact us at{" "}
              <a
                href="mailto:careers@suhtech.top"
                className="text-pink-400 underline hover:text-pink-300 transition-colors duration-300 hover:scale-105 inline-block"
              >
                careers@suhtech.top
              </a>
            </p>
            <p className="subheading text-lg text-gray-300">
              Or call us at{" "}
              <a
                href="tel:+919693329842"
                className="font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:scale-105 inline-block"
              >
                +91-8298252909
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-lg rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl shadow-purple-500/20 relative">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-2xl animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Apply for {selectedJob?.title}
                  </h3>
                  <p className="text-gray-600">Take the first step towards your dream job</p>
                </div>
                <button
                  onClick={closeForm}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold hover:scale-110 transition-all duration-300 hover:rotate-90"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors">
                      Experience *
                    </label>
                    <select
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    >
                      <option value="">Select Experience</option>
                      <option value="0-1 years">0-1 years</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="2-3 years">2-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors">
                      Current Role
                    </label>
                    <input
                      type="text"
                      name="currentRole"
                      value={formData.currentRole}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors">
                      Expected Salary (LPA)
                    </label>
                    <input
                      type="text"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      placeholder="e.g., 8-12 LPA"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors">
                    Portfolio/LinkedIn URL
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors">
                    Resume *
                  </label>
                  <input
                    type="file"
                    name="resume"
                    required
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Accept PDF, DOC, DOCX files only
                  </p>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-600 transition-colors">
                    Cover Letter *
                  </label>
                  <textarea
                    name="coverLetter"
                    required
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us why you're perfect for this role..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 resize-none"
                  ></textarea>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 btn btn-solid py-3 px-6 text-white font-semibold relative overflow-hidden group hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Submit Application</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button
                    type="button"
                    onClick={closeForm}
                    className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {/* Scroll to top floating button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 z-40 flex items-center justify-center group"
      >
        <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span>
      </button>
    </section>
  );
};

export default CareersPage;