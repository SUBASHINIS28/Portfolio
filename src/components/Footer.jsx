import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const styles = {
    footer: {
      backgroundColor: '#0a192f',
      borderTop: '1px solid #233554',
      padding: '40px 0 20px',
      position: 'relative',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    socialLinks: {
      display: 'flex',
      gap: '25px',
      marginBottom: '25px',
    },
    socialIcon: {
      width: '45px',
      height: '45px',
      backgroundColor: '#112240',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#64ffda',
      fontSize: '1.4rem',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
      textDecoration: 'none',
    },
    emailLink: {
      color: '#8892b0',
      marginBottom: '25px',
      fontSize: '1.1rem',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    copyright: {
      color: '#8892b0',
      fontSize: '0.95rem',
      textAlign: 'center',
      marginBottom: '10px',
    },
    madeLine: {
      color: '#8892b0',
      fontSize: '0.95rem',
      textAlign: 'center',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    heartIcon: {
      color: '#ff6b6b',
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
      marginBottom: '30px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    navLink: {
      color: '#8892b0',
      fontSize: '0.95rem',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    highlight: {
      color: '#64ffda',
    },
    creditLine: {
      fontSize: '0.85rem',
      color: '#8892b0',
      marginTop: '20px',
      opacity: 0.7,
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.socialLinks}>
          <a 
            href="https://github.com/SUBASHINIS28" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.socialIcon}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(100, 255, 218, 0.4)';
              e.currentTarget.style.backgroundColor = '#1d3a66';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.backgroundColor = '#112240';
            }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/subashini-s-b43539258" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.socialIcon}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(100, 255, 218, 0.4)';
              e.currentTarget.style.backgroundColor = '#1d3a66';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.backgroundColor = '#112240';
            }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a 
            href="mailto:subashini28@gmail.com"
            style={styles.socialIcon}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(100, 255, 218, 0.4)';
              e.currentTarget.style.backgroundColor = '#1d3a66';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.backgroundColor = '#112240';
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        
        <div style={styles.navLinks}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              style={styles.navLink}
              onMouseOver={(e) => {
                e.target.style.color = '#64ffda';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#8892b0';
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <a 
          href="mailto:subashini28@gmail.com"
          style={styles.emailLink}
          onMouseOver={(e) => {
            e.target.style.color = '#64ffda';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#8892b0';
          }}
        >
          subashini28@gmail.com
        </a>
        
        <div style={styles.madeLine}>
          Designed & Built with <FontAwesomeIcon icon={faHeart} style={styles.heartIcon} /> by <span style={styles.highlight}>Subashini S</span>
        </div>
        
        <div style={styles.copyright}>
          &copy; {currentYear} Subashini S. All Rights Reserved.
        </div>
        
        <div 
          style={{
            cursor: 'pointer',
            marginTop: '20px',
            color: '#64ffda',
            fontSize: '0.9rem',
            opacity: 0.8,
            transition: 'opacity 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.opacity = '1';
          }}
          onMouseOut={(e) => {
            e.target.style.opacity = '0.8';
          }}
          onClick={scrollToTop}
        >
          Back to Top
        </div>
      </div>
    </footer>
  );
};

export default Footer;