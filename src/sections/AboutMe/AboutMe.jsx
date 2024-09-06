import styles from "./AboutMeStyles.module.css";

function AboutMe() {
  return (
    <section id="about" className={styles.container}>
      <h1 className="sectionTitle">About Me</h1>
      <p>
        Throughout my academic and professional journey, I have honed my skills
        in software engineering through various internships and personal
        projects. As a Software Engineer Intern at Augle AI, I developed a web
        scraping tool using Scrapy and optimized data processing, improving
        efficiency by 40%. I also contributed to a project at Augle AI, where I
        implemented modules for handling image, video, and point cloud data, as
        well as real-time video streaming using Flask, OpenCV, and MongoDB,
        improving system efficiency by 30%.
      </p>
      <p>
        In addition to these internships, I have worked on personal projects
        such as developing a MERN stack website and an Amazon stock monitoring
        bot, which showcase my ability to build full-stack solutions and
        integrate real-time functionalities like notifications and payment
        processing.
      </p>
      <p>
        With a strong foundation in programming languages like Python,
        JavaScript, and Java, and experience in frameworks like Flask, React,
        and Node.js, I am constantly seeking new opportunities to learn,
        innovate, and solve complex problems.
      </p>
    </section>
  );
}

export default AboutMe;
