import { useState } from "react";
import { getImageUrl } from "../../utils";
import ResumeChatbot from "../Chatbot/ResumeChatbot"; // Import chatbot
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [chatbotOpen, setChatbotOpen] = useState(false); // Chatbot toggle state

    const handleChatbotClick = () => {
        setChatbotOpen(!chatbotOpen); // Toggle chatbot
        setMenuOpen(false); // Close the navbar menu
    };

    return (
        <>
            <nav className={styles.navbar}>
                <a className={styles.title} href="/">
                    CraftyCode
                </a>
                <div className={styles.menu}>
                    <img
                        className={styles.menuBtn}
                        src={
                            menuOpen
                                ? getImageUrl("nav/closeIcon.png")
                                : getImageUrl("nav/menuIcon.png")
                        }
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                        onClick={() => setMenuOpen(false)}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        
                    </ul>
                </div>
            </nav>

            {/* Render chatbot only when chatbotOpen is true */}
            {chatbotOpen && <ResumeChatbot onClose={() => setChatbotOpen(false)} />}
        </>
    );
};
