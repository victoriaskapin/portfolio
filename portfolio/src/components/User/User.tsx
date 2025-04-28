import { getImageUrl } from "../../utils";
import styles from './User.module.css';

export const User = ()=>{
    return ( 
    <section className={styles.container}>
     <div className={styles.content}>
        <h1 className={styles.title}> Hello, I'm Victoria</h1>
        <p className={styles.description}> 
            I’m a software developer with 4 years of professional experience across a wide range of technologies.<br/>
            I’ve worked on everything from embedded systems and Arduino, to frontend development, REST API hosting, and more recently, data engineering and large language models.
            <br/>Let’s connect if you’d like to learn more about what I do! 
        </p>
        <a href="mailto:vfernandezs@fi.uba.ar" className={styles.contactBTN}>Contact Me</a>
     </div>
     <img src={getImageUrl("hero/profile_pic_round.png")} alt="Profile" className={styles.profilePic}/>
     <div className={styles.topBlur}/>
    </section>
    );
}