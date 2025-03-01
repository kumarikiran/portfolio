import React from 'react';
import { FaGraduationCap, FaBriefcase, FaRegBuilding } from 'react-icons/fa';

const TimelineSection = () => {
  const workExperience = [
    {
      id: 1,
      date: 'Nov 2023 - Present',
      title: 'Postdoctoral Research Fellow',
      institution: 'Max Planck Institute for Infection Biology',
      location: 'Berlin, Germany',
      description: 'Research in Computational Biology and Biophysics',
      icon: <FaBriefcase size={24} />
    },
    {
      id: 2,
      date: 'Jan 2023 - Oct 2023',
      title: 'Postdoctoral Research Fellow',
      institution: 'University of Texas at Austin',
      location: 'Austin, USA',
      description: 'Research in Computational Biology and Biophysics',
      icon: <FaBriefcase size={24} />
    },
    {
      id: 3,
      date: '2016 - 2021',
      title: 'Teaching Assistant',
      institution: 'Monash University & IIT Bombay',
      location: 'Australia & India',
      description: '• Teaching Assistant for Transport Phenomenon at Monash University, Australia\n• Teaching Assistant for Mathematical Methods for Biologists at IIT Bombay\n• Mentored 4 post-graduate students in computational methods',
      icon: <FaRegBuilding size={24} />
    }
  ];

  const education = [
    {
      id: 1,
      date: '2016 - 2021',
      title: 'Ph.D. in Computational Biophysics',
      institution: 'IITB-Monash Research Academy',
      location: 'IIT Bombay, India & Monash University, Australia',
      description: 'Joint PhD program • CPI: 9.53/10 • Thesis: Computing the spatial organization and dynamics of chromatin domains • Advisors: Prof. Ranjith Padinhateeri & Prof. Ravi Jagadeeshan',
      icon: <FaGraduationCap size={24} />
    },
    {
      id: 2,
      date: '2014 - 2016',
      title: 'M.Tech. in Chemical Engineering',
      institution: 'Indian Institute of Technology (IIT) Dhanbad',
      location: 'Jharkhand, India',
      description: 'CPI: 9.54/10',
      icon: <FaGraduationCap size={24} />
    },
    {
      id: 3,
      date: '2010 - 2014',
      title: 'B.Tech. in Chemical Engineering',
      institution: 'BIT Sindri',
      location: 'Dhanbad, India',
      description: 'CPI: 8.08/10',
      icon: <FaGraduationCap size={24} />
    }
  ];

  const TimelineItem = ({ item, isLeft }) => (
    <div className="relative mb-12">
      <div className={`flex items-center justify-between w-full ${
        isLeft ? 'flex-row-reverse' : ''
      }`}>
        {/* Date */}
        <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
          <span className="font-inter text-sm text-gray-600 font-medium tracking-wide">
            {item.date}
          </span>
        </div>

        {/* Icon */}
        <div className="z-10 flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full shadow-lg">
          <div className="text-white">
            {item.icon}
          </div>
        </div>

        {/* Content */}
        <div className={`w-5/12 ${isLeft ? 'text-left' : 'text-right'}`}>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 
                        hover:shadow-md transition-shadow duration-300">
            <h3 className="font-playfair text-xl text-gray-800 font-medium mb-1">
              {item.title}
            </h3>
            <p className="font-inter text-gray-700 font-medium mb-1">
              {item.institution}
            </p>
            <p className="font-inter text-gray-500 text-sm mb-2">
              {item.location}
            </p>
            <p className="font-inter text-gray-600 text-sm">
              {item.description}
            </p>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className={`absolute top-4 ${
        isLeft ? 'right-1/2 mr-6' : 'left-1/2 ml-6'
      }`}>
        <div className={`w-3 h-3 rotate-45 bg-white border-t border-l border-gray-100 ${
          isLeft ? '-translate-x-1/2' : 'translate-x-1/2'
        }`} />
      </div>
    </div>
  );

  return (
    <section id="timeline" className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Work Experience */}
        <div className="mb-20">
          <h2 className="text-4xl font-playfair text-center text-gray-800 mb-3 font-medium">
            Work Experience
          </h2>
          <p className="text-center text-gray-600 mb-12 font-inter text-lg font-light">
            Professional journey and achievements
          </p>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" />
            {workExperience.map((item, index) => (
              <TimelineItem key={item.id} item={item} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-4xl font-playfair text-center text-gray-800 mb-3 font-medium">
            Education
          </h2>
          <p className="text-center text-gray-600 mb-12 font-inter text-lg font-light">
            Academic background and qualifications
          </p>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" />
            {education.map((item, index) => (
              <TimelineItem key={item.id} item={item} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;