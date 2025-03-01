import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'timeline', 'publications', 'talks', 'contact'];
      const navbarHeight = 64;
      const scrollPosition = window.scrollY + navbarHeight + 50;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'timeline', label: 'Experience' },
    { id: 'publications', label: 'Publications' },
    { id: 'talks', label: 'Talks' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-black/80 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span 
            className="text-xl font-serif text-white cursor-pointer hover:text-gray-300 transition-colors"
            onClick={() => scrollToSection('home')}
          >
            
          </span>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  px-4 py-2 rounded-lg
                  font-medium tracking-wide
                  transition-all duration-300 ease-in-out
                  relative text-white
                  ${activeSection === item.id
                    ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white'
                    : 'hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white/50'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out
                ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full px-4 py-2 text-left
                  font-medium tracking-wide text-white
                  transition-colors duration-300
                  ${activeSection === item.id ? 'bg-white/10' : 'hover:bg-white/5'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;