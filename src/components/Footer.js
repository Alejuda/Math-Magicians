import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer} data-testid="footer-element">
    <h3 className={styles.copy}>© 2023 Ignacio Fino. All rights reserved.</h3>
  </footer>
);
export default Footer;
