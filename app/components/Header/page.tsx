import styles from './header.module.css';

const Header = () =>{
  return (
    <header className={styles.header}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#" className={styles.navLink}>Home</a></li>
          <li className={styles.navItem}><a href="/about" className={styles.navLink}>About</a></li>
          <li className={styles.navItem}><a href="/contact" className={styles.navLink}>Contact</a></li>
          <li className={styles.navItem}><a href="/service" className={styles.navLink}>Services</a></li>
        </ul>
      
    </header>
  );
};

export default Header;


