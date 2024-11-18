import styles from './MyStyleForm2.module.css';

export default function Header() {
  return (
  <div className={`mb-2 ${styles.header} py-2 bg-light shadow`}>
    <img alt="men" className={styles.Centering} width="150" src="/assets/header.png" />
</div>
  );
}
