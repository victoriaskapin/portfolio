import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

export const Contact = ()=>{
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
               

                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/victoria-fernandez-skapin-12baa8191/" target="_blank">
                        <img src={getImageUrl('contact/linkedinIcon.png')} alt="linkedin Icon" />
                        <p>Linkedin</p>
                    </a>
                </li>

                <li className={styles.link}>
                    <a href="https://github.com/victoriaskapin" target="_blank" >
                        <img src={getImageUrl('contact/githubIcon.png')} alt="gitHub Icon" />
                        <p>My gitHub</p> 
                    </a>
                </li>

                <li className={styles.link}>
                    <a href="mailto:vfernandezs@fi.uba.ar">
                        <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
                        <p>vfernandezs@fi.uba.ar </p>
                    </a>
                </li>
            </ul>
        </footer>
    )
}