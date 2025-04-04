import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/email.png")} alt="Email icon" />
          <a href="mailto:goyalnamrata87@gmail.com">goyalnamrata87@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/namrata-goyal-96084b281/">linkedin.com/in/namrata-goyal</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/git.png")} alt="Github icon" />
          <a href="https://github.com/namrata-goyal">github.com/namrata-goyal</a>
        </li>
      </ul>
    </footer>
  );
};
