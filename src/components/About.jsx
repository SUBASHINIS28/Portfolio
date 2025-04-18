import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCertificate } from '@fortawesome/free-solid-svg-icons';

const About = () => {
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

    const aboutSection = document.getElementById("about-section");
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
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
    aboutContent: {
      display: 'flex',
      gap: '50px',
      marginBottom: '70px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    },
    imageContainer: {
      flex: '1',
      position: 'relative',
      maxWidth: '400px',
    },
    profileImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
      boxShadow: '0 10px 30px rgba(2, 12, 27, 0.7)',
      zIndex: 1,
      position: 'relative',
    },
    imageOutline: {
      position: 'absolute',
      top: '15px',
      left: '15px',
      width: '100%',
      height: '100%',
      border: '2px solid #64ffda',
      borderRadius: '8px',
      zIndex: 0,
      transition: 'all 0.4s ease',
    },
    aboutText: {
      flex: '1',
      color: '#8892b0',
      fontSize: '1.1rem',
      lineHeight: '1.7',
    },
    paragraph: {
      marginBottom: '20px',
    },
    skillsList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '15px',
      margin: '30px 0',
      paddingLeft: '20px',
    },
    skillItem: {
      position: 'relative',
      paddingLeft: '20px',
      color: '#8892b0',
      fontSize: '1rem',
    },
    skillArrow: {
      position: 'absolute',
      left: '0',
      color: '#64ffda',
    },
    infoSections: {
      display: 'flex',
      gap: '50px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
      transitionDelay: '0.3s',
    },
    eduCertContainer: {
      flex: '1',
    },
    sectionSubtitle: {
      fontSize: '1.8rem',
      fontWeight: '600',
      color: '#e6f1ff',
      marginBottom: '25px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    icon: {
      color: '#64ffda',
    },
    timelineContainer: {
      position: 'relative',
      maxWidth: '100%',
      margin: '0 auto',
    },
    timeline: {
      position: 'relative',
      width: '100%',
    },
    timelineEntry: {
      position: 'relative',
      padding: '20px 0 20px 30px',
      borderLeft: '2px solid #233554',
    },
    timelineDot: {
      position: 'absolute',
      left: '-10px',
      top: '28px',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      backgroundColor: '#64ffda',
      zIndex: 1,
    },
    entryTitle: {
      color: '#e6f1ff',
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '5px',
    },
    entrySubtitle: {
      color: '#64ffda',
      fontSize: '1rem',
      marginBottom: '5px',
    },
    entryTime: {
      color: '#8892b0',
      fontSize: '0.9rem',
      fontStyle: 'italic',
      marginBottom: '10px',
    },
    entryDesc: {
      color: '#8892b0',
      fontSize: '0.95rem',
      lineHeight: '1.6',
    },
    responsiveSection: {
      '@media (max-width: 992px)': {
        flexDirection: 'column',
        gap: '40px',
      }
    }
  };

  const keyframes = `
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    @media (max-width: 992px) {
      .about-content, .info-sections {
        flex-direction: column;
        gap: 40px;
      }
      
      .image-container {
        margin: 0 auto;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <section id="about-section" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            About <span style={styles.highlight}>Me</span>
            <div style={styles.titleLine}></div>
          </h2>
          
          <div style={{...styles.aboutContent, ...styles.responsiveSection}} className="about-content">
            <div style={styles.imageContainer} className="image-container"
                 onMouseOver={(e) => {
                   const outline = e.currentTarget.querySelector('.image-outline');
                   if (outline) {
                     outline.style.top = '20px';
                     outline.style.left = '20px';
                   }
                 }}
                 onMouseOut={(e) => {
                   const outline = e.currentTarget.querySelector('.image-outline');
                   if (outline) {
                     outline.style.top = '15px';
                     outline.style.left = '15px';
                   }
                 }}>
              <img 
                src="/your-profile-image.jpg" 
                alt="Subashini S" 
                style={styles.profileImage} 
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x500?text=Subashini+S';
                }}
              />
              <div className="image-outline" style={styles.imageOutline}></div>
            </div>
            
            <div style={styles.aboutText}>
              <p style={styles.paragraph}>
                Hello! I'm <span style={styles.highlight}>Subashini S</span>, an aspiring Software Engineer currently pursuing my B.E. in Electronics and Communication Engineering with a minor in Full Stack Development at Saveetha Engineering College.
              </p>
              <p style={styles.paragraph}>
                I'm passionate about building scalable applications, optimizing backend performance, and creating seamless user experiences. My focus is on creating efficient, maintainable code that solves real-world problems.
              </p>
              <p style={styles.paragraph}>
                My journey in software development began with a curiosity about how digital systems work, which led me to explore various programming languages and frameworks. I enjoy the challenge of turning complex problems into elegant solutions.
              </p>
              <p style={styles.paragraph}>
                Here are some technologies I've been working with recently:
              </p>
              
              <ul style={styles.skillsList}>
                <li style={styles.skillItem}>
                  <span style={styles.skillArrow}>▹</span> Java/Spring Boot
                </li>
                <li style={styles.skillItem}>
                  <span style={styles.skillArrow}>▹</span> React.js/Next.js
                </li>
                <li style={styles.skillItem}>
                  <span style={styles.skillArrow}>▹</span> JavaScript/Node.js
                </li>
                <li style={styles.skillItem}>
                  <span style={styles.skillArrow}>▹</span> MongoDB/MySQL
                </li>
                <li style={styles.skillItem}>
                  <span style={styles.skillArrow}>▹</span> Tailwind CSS
                </li>
                <li style={styles.skillItem}>
                  <span style={styles.skillArrow}>▹</span> Data Structures & Algorithms
                </li>
                <li style={styles.skillItem}>
                  <span style={styles.skillArrow}>▹</span> RESTful APIs
                </li>
                <li style={styles.skillItem}>
                  <span style={styles.skillArrow}>▹</span> Git/GitHub
                </li>
              </ul>
            </div>
          </div>
          
          <div style={{...styles.infoSections, ...styles.responsiveSection}} className="info-sections">
            <div style={styles.eduCertContainer}>
              <h3 style={styles.sectionSubtitle}>
                <FontAwesomeIcon icon={faGraduationCap} style={styles.icon} /> Education
              </h3>
              
              <div style={styles.timelineContainer}>
                <div style={styles.timeline}>
                  <div style={styles.timelineEntry}>
                    <div style={styles.timelineDot}></div>
                    <h4 style={styles.entryTitle}>B.E. Electronics and Communication Engineering</h4>
                    <h5 style={styles.entrySubtitle}>Saveetha Engineering College</h5>
                    <p style={styles.entryTime}>2022 - 2026 (Expected)</p>
                    <p style={styles.entryDesc}>CGPA: 8.6 | Minors in Full Stack Development</p>
                  </div>
                  
                  <div style={styles.timelineEntry}>
                    <div style={styles.timelineDot}></div>
                    <h4 style={styles.entryTitle}>Higher Secondary Education (12th)</h4>
                    <h5 style={styles.entrySubtitle}>Aim Matric Higher Secondary School</h5>
                    <p style={styles.entryTime}>2021 - 2022</p>
                    <p style={styles.entryDesc}>Score: 88%</p>
                  </div>
                  
                  <div style={styles.timelineEntry}>
                    <div style={styles.timelineDot}></div>
                    <h4 style={styles.entryTitle}>Secondary School Education (10th)</h4>
                    <h5 style={styles.entrySubtitle}>Aim Matric Higher Secondary School</h5>
                    <p style={styles.entryTime}>2019 - 2020</p>
                    <p style={styles.entryDesc}>Score: 92.6%</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={styles.eduCertContainer}>
              <h3 style={styles.sectionSubtitle}>
                <FontAwesomeIcon icon={faCertificate} style={styles.icon} /> Certifications
              </h3>
              
              <div style={styles.timelineContainer}>
                <div style={styles.timeline}>
                  <div style={styles.timelineEntry}>
                    <div style={styles.timelineDot}></div>
                    <h4 style={styles.entryTitle}>Introduction to Internet of Things</h4>
                    <h5 style={styles.entrySubtitle}>NPTEL - IIT Kharagpur</h5>
                    <p style={styles.entryDesc}>Comprehensive course covering IoT fundamentals, architectures, and applications.</p>
                  </div>
                  
                  <div style={styles.timelineEntry}>
                    <div style={styles.timelineDot}></div>
                    <h4 style={styles.entryTitle}>Introduction to Industry 4.0 and Industrial Internet of Things</h4>
                    <h5 style={styles.entrySubtitle}>NPTEL - IIT Kharagpur</h5>
                    <p style={styles.entryDesc}>Advanced course on Industry 4.0, IIoT, and smart manufacturing concepts.</p>
                  </div>
                  
                  <div style={styles.timelineEntry}>
                    <div style={styles.timelineDot}></div>
                    <h4 style={styles.entryTitle}>Introduction to Cloud Computing</h4>
                    <h5 style={styles.entrySubtitle}>IBM</h5>
                    <p style={styles.entryDesc}>Explored cloud service models, deployment strategies, and implementation techniques.</p>
                  </div>
                  
                  <div style={styles.timelineEntry}>
                    <div style={styles.timelineDot}></div>
                    <h4 style={styles.entryTitle}>SQL Certification</h4>
                    <h5 style={styles.entrySubtitle}>Simplilearn</h5>
                    <p style={styles.entryDesc}>Mastered SQL database management, complex queries, and performance optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;