
import { useState, useEffect } from "react";

import {
  Code,
  Database,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  ChevronDown,
  TrendingUp,
  PieChart,
} from "lucide-react";


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  }
};

  const downloadResume = () => {
    // Convert Google Drive view link to direct download link
    const fileId = '1OeYAUI7m2h70uCQ860AruHuklyCdCZy-';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Create temporary link and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Mohammad_Ehtisham_Khan_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    dataAnalytics: ['Power BI', 'Tableau', 'Excel (Advanced)', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    programming: ['Python', 'SQL', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
    webTech: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
    core: ['Data Analytics', 'Business Intelligence', 'Statistical Analysis', 'Data Visualization']
  };

  const projects = [
    {
      title: 'Real Estate Market Analysis – Pre vs Post Pandemic',
      tech: 'Python, SQL, Tableau',
      period: '2025',
      icon: TrendingUp,
      points: [
        'Analyzed 5,000+ housing records using Python and SQL, identifying 35% pricing shift in urban markets post-COVID',
        'Performed statistical analysis revealing 40% increase in suburban demand',
        'Created interactive Tableau dashboards for strategic decision-making'
      ],
      type: 'analytics'
    },
    {
      title: 'Business Intelligence Dashboard',
      tech: 'Power BI, SQL, Excel',
      period: '2025',
      icon: PieChart,
      points: [
        'Designed end-to-end BI solution integrating SQL queries with Power BI for real-time business metrics tracking',
        'Built interactive dashboards with KPIs and predictive insights',
        'Automated reporting pipelines reducing time by 60%'
      ],
      type: 'analytics'
    },
    {
      title: 'ExamPrep – Online Examination Portal',
      tech: 'MERN Stack',
      period: 'July 2025 – Sept 2025',
      icon: Code,
      points: [
        'Architected full-stack application serving 500+ concurrent users with React.js frontend and Node.js backend',
        'Designed scalable RESTful APIs with Express.js and MongoDB, achieving 99.5% uptime',
        'Implemented JWT authentication, role-based access control, and automated result generation'
      ],
      type: 'development'
    }
  ];

  const experience = [
    {
      role: 'Python for Data Science Intern',
      company: 'IBM (via Etrain)',
      period: '2025',
      points: [
        'Developed data visualization dashboards using Matplotlib and Seaborn, processing 10,000+ record datasets',
        'Implemented data cleaning pipelines with Pandas, improving data quality by 30%',
        'Performed statistical analysis and predictive modeling'
      ]
    },
    {
      role: 'Web Development & Data Analysis Intern',
      company: 'Tecknoligent India Pvt. Ltd., Kanpur',
      period: 'Aug 2024 – Sept 2024',
      points: [
        'Conducted data analysis for internal performance metrics using Excel and Python, reducing processing time by 15%',
        'Engineered responsive web applications improving user engagement by 25%'
      ]
    }
  ];

  const certifications = [
    'Tata Data Visualisation: Empowering Business with Effective Insights – Forage',
    'Python for Data Science – IBM via Etrain',
    'Frontend Web Development – Value-Added Online Course'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            MEK
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-cyan-400 transition-colors duration-300 ${
                  activeSection === item.toLowerCase() ? 'text-cyan-400 font-semibold' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cyan-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-sm border-t border-slate-700/50">
            <div className="px-6 py-4 space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 hover:text-cyan-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400 font-semibold' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-500/50 mb-2">
              <span className="text-cyan-300 text-sm font-semibold">📊 Data Analyst</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Mohammad Ehtisham Khan</span>
            </h2>
            <p className="text-xl text-slate-300">
              Transforming Data into Actionable Business Insights
            </p>
            <p className="text-lg text-slate-400">
              Aspiring Data Analyst specializing in Business Intelligence, Statistical Analysis & Data Visualization | Power BI • Tableau • Python • SQL
            </p>
            <div className="flex gap-4 pt-4 flex-wrap">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Projects
              </button>
              <button
                onClick={downloadResume}
                className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <img
                src="/src/assets/photo.jpg"
                alt="Mohammad Ehtisham Khan"
                className="relative rounded-full w-80 h-80 object-cover border-4 border-slate-800"
              />
            </div>
          </div>
        </div>
        <button onClick={() => scrollToSection('about')} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <GraduationCap className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-xl text-cyan-400 mb-2">Bachelor of Technology in Computer Science</p>
              <p className="text-slate-300">Integral University, Lucknow</p>
              <p className="text-slate-400 mb-4">Expected: 2026 | CGPA: 7.9/10.0</p>
              <p className="text-sm text-slate-400">
                Relevant Coursework: Data Structures, Algorithms, Database Management, Web Technologies, Machine Learning
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <BarChart3 className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <p className="text-slate-300 leading-relaxed">
                I'm passionate about extracting meaningful insights from complex datasets and transforming them into compelling visual stories. 
                With expertise in Power BI, Tableau, Python, and SQL, I specialize in business intelligence and statistical analysis. 
                My full-stack development skills enable me to build end-to-end data solutions and interactive analytics dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technical Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/70 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <BarChart3 className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Data Analytics & BI</h3>
              <div className="flex flex-wrap gap-2">
                {skills.dataAnalytics.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm text-cyan-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/70 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <Code className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/70 rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <Database className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Web Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.webTech.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/70 rounded-2xl p-6 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <Award className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.core.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-500/20 rounded-full text-sm text-green-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-slate-700/50">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                    <p className="text-lg text-slate-300 mb-2">{exp.company}</p>
                    <p className="text-sm text-slate-400 mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div key={idx} className="bg-slate-800/70 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700/50">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-10 h-10 text-cyan-400" />
                    <ExternalLink className="w-5 h-5 text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                  </div>
                  {project.type === 'analytics' && (
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 rounded-full text-xs text-cyan-300 font-semibold mb-3">
                      Data Analytics
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-cyan-400 text-sm mb-2">{project.tech}</p>
                  <p className="text-slate-400 text-sm mb-4">{project.period}</p>
                  <ul className="space-y-2">
                    {project.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-slate-700/50">
                <Award className="w-8 h-8 text-cyan-400 mb-4" />
                <p className="text-slate-300">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            I'm actively seeking data analyst opportunities. Let's discuss how I can help turn your data into actionable insights!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:shahankhan8298@gmail.com" 
              className="bg-slate-800/70 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <p className="text-slate-300 break-all">shahankhan8298@gmail.com</p>
            </a>
            <a 
              href="tel:+918355020354" 
              className="bg-slate-800/70 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <p className="text-slate-300">+91-8355020354</p>
            </a>
            <div className="bg-slate-800/70 rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <p className="text-slate-300">Gonda, Uttar Pradesh</p>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/Ehtishamkhan8298" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/70 rounded-full hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-110"
              aria-label="Github Profile"
            >
              <Github className="w-6 h-6 text-cyan-400" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohammad-ehtisham-khan-9611202a0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/70 rounded-full hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-110"
              aria-label="Linkedin Profile"
            >
              <Linkedin className="w-6 h-6 text-blue-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2026 Mohammad Ehtisham Khan.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;