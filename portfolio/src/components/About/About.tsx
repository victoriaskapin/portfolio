import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return(
        <section>
            <h2>About</h2>
            <div>
                <img 
                    src={getImageUrl("about/about_picture.png")} 
                    alt="about picture of the profile picture girl with a plant" 
                    className={styles.aboutPic}
                />
                <ul>
                    <li>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"/>
                        <div>
                            <h3>Frontend Developer</h3>
                            <p> 4 Years of software development</p>
                        </div>
                    </li>
                    <li>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon"/>
                        <div>
                            <h3>Backend Developer</h3>
                            <p> 4 Years of software development</p>
                        </div>
                    </li>
                    <li>
                        <img src={getImageUrl("about/uiIcon.png")} alt="server icon"/>
                        <div>
                            <h3>Data Scientist</h3>
                            <p> 4 Years of software development</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}