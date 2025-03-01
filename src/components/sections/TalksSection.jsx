import React from 'react';
import { FaMicrophoneAlt, FaChalkboardTeacher } from 'react-icons/fa';

const TalksSection = () => {
  const conferences = [
    {
      id: 1,
      date: 'March 2022',
      title: 'American Physical Society',
      location: 'Las Vegas, Nevada',
      type: 'Poster Presentation',
      icon: <FaMicrophoneAlt size={20} />
    },
    {
      id: 2,
      date: 'December 2020',
      title: 'Statistical Mechanics of Soft Matter',
      location: 'Griffith University & University of Queensland, Brisbane, Australia',
      type: 'Talk',
      note: 'Virtual Conference',
      icon: <FaChalkboardTeacher size={20} />
    },
    {
      id: 3,
      date: 'November 2020',
      title: '3D Genomics 2020: Interdisciplinary school in 3D genomics',
      location: 'Lyon, France',
      type: 'Participant',
      note: 'Virtual Conference',
      subtitle: 'From experiments to models and back',
      icon: <FaMicrophoneAlt size={20} />
    },
    {
      id: 4,
      date: 'October 2020',
      title: 'Biophysics Paschim',
      location: 'CSIR-NCL, Pune, India',
      type: 'Poster Presentation',
      note: 'Virtual Conference',
      icon: <FaMicrophoneAlt size={20} />
    },
    {
      id: 5,
      date: 'March 2019',
      title: 'EMBO Symposium: Regulatory epigenomics',
      location: 'IMSc Chennai, India',
      type: 'Poster Presentation',
      subtitle: 'From large data to useful models',
      icon: <FaMicrophoneAlt size={20} />
    },
    {
      id: 6,
      date: 'December 2018',
      title: 'International Union of Theoretical and Applied Mechanics',
      location: 'IIT Kanpur, India',
      type: 'Poster Presentation',
      icon: <FaMicrophoneAlt size={20} />
    },
    {
      id: 7,
      date: 'November 2018',
      title: '7th Meeting of the Asian Forum of Chromosome and Chromatin Biology',
      location: 'JNCASR, Bangalore, India',
      type: 'Poster Presentation',
      icon: <FaMicrophoneAlt size={20} />
    },
    {
      id: 8,
      date: 'October 2017',
      title: 'Chemical Engineering Postgraduate Association Conference',
      location: 'Monash University, Australia',
      type: 'Talk',
      icon: <FaChalkboardTeacher size={20} />
    }
  ];

  return (
    <section id="talks" className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center text-gray-800 mb-3 font-medium">
          Talks & Conferences
        </h2>
        <p className="text-center text-gray-600 mb-12 font-inter text-lg font-light">
          Selected presentations and conference participations
        </p>

        <div className="space-y-6">
          {conferences.map((conf) => (
            <div 
              key={conf.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 
                       hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-gray-500">
                      {conf.date}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      conf.type === 'Talk' 
                        ? 'bg-blue-100 text-blue-800' 
                        : conf.type === 'Poster Presentation'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {conf.type}
                    </span>
                    {conf.note && (
                      <span className="text-xs text-gray-500 italic">
                        {conf.note}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-inter text-gray-800 font-medium mb-1">
                    {conf.title}
                  </h3>
                  {conf.subtitle && (
                    <p className="text-sm text-gray-600 mb-1 italic">
                      {conf.subtitle}
                    </p>
                  )}
                  <p className="text-sm text-gray-600">
                    {conf.location}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${
                  conf.type === 'Talk' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {conf.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalksSection;