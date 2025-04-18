import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faAward, faUsers, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const Extracurricular = () => {
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

    const extracurricularSection = document.getElementById("extracurricular-section");
    if (extracurricularSection) observer.observe(extracurricularSection);

    return () => {
      if (extracurricularSection) observer.unobserve(extracurricularSection);
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
    activitiesContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
      gap: '30px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    },
    activityCard: {
      backgroundColor: '#112240',
      borderRadius: '8px',
      padding: '30px',
      boxShadow: '0 10px 30px rgba(2, 12, 27, 0.7)',
      border: '1px solid #233554',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    activityCardHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '20px',
      gap: '20px',
    },
    activityIconContainer: {
      backgroundColor: 'rgba(100, 255, 218, 0.1)',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    activityIcon: {
      color: '#64ffda',
      fontSize: '1.5rem',
    },
    activityTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#e6f1ff',
      marginBottom: '5px',
    },
    activityLocation: {
      color: '#64ffda',
      fontSize: '1rem',
      marginBottom: '5px',
    },
    activityDate: {
      color: '#8892b0',
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    activityContent: {
      color: '#8892b0',
      fontSize: '1rem',
      lineHeight: '1.6',
      marginTop: '15px',
    },
    galleryHeading: {
      fontSize: '1.8rem',
      fontWeight: '600',
      color: '#e6f1ff',
      margin: '70px 0 30px',
      textAlign: 'center',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
      transitionDelay: '0.3s',
    },
    gallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
      transitionDelay: '0.4s',
    },
    galleryImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '4px',
      boxShadow: '0 5px 15px rgba(2, 12, 27, 0.5)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    },
  };

  const keyframes = `
    @media (max-width: 992px) {
      .activities-container {
        gridTemplateColumns: 1fr !important;
      }
    }
  `;

  // Data for extracurricular activities
  const activities = [
    {
      id: 1,
      title: "Technical Event – Circuit Quest",
      location: "Loyola-ICAM College of Engineering and Technology",
      date: "2024",
      description: "Secured second place in the 'Circuit Quest' technical event, demonstrating strong problem-solving skills and technical knowledge in designing and implementing electronic circuits under time constraints.",
      icon: faTrophy,
    },
    {
      id: 2,
      title: "Paper Presentation",
      location: "Various Institutes",
      date: "2024",
      description: "Presented research papers on emerging technologies and innovative solutions at multiple academic institutions, showcasing both technical knowledge and communication skills while gaining valuable feedback from experts.",
      icon: faChalkboardTeacher,
    },
    {
      id: 3,
      title: "Spark & Search Technical Event",
      location: "Drestin'24 – Saveetha Engineering College",
      date: "2024",
      description: "Successfully conducted and coordinated the 'Spark & Search' technical event which focused on problem-solving and teamwork. Managed event planning, participant registration, and judging criteria, delivering a seamless experience for all participants.",
      icon: faUsers,
    },
    {
      id: 4,
      title: "Technical Workshops & Hackathons",
      location: "Various Venues",
      date: "2022-2024",
      description: "Actively participated in multiple technical workshops and hackathons, contributing to team projects and expanding practical knowledge in software development, AI, and machine learning applications.",
      icon: faAward,
    }
  ];

  // Function to get staggered animation delay
  const getCardStyle = (index) => ({
    ...styles.activityCard,
    transitionDelay: `${0.1 + (index * 0.1)}s`,
  });

  return (
    <>
      <style>{keyframes}</style>
      <section id="extracurricular-section" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            Extracurricular <span style={styles.highlight}>Activities</span>
            <div style={styles.titleLine}></div>
          </h2>
          
          <p style={styles.introText}>
            Beyond academics, I actively engage in various technical events and activities that help me develop leadership, teamwork, and problem-solving skills while applying my technical knowledge in practical scenarios.
          </p>
          
          <div style={styles.activitiesContainer} className="activities-container">
            {activities.map((activity, index) => (
              <div 
                key={activity.id} 
                style={getCardStyle(index)}
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
              >
                <div style={styles.activityCardHeader}>
                  <div style={styles.activityIconContainer}>
                    <FontAwesomeIcon icon={activity.icon} style={styles.activityIcon} />
                  </div>
                  <div>
                    <h3 style={styles.activityTitle}>{activity.title}</h3>
                    <p style={styles.activityLocation}>{activity.location}</p>
                    <p style={styles.activityDate}>{activity.date}</p>
                  </div>
                </div>
                
                <div style={styles.activityContent}>
                  <p>{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Optional: Photo Gallery */}
          {/* Uncomment if you have images to showcase */}
          {/* 
          <h3 style={styles.galleryHeading}>Event Gallery</h3>
          <div style={styles.gallery}>
            {[1, 2, 3, 4, 5, 6].map((img) => (
              <img
                key={img}
                src={`/extracurricular-${img}.jpg`}
                alt={`Event ${img}`}
                style={styles.galleryImage}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(2, 12, 27, 0.7)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(2, 12, 27, 0.5)';
                }}
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/300x200?text=Event+${img}`;
                }}
              />
            ))}
          </div>
          */}
        </div>
      </section>
    </>
  );
};

export default Extracurricular;