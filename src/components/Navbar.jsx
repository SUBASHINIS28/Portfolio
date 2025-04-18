import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId, event) => {
    // Prevent default behavior for anchors
    if (event) event.preventDefault();
    
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: scrolled ? '10px 0' : '20px 0',
      backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      zIndex: 1000,
      boxShadow: scrolled ? '0 5px 20px rgba(0, 0, 0, 0.2)' : 'none',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#e6f1ff',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
    },
    logoHighlight: {
      color: '#64ffda',
    },
    nav: {
      display: 'flex',
      gap: '30px',
      alignItems: 'center',
      '@media (max-width: 992px)': {
        display: 'none',
      }
    },
    navItem: {
      color: '#ccd6f6',
      fontSize: '1rem',
      textDecoration: 'none',
      padding: '5px 10px',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
    },
    navItemHighlight: {
      color: '#64ffda',
      border: '1px solid #64ffda',
      borderRadius: '4px',
      padding: '8px 15px',
      fontWeight: '500',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    mobileMenuButton: {
      display: 'none',
      backgroundColor: 'transparent',
      border: 'none',
      color: '#64ffda',
      fontSize: '1.5rem',
      cursor: 'pointer',
      '@media (max-width: 992px)': {
        display: 'block',
      }
    },
    mobileMenu: {
      display: 'none',
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      width: '75%',
      maxWidth: '300px',
      backgroundColor: '#112240',
      zIndex: 1001,
      padding: '80px 40px 40px',
      transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease',
      boxShadow: '-5px 0 20px rgba(0, 0, 0, 0.2)',
      '@media (max-width: 992px)': {
        display: 'block',
      }
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      backgroundColor: 'transparent',
      border: 'none',
      color: '#64ffda',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    mobileNavItems: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    mobileNavItem: {
      color: '#e6f1ff',
      fontSize: '1.2rem',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      textAlign: 'center',
    },
    overlay: {
      display: mobileMenuOpen ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: 999,
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero-section' },
    { name: 'About', id: 'about-section' },
    { name: 'Skills', id: 'skills-section' },
    { name: 'Projects', id: 'projects-section' },
    { name: 'Activities', id: 'extracurricular-section' },
    { name: 'Contact', id: 'contact-section' },
  ];

  return (
    <>
      <div style={styles.navbar}>
        <div style={styles.container}>
          <a href="#hero-section" style={styles.logo}>
            <span>S<span style={styles.logoHighlight}>.</span></span>
          </a>
          
          <div style={styles.nav}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(item.id, e)}
                style={{
                  ...styles.navItem,
                }}
                onMouseOver={(e) => {
                  e.target.style.color = '#64ffda';
                }}
                onMouseOut={(e) => {
                  e.target.style.color = '#ccd6f6';
                }}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="/Subashini_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              style={styles.navItemHighlight}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Resume
            </a>
          </div>
          
          <button 
            style={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        style={{
          ...styles.mobileMenu,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
      >
        <button 
          style={styles.closeButton}
          onClick={() => setMobileMenuOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        
        <div style={styles.mobileNavItems}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(item.id, e)}
              style={styles.mobileNavItem}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="/Subashini_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.mobileNavItem,
              color: '#64ffda',
              padding: '8px 15px',
              border: '1px solid #64ffda',
              borderRadius: '4px',
              marginTop: '10px',
            }}
          >
            Resume
          </a>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      <div 
        style={styles.overlay}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
    </>
  );
};

export default Navbar;