// src/App.js
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import ResumeChatbot from './components/Chatbot/ResumeChatbot';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
       
      <About />
      <Experience />
      <Projects />
      <Contact />
      {/* Resume Section */}
      <div className={styles.resumeSection}>
        <h2>My Resume</h2>
        <p>Click below to view my resume:</p>
        <a 
          href="https://drive.google.com/file/d/1TSv-Hzt759h4lDkgf4QbwQL9XDodzKgV/view?usp=sharing" 
          className={styles.resumeLink} 
          target="_blank" 
          rel="noopener noreferrer">
          View Resume
        </a>
      </div>
      
     
      <ResumeChatbot /> {/* Adding the chatbot component */}
    </div>
  );
}

export default App;
