import ExperienceCard from "../../common/ExperienceCard";
import augle from "../../assets/AugleIconlogo.png";
import psu from "../../assets/psu.png";
import styles from "./WorkExperienceStyles.module.css";

function WorkExperience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Work Experience</h1>
      <div className={styles.projectsContainer}>
        <ExperienceCard
          src={augle}
          link="https://www.linkedin.com/company/augle-ai/posts/?feedView=all"
          h3="Software Engineer Intern at Augle AI"
          p={
            <>
              During my internship at <strong>Augle AI</strong> from June 2024
              to August 2024, I designed and implemented a{" "}
              <strong>web scraping tool</strong> using{" "}
              <strong>Scrapy Selenium</strong> to efficiently extract{" "}
              <strong>product details</strong> and{" "}
              <strong>technical data</strong> from web pages. I configured{" "}
              <strong>MongoDB</strong> for optimal data storage, enabling
              seamless management and access for analysis. By optimizing the
              scraping process with <strong>custom spider settings</strong>,
              including download delays and auto-throttling, I improved
              efficiency by <strong>40%</strong>. Leveraging technologies such
              as <strong>Scrapy Selenium</strong>, <strong>Python</strong>, and{" "}
              <strong>MongoDB</strong>, I developed an effective solution for
              extracting and analyzing technical product data.
            </>
          }
        />
        <ExperienceCard
          src={augle}
          link="https://www.linkedin.com/company/augle-ai/posts/?feedView=all"
          h3="Software Engineer Intern at Augle AI"
          p={
            <>
              During my internship at <strong>Augle AI</strong> from May 2023 to
              August 2023, I played a pivotal role in enhancing the company's{" "}
              <strong>data processing capabilities</strong>. I implemented and
              optimized modules for handling images, videos, and point clouds
              using <strong>Python</strong> and a suite of related libraries,
              significantly improving system performance. My work included
              developing real-time notification functionalities and video
              streaming features leveraging <strong>SMTP</strong> and{" "}
              <strong>RTCP protocols</strong>. I actively participated in
              collaborative software development, contributing to team-driven
              solutions and integrating various systems seamlessly. Utilizing
              technologies such as{" "}
              <strong>Python, Flask, OpenCV, MongoDB,</strong> and{" "}
              <strong>PyTorch</strong>, I successfully enhanced system
              efficiency by <strong>30%</strong> by refining inspection
              processes and generating actionable insights. My contributions
              were instrumental in advancing Augle AI's capabilities, driving
              both <strong>innovation</strong> and operational efficiency.
            </>
          }
        />
        <ExperienceCard
          src={psu}
          link="https://www.psu.edu/"
          h3="Learning Assistant for MATH 141"
          p={
            <>
              In my role as a <strong>Learning Assistant</strong> for{" "}
              <strong>MATH 141</strong> (Calculus 2) at Pennsylvania State
              University from August 2023 to December 2023, I hosted weekly
              sessions twice a week to reinforce core{" "}
              <strong>calculus concepts</strong>, troubleshoot challenges, and
              provide real-world applications of calculus principles. I focused
              on addressing individual student problems, helping them enhance
              their problem-solving skills and deepen their understanding of
              course materials. Additionally, I facilitated interactive
              worksheet sessions with the professor once a week, aiming to
              reinforce key concepts, improve problem-solving abilities, and
              create a dynamic and participatory learning environment.
            </>
          }
        />
      </div>
    </section>
  );
}

export default WorkExperience;
