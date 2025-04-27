import { getImageUrl } from '../../utils';
import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';

export const Experience = () => {
    return(
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill,id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        )
                    })}
                </div>
                <ul className={styles.history}>
                    {
                    history.map((job, id) => {
                        return (
                            <li key={id} className={styles.job}>
                                <img src={getImageUrl(job.imageSrc)} alt={job.organisation} />
                                <div className={styles.jobDetails}>
                                    <h3>{`${job.role}, ${job.organisation}`}</h3>
                                    <p>{`${job.startDate} - ${job.endDate}` }</p>
                                    <ul>
                                        {job.experiences.map((experience, id) => {
                                            return (
                                                <li key={id}>
                                                    {experience}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )})
                    } 
                </ul>
            </div>
        </section>
    );
}