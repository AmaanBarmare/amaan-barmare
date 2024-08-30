import styles from "./AboutMeStyles.module.css";

function AboutMe() {
  return (
    <section id="about" className={styles.container}>
      <h1 className="sectionTitle">About Me</h1>
      <p>
        Hi, I'm Amaan Barmare, a passionate software developer with a focus on
        modern web technologies. I specialize in full-stack development using
        the MERN stack and have a strong background in problem-solving and
        creating innovative solutions.
      </p>
    </section>
  );
}

export default AboutMe;
