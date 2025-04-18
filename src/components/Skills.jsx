import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faDatabase, faTools } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) observer.observe(skillsSection);

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, []);

  const styles = {
    section: {
      padding: '100px 0',
      backgroundColor: '#0a192f',
      position: 'relative',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#e6f1ff',
      marginBottom: '50px',
      textAlign: 'center',
      position: 'relative',
    },
    highlight: {
      color: '#64ffda',
    },
    titleLine: {
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '70px',
      height: '4px',
      backgroundColor: '#64ffda',
    },
    introText: {
      color: '#8892b0',
      fontSize: '1.1rem',
      lineHeight: '1.7',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 50px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
    },
    skillsCategories: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      justifyContent: 'center',
    },
    categoryCard: {
      backgroundColor: '#112240',
      borderRadius: '8px',
      padding: '30px',
      flexBasis: 'calc(50% - 15px)',
      boxShadow: '0 10px 30px rgba(2, 12, 27, 0.7)',
      border: '1px solid #233554',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      cursor: 'default',
    },
    categoryIcon: {
      fontSize: '2rem',
      color: '#64ffda',
      marginBottom: '20px',
    },
    categoryTitle: {
      fontSize: '1.5rem',
      color: '#e6f1ff',
      marginBottom: '20px',
      fontWeight: '600',
    },
    skillsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
    },
    skillItem: {
      backgroundColor: '#1d3a66',
      padding: '8px 16px',
      borderRadius: '20px',
      color: '#e6f1ff',
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
    }
  };

  // Animation delay for categories
  const getCardStyle = (index) => ({
    ...styles.categoryCard,
    transitionDelay: `${0.1 + (index * 0.1)}s`,
  });

  const keyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @media (max-width: 992px) {
      .category-card {
        flexBasis: 100%;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <section id="skills-section" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            Technical <span style={styles.highlight}>Skills</span>
            <div style={styles.titleLine}></div>
          </h2>
          
          <p style={styles.introText}>
            With a strong foundation in both front-end and back-end technologies, I bring a comprehensive skill set to software development. 
            I'm constantly expanding my knowledge and staying current with the latest tech trends and best practices.
          </p>
          
          <div style={styles.skillsCategories}>
            {/* Frontend Development */}
            <div style={getCardStyle(0)}
                 onMouseOver={(e) => {
                   e.currentTarget.style.transform = 'translateY(-10px)';
                   e.currentTarget.style.boxShadow = '0 15px 30px rgba(2, 12, 27, 0.9)';
                   e.currentTarget.style.borderColor = '#64ffda';
                 }}
                 onMouseOut={(e) => {
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(2, 12, 27, 0.7)';
                   e.currentTarget.style.borderColor = '#233554';
                 }}
                 className="category-card">
              <FontAwesomeIcon icon={faCode} style={styles.categoryIcon} />
              <h3 style={styles.categoryTitle}>Frontend Development</h3>
              <div style={styles.skillsList}>
                <div style={styles.skillItem}>React.js</div>
                <div style={styles.skillItem}>Next.js</div>
                <div style={styles.skillItem}>JavaScript (ES6+)</div>
                <div style={styles.skillItem}>HTML5</div>
                <div style={styles.skillItem}>CSS3 / SCSS</div>
                <div style={styles.skillItem}>Tailwind CSS</div>
                <div style={styles.skillItem}>Redux</div>
                <div style={styles.skillItem}>RESTful APIs</div>
                <div style={styles.skillItem}>Responsive Design</div>
              </div>
            </div>
            
            {/* Backend Development */}
            <div style={getCardStyle(1)}
                 onMouseOver={(e) => {
                   e.currentTarget.style.transform = 'translateY(-10px)';
                   e.currentTarget.style.boxShadow = '0 15px 30px rgba(2, 12, 27, 0.9)';
                   e.currentTarget.style.borderColor = '#64ffda';
                 }}
                 onMouseOut={(e) => {
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(2, 12, 27, 0.7)';
                   e.currentTarget.style.borderColor = '#233554';
                 }}
                 className="category-card">
              <FontAwesomeIcon icon={faServer} style={styles.categoryIcon} />
              <h3 style={styles.categoryTitle}>Backend Development</h3>
              <div style={styles.skillsList}>
                <div style={styles.skillItem}>Java</div>
                <div style={styles.skillItem}>Spring Boot</div>
                <div style={styles.skillItem}>Node.js</div>
                <div style={styles.skillItem}>Express.js</div>
                <div style={styles.skillItem}>Python</div>
                <div style={styles.skillItem}>Django</div>
                <div style={styles.skillItem}>RESTful API Design</div>
                <div style={styles.skillItem}>Authentication & Authorization</div>
              </div>
            </div>
            
            {/* Database & Data Management */}
            <div style={getCardStyle(2)}
                 onMouseOver={(e) => {
                   e.currentTarget.style.transform = 'translateY(-10px)';
                   e.currentTarget.style.boxShadow = '0 15px 30px rgba(2, 12, 27, 0.9)';
                   e.currentTarget.style.borderColor = '#64ffda';
                 }}
                 onMouseOut={(e) => {
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(2, 12, 27, 0.7)';
                   e.currentTarget.style.borderColor = '#233554';
                 }}
                 className="category-card">
              <FontAwesomeIcon icon={faDatabase} style={styles.categoryIcon} />
              <h3 style={styles.categoryTitle}>Database & Data</h3>
              <div style={styles.skillsList}>
                <div style={styles.skillItem}>MongoDB</div>
                <div style={styles.skillItem}>MySQL</div>
                <div style={styles.skillItem}>SQL</div>
                <div style={styles.skillItem}>NoSQL</div>
                <div style={styles.skillItem}>Database Design</div>
                <div style={styles.skillItem}>Data Modeling</div>
                <div style={styles.skillItem}>ORM (JPA/Hibernate)</div>
                <div style={styles.skillItem}>Mongoose</div>
              </div>
            </div>
            
            {/* Tools & Technologies */}
            <div style={getCardStyle(3)}
                 onMouseOver={(e) => {
                   e.currentTarget.style.transform = 'translateY(-10px)';
                   e.currentTarget.style.boxShadow = '0 15px 30px rgba(2, 12, 27, 0.9)';
                   e.currentTarget.style.borderColor = '#64ffda';
                 }}
                 onMouseOut={(e) => {
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(2, 12, 27, 0.7)';
                   e.currentTarget.style.borderColor = '#233554';
                 }}
                 className="category-card">
              <FontAwesomeIcon icon={faTools} style={styles.categoryIcon} />
              <h3 style={styles.categoryTitle}>Tools & Other Skills</h3>
              <div style={styles.skillsList}>
                <div style={styles.skillItem}>Git & GitHub</div>
                <div style={styles.skillItem}>Docker</div>
                <div style={styles.skillItem}>VS Code</div>
                <div style={styles.skillItem}>IntelliJ IDEA</div>
                <div style={styles.skillItem}>Data Structures & Algorithms</div>
                <div style={styles.skillItem}>System Design</div>
                <div style={styles.skillItem}>Object-Oriented Programming</div>
                <div style={styles.skillItem}>Chart.js</div>
                <div style={styles.skillItem}>Pandas</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;