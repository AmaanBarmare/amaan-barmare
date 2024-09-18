import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/IMG_0255-fotor-2024091875641.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/AmaanBarmareResume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Amaan Barmare"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Amaan <br /> Barmare
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a href="https://github.com/AmaanBarmare" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/amaan-barmare-3bw/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Hello! I'm Amaan Barmare, a senior pursuing Computer Science with a
          minor in Economics at Pennsylvania State University with a keen
          interest in software development and problem-solving.
        </p>
        <a href={CV} download>
          <button className="hover"> Resume </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
