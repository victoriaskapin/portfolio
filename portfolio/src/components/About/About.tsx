import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/about_picture.png")} 
                    alt="about picture of the profile picture girl with a plant" 
                    className={styles.aboutPic}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p> Worked with Angular and React frameworks creating webApps from scratch </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p> Nodejs and Python backend experience, creating relational databases and rest APIS</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="ui icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Data Scientist</h3>
                            <p> Python dev using Databricks, Djanjo and Spark </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}