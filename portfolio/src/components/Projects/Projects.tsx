import styles from './Projects.module.css';
import { getImageUrl } from '../../utils';

export const Projects = () => {
    return( 
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.content}>
                <div className={styles.projects}>
                    <div className={styles.project}>
                        <img src={getImageUrl("projects/project1.png")} alt="project 1" />
                        <h3>Project 1</h3>
                        <p>Description of project 1</p>
                    </div>
                    <div className={styles.project}>
                        <img src={getImageUrl("projects/project2.png")} alt="project 2" />
                        <h3>Project 2</h3>
                        <p>Description of project 2</p>
                    </div>
                </div>
            </div>    
        </section>
    )
}