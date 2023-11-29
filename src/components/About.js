import styles from '../components/About.module.scss';
import Dropdown from './Dropdown';

function About() {
  return (
    <div>
      <div className={styles.banner}></div>

      <Dropdown />
      <Dropdown />
      <Dropdown />

      <div className={styles.dropdownSection}>
        <div className={styles.box}>
          <div className={styles.dropdown}>
            <span>icon?</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
