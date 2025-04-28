import styles from './Navbar.module.css'
import { useState } from 'react';
import { getImageUrl } from '../../utils';

export const Navbar = ()=>{
    const [menuOpen, setMenuOpen] = useState(false); 

    return (
    <nav className={styles.navbar}>
        <a  className={styles.title} href='/portfolio'> Portfolio </a>
        <div className={styles.menu} >
            <img 
                className={styles.menuBTN} 
                src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png") } 
                alt="hamburguer menu icon" 
                onClick={() => setMenuOpen(!menuOpen)}
                />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen }`} >
                <li>
                    <a href="#about"> About </a>
                </li>
                <li>
                    <a href="#experience"> Experience </a>
                </li>
                <li>
                    <a href="#projects"> Projects </a>
                </li>
                <li>
                    <a href="#contact"> Contact </a>
                </li>
            </ul>
        </div>
    </nav>
    );
}