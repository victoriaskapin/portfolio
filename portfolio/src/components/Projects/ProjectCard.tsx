import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';

interface ProjectType{
    title: string;
    description: string;
    imageSrc: string;
    skills: string[];
    demo: string;
    source: string;   
}
interface ProjectCardProps {
    project: ProjectType;
}

export const ProjectCard = ({project}:ProjectCardProps) => {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(project.imageSrc)} alt={project.title} className={styles.image}/>
            <h3 className={styles.title}> {project.title} </h3>
            <p className={styles.description}> {project.description} </p>
            <ul className={styles.skills}>
                {
                project.skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    )
                })}
            </ul>
            <div className={styles.links}>
                <a href={project.demo} className={styles.link} > Demo </a>
                <a href={project.source} className={styles.link} > Source </a>
            </div>
        </div>
    );
}