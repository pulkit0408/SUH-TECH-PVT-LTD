import { useEffect, useState } from "react";

const CareersPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
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

  const handleSubmit = () => {
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

  return (
    <section
      id="#careers"
      className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Clean Hero Section */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl brand-gradient-text mb-4 relative">
              Join Our Innovation Journey
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            </h2>

          <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Shape the future of digital transformation with cutting-edge technologies
            <br className="hidden sm:block" />
            and make an impact across industries worldwide.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {[
              { text: "500+ Projects", icon: "🚀" },
              { text: "50+ Team Members", icon: "👥" },
              { text: "5+ Years Experience", icon: "⭐" },
            ].map((badge, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors duration-300"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-white font-semibold">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose SUH TECH */}
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
                color: "from-pink-500 to-purple-500",
              },
              {
                emoji: "💰",
                title: "Competitive Package",
                desc: "Industry-leading compensation with performance bonuses and comprehensive benefits.",
                color: "from-green-500 to-emerald-500",
              },
              {
                emoji: "📈",
                title: "Career Growth",
                desc: "Clear progression paths with skill development programs and leadership opportunities.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                emoji: "🏠",
                title: "Work-Life Balance",
                desc: "Flexible hours, hybrid work options, and comprehensive health benefits.",
                color: "from-purple-500 to-indigo-500",
              },
              {
                emoji: "🎯",
                title: "Impactful Projects",
                desc: "Work on diverse projects across healthcare, fintech, e-commerce, and education.",
                color: "from-orange-500 to-red-500",
              },
              {
                emoji: "👥",
                title: "Collaborative Culture",
                desc: "Join a supportive environment that values creativity, innovation, and teamwork.",
                color: "from-cyan-500 to-blue-500",
              },
            ].map((item, index) => (
              <article
                key={index}
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl group p-6 text-center hover:bg-white/10 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
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
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </article>
            ))}
          </div>
        </div>

        {/* Current Opportunities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-3xl md:text-4xl lg:text-5xl brand-gradient-text mb-4 relative">
              Current Opportunities
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 text-lg mt-4">
              Discover your next career milestone with us
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {jobPostings.map((job, index) => (
              <div
                key={job.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {job.title}
                      </h3>
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
                      <span className="flex items-center gap-1">
                        📍 {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        🏢 {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        ⏰ {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        🎯 {job.experience}
                      </span>
                      <span className="flex items-center gap-1 text-green-400 font-semibold">
                        💰 {job.salary}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-purple-500/20 border border-purple-400/30 px-3 py-1 rounded-full text-xs text-purple-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleApplyClick(job)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    Apply Now
                  </button>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-400 pt-4 border-t border-white/10">
                  <span>Posted: {formatDate(job.datePosted)}</span>
                  <span>Apply by: {formatDate(job.validThrough)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Our Hiring Process
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 text-lg mt-4">
              Your journey to joining our team
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Apply Online",
                desc: "Submit your application through our comprehensive application process",
                icon: "📝",
              },
              {
                step: "2",
                title: "Initial Screening",
                desc: "HR team reviews applications and conducts phone screening",
                icon: "📞",
              },
              {
                step: "3",
                title: "Technical Interview",
                desc: "Technical assessment and interview with team leads",
                icon: "💻",
              },
              {
                step: "4",
                title: "Final Round",
                desc: "Culture fit interview and offer discussion",
                icon: "🎉",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group relative">
                <div className="relative mb-6 mx-auto w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <div className="absolute inset-1 bg-slate-900 rounded-full"></div>
                  <span className="relative z-10 text-white text-xl font-bold">
                    {item.step}
                  </span>
                </div>

                <div className="text-3xl mb-4">{item.icon}</div>

                <h3 className="text-lg font-semibold mb-3 text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>

                {/* Connection line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 opacity-50"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg mb-4 text-gray-300">
            Contact us at{" "}
            <a
              href="mailto:careers@suhtech.top"
              className="text-purple-400 underline hover:text-purple-300 transition-colors duration-300"
            >
              careers@suhtech.top
            </a>
          </p>
          <p className="text-lg text-gray-300">
            Or call us at{" "}
            <a
              href="tel:+919693329842"
              className="font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              +91-8298252909
            </a>
          </p>
        </div>
      </div>

      {/* Application Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-slate-900 border border-white/20 text-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Apply for {selectedJob?.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Take the first step towards your dream job
                  </p>
                </div>
                <button
                  onClick={closeForm}
                  className="text-gray-400 hover:text-white text-2xl font-bold transition-colors duration-300"
                >
                  ×
                </button>
              </div>

              {/* Application Details */}
              <div className="space-y-5">
                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none transition-all placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none transition-all placeholder-gray-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none transition-all placeholder-gray-500"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Years of Experience *
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none transition-all placeholder-gray-500"
                    placeholder="3 years"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Current Role
                  </label>
                  <input
                    type="text"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none transition-all placeholder-gray-500"
                    placeholder="Senior Developer"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Portfolio/LinkedIn
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none transition-all placeholder-gray-500"
                    placeholder="https://linkedin.com/in/yourname"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Expected Salary
                  </label>
                  <input
                    type="text"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none transition-all placeholder-gray-500"
                    placeholder="10-15 LPA"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-300">
                    Cover Letter *
                  </label>
                  <textarea
                    name="coverLetter"
                    rows="4"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none transition-all placeholder-gray-500"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                  >
                    Send Application
                  </button>
                  <button
                    onClick={closeForm}
                    className="px-6 py-3 border border-white/20 rounded-lg text-gray-300 hover:bg-white/10 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CareersPage;