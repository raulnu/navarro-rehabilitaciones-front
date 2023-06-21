import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <span>93 437 69 70</span>
        <section className={styles.footer__direction}>
          <span>Avda. Can Serra, 88 C, Sot. 1</span>
          <span>08906 L'Hospitalet de Llobregat (BCN)</span>
        </section>
        <span>Restauraciones Navarro &copy; {new Date().getFullYear()}</span>
      </footer>
    </>
  );
};

export default Footer;
