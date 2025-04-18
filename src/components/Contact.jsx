import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faFileDownload, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

    const contactSection = document.getElementById("contact-section");
    if (contactSection) observer.observe(contactSection);

    return () => {
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const styles = {
    section: {
      padding: '100px 0',
      backgroundColor: '#0a192f',
      position: 'relative',
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 20px',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#e6f1ff',
      marginBottom: '20px',
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
      maxWidth: '700px',
      margin: '0 auto 50px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
    },
    contactWrapper: {
      display: 'flex',
      gap: '40px',
      marginBottom: '60px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    },
    contactInfo: {
      flex: '1',
    },
    contactForm: {
      flex: '1',
    },
    infoTitle: {
      fontSize: '1.5rem',
      color: '#e6f1ff',
      marginBottom: '25px',
      fontWeight: '600',
    },
    contactItems: {
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      color: '#8892b0',
      fontSize: '1.1rem',
      transition: 'transform 0.3s ease, color 0.3s ease',
    },
    contactIcon: {
      width: '45px',
      height: '45px',
      backgroundColor: '#112240',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#64ffda',
      fontSize: '1.2rem',
      flexShrink: 0,
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    contactItemText: {
      color: '#8892b0',
      fontSize: '1rem',
      marginBottom: '5px',
    },
    contactItemValue: {
      color: '#e6f1ff',
      fontSize: '1.1rem',
    },
    socialLinks: {
      display: 'flex',
      gap: '15px',
      marginTop: '20px',
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      backgroundColor: '#112240',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#64ffda',
      fontSize: '1.2rem',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    formGroup: {
      marginBottom: '25px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#e6f1ff',
      fontSize: '1rem',
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      backgroundColor: '#112240',
      border: '1px solid #233554',
      borderRadius: '5px',
      color: '#e6f1ff',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      outline: 'none',
    },
    textarea: {
      width: '100%',
      padding: '12px 15px',
      backgroundColor: '#112240',
      border: '1px solid #233554',
      borderRadius: '5px',
      color: '#e6f1ff',
      fontSize: '1rem',
      minHeight: '150px',
      resize: 'vertical',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      outline: 'none',
    },
    button: {
      display: 'inline-block',
      padding: '12px 25px',
      backgroundColor: 'transparent',
      border: '1px solid #64ffda',
      borderRadius: '4px',
      color: '#64ffda',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      outline: 'none',
    },
    downloadButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      padding: '15px 25px',
      backgroundColor: 'transparent',
      border: '1px solid #64ffda',
      borderRadius: '4px',
      color: '#64ffda',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      margin: '40px auto 0',
      maxWidth: '250px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease, background-color 0.3s ease, color 0.3s ease',
      transitionDelay: '0.3s',
    },
    hireMe: {
      textAlign: 'center',
      marginTop: '80px',
      padding: '40px',
      backgroundColor: '#112240',
      borderRadius: '8px',
      boxShadow: '0 10px 30px rgba(2, 12, 27, 0.7)',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
      transitionDelay: '0.4s',
    },
    hireMeTitle: {
      fontSize: '2rem',
      color: '#e6f1ff',
      marginBottom: '20px',
      fontWeight: '700',
    },
    hireMeText: {
      color: '#8892b0',
      fontSize: '1.1rem',
      lineHeight: '1.7',
      marginBottom: '25px',
      maxWidth: '700px',
      margin: '0 auto 25px',
    },
    hireMeButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '15px 30px',
      backgroundColor: '#64ffda',
      color: '#0a192f',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    submissionMessage: {
      padding: '15px',
      backgroundColor: 'rgba(100, 255, 218, 0.1)',
      border: '1px solid #64ffda',
      borderRadius: '4px',
      color: '#64ffda',
      marginBottom: '25px',
      textAlign: 'center',
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      border: '2px solid rgba(100, 255, 218, 0.3)',
      borderRadius: '50%',
      borderTopColor: '#64ffda',
      animation: 'spin 1s linear infinite',
      marginRight: '10px',
    },
  };

  const keyframes = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    @media (max-width: 992px) {
      .contact-wrapper {
        flex-direction: column;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <section id="contact-section" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            Get In <span style={styles.highlight}>Touch</span>
            <div style={styles.titleLine}></div>
          </h2>
          
          <p style={styles.introText}>
            I'm currently looking for new opportunities to grow and contribute my skills. 
            Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
          
          <div style={styles.contactWrapper} className="contact-wrapper">
            <div style={styles.contactInfo}>
              <h3 style={styles.infoTitle}>Contact Information</h3>
              
              <div style={styles.contactItems}>
                <div 
                  style={styles.contactItem}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateX(10px)';
                    e.currentTarget.style.color = '#64ffda';
                    const icon = e.currentTarget.querySelector('.contact-icon');
                    if (icon) {
                      icon.style.transform = 'scale(1.1)';
                      icon.style.boxShadow = '0 5px 15px rgba(100, 255, 218, 0.4)';
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.color = '#8892b0';
                    const icon = e.currentTarget.querySelector('.contact-icon');
                    if (icon) {
                      icon.style.transform = 'scale(1)';
                      icon.style.boxShadow = 'none';
                    }
                  }}
                >
                  <div style={styles.contactIcon} className="contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <div style={styles.contactItemText}>Email</div>
                    <div style={styles.contactItemValue}>subashini28@gmail.com</div>
                  </div>
                </div>
                
                <div 
                  style={styles.contactItem}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateX(10px)';
                    e.currentTarget.style.color = '#64ffda';
                    const icon = e.currentTarget.querySelector('.contact-icon');
                    if (icon) {
                      icon.style.transform = 'scale(1.1)';
                      icon.style.boxShadow = '0 5px 15px rgba(100, 255, 218, 0.4)';
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.color = '#8892b0';
                    const icon = e.currentTarget.querySelector('.contact-icon');
                    if (icon) {
                      icon.style.transform = 'scale(1)';
                      icon.style.boxShadow = 'none';
                    }
                  }}
                >
                  <div style={styles.contactIcon} className="contact-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <div style={styles.contactItemText}>Phone</div>
                    <div style={styles.contactItemValue}>+91 9876543210</div>
                  </div>
                </div>
              </div>
              
              <h3 style={{...styles.infoTitle, marginTop: '40px'}}>Connect With Me</h3>
              <div style={styles.socialLinks}>
                <a 
                  href="https://github.com/SUBASHINIS28" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}
                >
                  <div 
                    style={styles.socialIcon}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(100, 255, 218, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/subashini-s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}
                >
                  <div 
                    style={styles.socialIcon}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(100, 255, 218, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                </a>
              </div>
            </div>
            
            <div style={styles.contactForm}>
              <h3 style={styles.infoTitle}>Send Me a Message</h3>
              
              {submitted && (
                <div style={styles.submissionMessage}>
                  Thank you for your message! I'll get back to you as soon as possible.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label htmlFor="name" style={styles.label}>Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                    required
                    onFocus={(e) => {
                      e.target.style.borderColor = '#64ffda';
                      e.target.style.boxShadow = '0 0 10px rgba(100, 255, 218, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#233554';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    required
                    onFocus={(e) => {
                      e.target.style.borderColor = '#64ffda';
                      e.target.style.boxShadow = '0 0 10px rgba(100, 255, 218, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#233554';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.label}>Your Message</label>
                  <textarea 
                    id="message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={styles.textarea}
                    required
                    onFocus={(e) => {
                      e.target.style.borderColor = '#64ffda';
                      e.target.style.boxShadow = '0 0 10px rgba(100, 255, 218, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#233554';
                      e.target.style.boxShadow = 'none';
                    }}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  style={styles.button}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span style={styles.loadingSpinner}></span>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          
          <a 
            href="/Subashini_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}
          >
            <button 
              style={styles.downloadButton}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#64ffda';
                e.target.style.color = '#0a192f';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#64ffda';
              }}
            >
              <FontAwesomeIcon icon={faFileDownload} /> Download Resume
            </button>
          </a>
          
          <div style={styles.hireMe}>
            <h3 style={styles.hireMeTitle}>Want to work together?</h3>
            <p style={styles.hireMeText}>
              I'm currently looking for opportunities to work with innovative teams on challenging projects.
              If you're interested in collaborating or have a position that matches my skills, I'd love to hear from you!
            </p>
            <a href="mailto:subashini28@gmail.com" style={{textDecoration: 'none'}}>
              <button 
                style={styles.hireMeButton}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 5px 15px rgba(100, 255, 218, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <FontAwesomeIcon icon={faHandshake} /> Hire Me
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;