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
          p="During my internship at Augle AI from May 2023 to August 2023, I played a pivotal role in enhancing the company's data processing capabilities. I implemented and optimized modules for handling images, videos, and point clouds using Python and a suite of related libraries, significantly improving system performance. My work included developing real-time notification functionalities and video streaming features leveraging SMTP and RTCP protocols. I actively participated in collaborative software development, contributing to team-driven solutions and integrating various systems seamlessly. Utilizing technologies such as Python, Flask, OpenCV, MongoDB, and PyTorch, I successfully enhanced system efficiency by 30% by refining inspection processes and generating actionable insights. My contributions were instrumental in advancing Augle AI's capabilities, driving both innovation and operational efficiency."
        />
        <ExperienceCard
          src={psu}
          link="https://www.linkedin.com/school/penn-state-university/posts/?feedView=all"
          h3="Learning Assistant for MATH 141"
          p="In my role as a Learning Assistant for MATH 141 (Calculus 2) at Pennsylvania State University from August 2023 to December 2023, I hosted weekly sessions twice a week to reinforce core calculus concepts, troubleshoot challenges, and provide real-world applications of calculus principles. I focused on addressing individual student problems, helping them enhance their problem-solving skills and deepen their understanding of course materials. Additionally, I facilitated interactive worksheet sessions with the professor once a week, aiming to reinforce key concepts, improve problem-solving abilities, and create a dynamic and participatory learning environment."
        />
      </div>
    </section>
  );
}

export default WorkExperience;
