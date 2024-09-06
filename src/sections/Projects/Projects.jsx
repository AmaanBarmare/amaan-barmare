import styles from "./ProjectsStyles.module.css";
import asmb from "../../assets/asmb.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={asmb}
          link="https://github.com/AmaanBarmare/Amazon-Stock-Monitor-Bot"
          h3="Amazon Stock Monitor Bot"
          p={
            <>
              I developed an Amazon stock monitoring bot that provides{" "}
              <strong>real-time updates</strong> on product availability,
              helping users make <strong>timely purchasing decisions</strong>.
              To enhance the user experience, I integrated{" "}
              <strong>real-time notifications and alerts</strong> through{" "}
              <strong>Discord</strong>, ensuring users are instantly informed of
              stock changes. I designed and implemented a{" "}
              <strong>user-friendly interface</strong> for efficient tracking of
              stock data, allowing users to easily monitor product availability.
              The bot was built using technologies such as{" "}
              <strong>Node.js</strong> and <strong>JavaScript</strong>,
              leveraging libraries like <strong>AXIOS</strong>,{" "}
              <strong>GOT</strong>, and <strong>discord-webhook-node</strong> to
              ensure optimal data retrieval and processing.
            </>
          }
        />
      </div>
    </section>
  );
}

export default Projects;
