import logo from '../assets/logo footer.svg'
import styles from '../components/Footer.module.scss'

function Footer() {
    return (
      <footer className={styles.footer}>
        <img src={logo} alt="Kasa logo"/>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
  
  export default Footer;