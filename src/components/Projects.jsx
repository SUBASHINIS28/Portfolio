import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faNode, faPython } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

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

    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) observer.observe(projectsSection);

    return () => {
      if (projectsSection) observer.unobserve(projectsSection);
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
    projectsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '80px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    },
    projectCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      position: 'relative',
    },
    projectCardReverse: {
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      position: 'relative',
      flexDirection: 'row-reverse',
    },
    projectImageContainer: {
      flex: '1',
      position: 'relative',
      height: '350px',
      borderRadius: '4px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(2, 12, 27, 0.7)',
    },
    projectImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.6s ease',
      filter: 'brightness(70%)',
      objectPosition: 'top center',
    },
    projectContent: {
      flex: '1',
      position: 'relative',
      zIndex: 2,
    },
    projectType: {
      color: '#64ffda',
      fontSize: '0.9rem',
      fontWeight: '400',
      marginBottom: '10px',
    },
    projectTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#e6f1ff',
      marginBottom: '20px',
    },
    projectDescription: {
      backgroundColor: '#112240',
      padding: '25px',
      borderRadius: '4px',
      color: '#8892b0',
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '25px',
      boxShadow: '0 10px 30px rgba(2, 12, 27, 0.7)',
    },
    projectTechList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      marginBottom: '25px',
    },
    techTag: {
      backgroundColor: '#1d3a66',
      padding: '6px 12px',
      borderRadius: '4px',
      color: '#e6f1ff',
      fontSize: '0.85rem',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    projectLinks: {
      display: 'flex',
      gap: '20px',
    },
    projectLink: {
      color: '#e6f1ff',
      fontSize: '1.2rem',
      transition: 'color 0.3s ease',
    },
    otherProjectsContainer: {
      marginTop: '100px',
    },
    otherProjectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
      transitionDelay: '0.3s',
    },
    otherProjectCard: {
      backgroundColor: '#112240',
      borderRadius: '4px',
      padding: '25px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      position: 'relative',
      cursor: 'pointer',
    },
    folderIcon: {
      color: '#64ffda',
      fontSize: '2rem',
      marginBottom: '20px',
    },
    otherProjectCardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    otherProjectTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#e6f1ff',
    },
    otherProjectDescription: {
      color: '#8892b0',
      fontSize: '0.95rem',
      lineHeight: '1.6',
      marginBottom: '25px',
    },
    otherProjectTechList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginTop: 'auto',
    },
    otherProjectTech: {
      color: '#64ffda',
      fontSize: '0.8rem',
    },
  };

  const keyframes = `
    @media (max-width: 992px) {
      .project-card {
        flex-direction: column !important;
      }
      .project-card-reverse {
        flex-direction: column !important;
      }
      .project-content {
        width: 100%;
      }
      .project-image-container {
        width: 100%;
      }
    }
  `;

  const projects = [
    {
      id: 1,
      type: "Full Stack Application",
      title: "Novanest",
      description: "Novanest is a comprehensive investment portal built with React.js and Node.js that facilitates real-time interactions between startups and investors. The platform features robust user authentication with role-based access control using JWT, ensuring secure and personalized access. It includes dynamic analytics and portfolio tracking tools to visualize investment trends and drive data-informed decisions.",
      image: "/novanest.jpg", // Add your project image
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "RESTful API"],
      github: "https://github.com/SUBASHINIS28/Novanest",
      live: "#", // Add your live demo link if available
      icon: faReact
    },
    {
      id: 2,
      type: "Web Application",
      title: "Calendar Application",
      description: "A full-stack Smart Calendar app with goal-linked task and event management built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application features drag-and-drop task-to-event conversion and responsive multi-view calendar using React DnD and Tailwind CSS, enhancing user productivity across devices.",
      image: "/calendar.jpg", // Add your project image
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "Tailwind CSS", "React DnD"],
      github: "https://github.com/SUBASHINIS28/Calendar_Web",
      live: "#", // Add your live demo link if available
      icon: faNode
    },
    {
      id: 3,
      type: "AI Project",
      title: "EcoRouteAI",
      description: "An AI-powered logistics optimizer developed using Python, Pandas, and Ridge Regression that reduced delivery time by 15% and fuel costs by 20%. The system efficiently handles 1,000+ delivery scenarios on IBM Z cloud with intelligent routing logic inspired by financial lending algorithms.",
      image: "/ecoroute.jpg", // Add your project image
      technologies: ["Python", "Pandas", "Machine Learning", "Ridge Regression", "IBM Z Cloud"],
      github: "https://github.com/SUBASHINIS28/ECOROUTE_AI",
      live: "#", // Add your live demo link if available
      icon: faPython
    }
  ];

  return (
    <>
      <style>{keyframes}</style>
      <section id="projects-section" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            My <span style={styles.highlight}>Projects</span>
            <div style={styles.titleLine}></div>
          </h2>
          
          <p style={styles.introText}>
            Here are some of the projects I've worked on. Each project has helped me grow as a developer and explore new technologies.
          </p>
          
          <div style={styles.projectsContainer}>
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                style={index % 2 === 0 ? styles.projectCard : styles.projectCardReverse}
                className={index % 2 === 0 ? "project-card" : "project-card-reverse"}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div style={styles.projectImageContainer} className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{
                      ...styles.projectImage,
                      transform: activeProject === project.id ? 'scale(1.05)' : 'scale(1)',
                      filter: activeProject === project.id ? 'brightness(90%)' : 'brightness(70%)'
                    }}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x350?text=${project.title}`;
                    }}
                  />
                </div>
                
                <div style={styles.projectContent} className="project-content">
                  <p style={styles.projectType}>{project.type}</p>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <div style={styles.projectDescription}>
                    <p>{project.description}</p>
                  </div>
                  <div style={styles.projectTechList}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} style={styles.techTag}>
                        <FontAwesomeIcon icon={faCode} size="sm" /> {tech}
                      </span>
                    ))}
                  </div>
                  <div style={styles.projectLinks}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={styles.projectLink}
                      onMouseOver={(e) => e.target.style.color = '#64ffda'}
                      onMouseOut={(e) => e.target.style.color = '#e6f1ff'}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    {project.live !== "#" && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.projectLink}
                        onMouseOver={(e) => e.target.style.color = '#64ffda'}
                        onMouseOut={(e) => e.target.style.color = '#e6f1ff'}
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;