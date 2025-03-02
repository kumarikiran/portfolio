import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaDna, FaAtom, FaLaptopCode } from 'react-icons/fa';
import backgroundImage from '../../assets/images/background.jpeg';
import resume from '../../assets/Document/Resume.pdf';
import profileImage from '../../assets/images/profile.jpeg';

const HeroSection = () => {
  const highlights = [
    {
      icon: <FaDna size={24} />,
      title: "Computational Biology",
      description: "Specializing in genomic research and biological data analysis"
    },
    {
      icon: <FaAtom size={24} />,
      title: "Biophysics",
      description: "Investigating complex biological systems through physical principles"
    },
    {
      icon: <FaLaptopCode size={24} />,
      title: "Infectious Disease Epidemiology",
      description: "Developing transmission models for simulating infection disease"
    }
  ];

  return (
    <section id="home" className="min-h-screen pt-16 relative overflow-hidden">
      {/* Full-width Background Image with Circular Movement */}
      <div className="absolute inset-0 w-full">
        <img 
          src={backgroundImage}
          alt="Background" 
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center center',
            filter: 'contrast(1.1) brightness(0.8)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left order-2 md:order-1">
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Kiran Kumari
            </h1>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg inline-block mb-4">
              <h2 className="text-2xl text-gray-200">Researcher</h2>
              <p className="text-lg text-gray-300">Max Planck Institute for Infection Biology, Berlin</p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 gap-4 mt-8 mb-8">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-lg
                           border border-white/10 hover:border-white/20
                           transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-white/10 rounded-lg text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://kumarikiran.github.io/ " 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={24} className="text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kiran-asha-kumari/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} className="text-white" />
              </a>
              <a 
                href="mailto:kiran.asha.kumari@gmail.com"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={24} className="text-white" />
              </a>
            </div>

            {/* Download CV Button */}
            <a 
              href={resume} 
              download 
              className="mt-6 inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-800 transition duration-300"
            >
              <FaFileDownload className="mr-2" /> Download CV
            </a>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div 
                className="absolute inset-0 rounded-full border-2 border-white/20 
                         animate-spin-slow"
                style={{ animationDuration: '20s' }}
              />
              <div 
                className="absolute inset-0 rounded-full border-2 border-white/10 
                         animate-spin-slow"
                style={{ animationDuration: '15s', animationDirection: 'reverse' }}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                <img 
                  src={profileImage}
                  alt="Profile" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation for Circular Background Movement */}
      <style jsx>{`
        /* Background Image Circular Movement */
        .moving-bg {
          background-image: url(${backgroundImage});
          background-size: cover;
          background-position: center;
          position: absolute;
          width: 200%;
          height: 200%;
          animation: circularMotion 30s linear infinite;
        }

        @keyframes circularMotion {
          0% { transform: translate(-10%, -10%); }
          25% { transform: translate(10%, -10%); }
          50% { transform: translate(10%, 10%); }
          75% { transform: translate(-10%, 10%); }
          100% { transform: translate(-10%, -10%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
