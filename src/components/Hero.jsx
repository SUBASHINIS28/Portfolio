import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [codeLines, setCodeLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  // Sample code to display in the animation - now wrapped in useMemo
  const codeSample = useMemo(() => [
    '// Subashini S - Software Engineer',
    'class Developer {',
    '  constructor() {',
    '    this.name = "Subashini S";',
    '    this.role = "Aspiring Software Engineer";',
    '    this.skills = [',
    '      "Java",',
    '      "Spring Boot",',
    '      "React.js",',
    '      "JavaScript",',
    '      "MongoDB",',
    '      "Python",',
    '      "Node.js"',
    '    ];',
    '    this.education = "B.E. Electronics and Communication";',
    '  }',
    '',
    '  buildProject(idea) {',
    '    const tech = this.selectTech(idea);',
    '    return new AwesomeProject(idea, tech);',
    '  }',
    '}'
  ], []); // Empty dependency array means this will only be created once

  useEffect(() => {
    setIsVisible(true);
    
    // Animation for code typing effect
    if (currentLineIndex < codeSample.length) {
      const timer = setTimeout(() => {
        setCodeLines(prev => [...prev, codeSample[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      }, 150);
      
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, codeSample]);

  // Generate floating elements for the background
  const generateFloatingElements = () => {
    const elements = [];
    const shapes = ['<>', '{}', '()', '//', '==', '=>', '[]', 'Java', 'React', 'SQL'];
    
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 30 + 10;
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const animationDuration = `${Math.random() * 15 + 10}s`;
      const animationDelay = `${Math.random() * 5}s`;
      const opacity = Math.random() * 0.5 + 0.1;
      
      elements.push(
        <div
          key={i}
          style={{
            position: 'absolute',
            left,
            top,
            fontSize: `${size}px`,
            color: '#64ffda',
            opacity,
            animation: `float ${animationDuration} infinite ease-in-out`,
            animationDelay,
          }}
        >
          {shape}
        </div>
      );
    }
    
    return elements;
  };

  // Styles
  const styles = {
    heroSection: {
      position: 'relative',
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#0a192f',
      color: '#e6f1ff',
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
    },
    animatedGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(-45deg, #0a192f, #112240, #233554, #1d3a66)',
      backgroundSize: '400% 400%',
      animation: 'gradient 15s ease infinite',
      zIndex: 1,
    },
    particles: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
      opacity: 0.4,
    },
    heroContent: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      width: '90%',
      padding: '0 20px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    },
    heroText: {
      flex: 1,
      maxWidth: '600px',
    },
    heading: {
      fontSize: '3.5rem',
      marginBottom: '1rem',
      fontWeight: 700,
    },
    highlight: {
      color: '#64ffda',
    },
    typewriter: {
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
      fontWeight: 600,
      position: 'relative',
    },
    typedText: {
      position: 'relative',
    },
    typedCursor: {
      position: 'absolute',
      right: '-8px',
      animation: 'blink 1s infinite',
    },
    description: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
      color: '#8892b0',
      lineHeight: 1.6,
    },
    ctaButtons: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
    },
    primaryBtn: {
      display: 'inline-block',
      padding: '12px 28px',
      borderRadius: '4px',
      fontWeight: 600,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      backgroundColor: '#64ffda',
      color: '#0a192f',
      border: '2px solid #64ffda',
      cursor: 'pointer',
    },
    secondaryBtn: {
      display: 'inline-block',
      padding: '12px 28px',
      borderRadius: '4px',
      fontWeight: 600,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      backgroundColor: 'transparent',
      color: '#64ffda',
      border: '2px solid #64ffda',
      cursor: 'pointer',
    },
    socialLinks: {
      display: 'flex',
      gap: '1.5rem',
    },
    socialLink: {
      color: '#8892b0',
      fontSize: '1.5rem',
      transition: 'color 0.3s ease',
    },
    heroAnimation: {
      flex: 1,
      maxWidth: '500px',
      display: 'flex',
      justifyContent: 'center',
    },
    codeEditor: {
      width: '100%',
      maxWidth: '450px',
      backgroundColor: '#112240',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 10px 30px rgba(2, 12, 27, 0.7)',
      position: 'relative',
      overflow: 'hidden',
    },
    codeEditorHeader: {
      display: 'flex',
      marginBottom: '15px',
    },
    codeEditorDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      marginRight: '8px',
    },
    codeEditorContent: {
      fontFamily: 'monospace',
      fontSize: '14px',
      color: '#e6f1ff',
      lineHeight: 1.5,
      textAlign: 'left',
    },
    codeLine: {
      margin: '0',
      whiteSpace: 'pre',
      animation: 'fadeIn 0.3s ease-in-out',
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#8892b0',
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      zIndex: 10,
    },
    scrollIcon: {
      marginBottom: '5px',
      fontSize: '1.2rem',
    }
  };

  // CSS Animation keyframes
  const keyframes = `
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(5px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(5deg);
      }
    }
    
    @media (max-width: 992px) {
      .hero-content {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
      }
      
      .hero-text h1 {
        font-size: 2.8rem;
      }
      
      .typewriter {
        font-size: 2rem;
      }
      
      .cta-buttons, .social-links {
        justify-content: center;
      }
      
      .hero-animation {
        max-width: 100%;
      }
    }
  `;

  // Syntax highlighting colors
  const syntaxColors = {
    keyword: '#ff79c6',
    string: '#f1fa8c',
    comment: '#6272a4',
    function: '#50fa7b',
    operator: '#ff79c6',
    variable: '#8be9fd',
    tag: '#ff79c6',
    number: '#bd93f9',
  };

  // Format the code with syntax highlighting
  const formatCodeLine = (line, index) => {
    if (typeof line === 'string') {
      if (line.startsWith('//')) {
        return (
          <div key={index} style={styles.codeLine}>
            <span style={{ color: syntaxColors.comment }}>{line}</span>
          </div>
        );
      } else if (line.includes('class Developer')) {
        return (
          <div key={index} style={styles.codeLine}>
            <span style={{ color: syntaxColors.keyword }}>class </span>
            <span style={{ color: syntaxColors.function }}>Developer</span> {'{'}
          </div>
        );
      } else if (line.includes('constructor')) {
        return (
          <div key={index} style={styles.codeLine}>
            {'  '}<span style={{ color: syntaxColors.function }}>constructor</span>() {'{'}
          </div>
        );
      } else if (line.includes('this.name')) {
        return (
          <div key={index} style={styles.codeLine}>
            {'    '}<span style={{ color: syntaxColors.variable }}>this</span>.name = <span style={{ color: syntaxColors.string }}>"Subashini S"</span>;
          </div>
        );
      } else if (line.includes('this.role')) {
        return (
          <div key={index} style={styles.codeLine}>
            {'    '}<span style={{ color: syntaxColors.variable }}>this</span>.role = <span style={{ color: syntaxColors.string }}>"Aspiring Software Engineer"</span>;
          </div>
        );
      } else if (line.includes('this.skills')) {
        return (
          <div key={index} style={styles.codeLine}>
            {'    '}<span style={{ color: syntaxColors.variable }}>this</span>.skills = [
          </div>
        );
      } else if (line.includes('this.education')) {
        return (
          <div key={index} style={styles.codeLine}>
            {'    '}<span style={{ color: syntaxColors.variable }}>this</span>.education = <span style={{ color: syntaxColors.string }}>"B.E. Electronics and Communication"</span>;
          </div>
        );
      } else if (line.includes('buildProject')) {
        return (
          <div key={index} style={styles.codeLine}>
            {'  '}<span style={{ color: syntaxColors.function }}>buildProject</span>(idea) {'{'}
          </div>
        );
      } else if (line.includes('const tech')) {
        return (
          <div key={index} style={styles.codeLine}>
            {'    '}<span style={{ color: syntaxColors.keyword }}>const</span> tech = <span style={{ color: syntaxColors.variable }}>this</span>.<span style={{ color: syntaxColors.function }}>selectTech</span>(idea);
          </div>
        );
      } else if (line.includes('return new')) {
        return (
          <div key={index} style={styles.codeLine}>
            {'    '}<span style={{ color: syntaxColors.keyword }}>return</span> <span style={{ color: syntaxColors.keyword }}>new</span> <span style={{ color: syntaxColors.function }}>AwesomeProject</span>(idea, tech);
          </div>
        );
      } else if (line.includes('"Java"') || line.includes('"Spring Boot"') || 
                 line.includes('"React.js"') || line.includes('"JavaScript"') || 
                 line.includes('"MongoDB"') || line.includes('"Python"') || 
                 line.includes('"Node.js"')) {
        return (
          <div key={index} style={styles.codeLine}>
            {'      '}<span style={{ color: syntaxColors.string }}>{line.trim()}</span>,
          </div>
        );
      } else if (line.includes('];')) {
        return (
          <div key={index} style={styles.codeLine}>
            {'    '}];
          </div>
        );
      } else if (line === '  }') {
        return (
          <div key={index} style={styles.codeLine}>
            {'  '}{'}'} 
          </div>
        );
      } else if (line === '}') {
        return (
          <div key={index} style={styles.codeLine}>
            {'}'}
          </div>
        );
      } else if (line === '') {
        return (
          <div key={index} style={styles.codeLine}>
            &nbsp;
          </div>
        );
      } else {
        return (
          <div key={index} style={styles.codeLine}>{line}</div>
        );
      }
    }
    return <div key={index} style={styles.codeLine}>{line}</div>;
  };

  return (
    <>
      <style>{keyframes}</style>
      <section id="hero" style={styles.heroSection}>
        <div style={styles.heroBackground}>
          <div style={styles.animatedGradient}></div>
          <div style={styles.particles}>
            {generateFloatingElements()}
          </div>
        </div>
        
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <h1 style={styles.heading}>
              Hi, I'm <span style={styles.highlight}>Subashini S</span>
            </h1>
            <h2 style={styles.typewriter}>
              <span style={styles.typedText}>
                Aspiring Software Engineer
                <span style={styles.typedCursor}>|</span>
              </span>
            </h2>
            <p style={styles.description}>
              I'm a B.E. Electronics and Communication Engineering student passionate about building scalable applications, 
              optimizing backend performance, and creating seamless user experiences with Java, Spring Boot, React.js, and MongoDB.
            </p>
            
            <div style={styles.ctaButtons}>
              <a href="#projects" style={styles.primaryBtn}
                 onMouseOver={(e) => e.target.style.backgroundColor = 'transparent'}
                 onMouseOut={(e) => e.target.style.backgroundColor = '#64ffda'}>
                View My Projects
              </a>
              <a href="#contact" style={styles.secondaryBtn}
                 onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.1)'}
                 onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                Contact Me
              </a>
            </div>
            
            <div style={styles.socialLinks}>
              <a href="https://github.com/SUBASHINIS28" target="_blank" rel="noopener noreferrer" style={styles.socialLink}
                 onMouseOver={(e) => e.target.style.color = '#64ffda'}
                 onMouseOut={(e) => e.target.style.color = '#8892b0'}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://linkedin.com/in/subashini-s-b43539258" target="_blank" rel="noopener noreferrer" style={styles.socialLink}
                 onMouseOver={(e) => e.target.style.color = '#64ffda'}
                 onMouseOut={(e) => e.target.style.color = '#8892b0'}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          
          <div style={styles.heroAnimation}>
            <div style={styles.codeEditor}>
              <div style={styles.codeEditorHeader}>
                <div style={{ ...styles.codeEditorDot, backgroundColor: '#ff5f56' }}></div>
                <div style={{ ...styles.codeEditorDot, backgroundColor: '#ffbd2e' }}></div>
                <div style={{ ...styles.codeEditorDot, backgroundColor: '#27c93f' }}></div>
              </div>
              <div style={styles.codeEditorContent}>
                {codeLines.map((line, index) => formatCodeLine(line, index))}
                {currentLineIndex < codeSample.length && (
                  <div style={{ display: 'inline-block', width: '8px', height: '16px', background: '#64ffda', animation: 'blink 1s infinite' }}></div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div style={styles.scrollIndicator}>
          <FontAwesomeIcon icon={faArrowDown} bounce style={styles.scrollIcon} />
          <span>Scroll Down</span>
        </div>
      </section>
    </>
  );
};

export default Hero;