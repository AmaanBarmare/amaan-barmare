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
          p="Product Availability Tracker"
        />
      </div>
    </section>
  );
}

export default Projects;
