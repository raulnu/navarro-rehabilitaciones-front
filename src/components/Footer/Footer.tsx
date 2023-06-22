import styles from "./styles.module.scss";

export const Footer = ({ page }: IProps) => {
  return (
    <>
      <footer
        className={`${styles.footer} ${
          page === "contacto" && styles.contactFooter
        }`}
      >
        {page !== "contacto" && (
          <>
            <div>
              <img
                src="contact-icons/icons8-phone-50.png"
                alt="Phone icon"
                height="35"
                width="35"
                className={styles.phoneIcon}
              />
              <a href="tel:934376970">93 437 69 70</a>
            </div>
            <div>
              <i>
                <img
                  src="contact-icons/icons8-post-50.png"
                  alt="Email icon"
                  height="35"
                  width="35"
                  className={styles.emailIcon}
                />
              </i>
              <a href="mailto:info@restauracionesnavarro.com">
                info@restauracionesnavarro.com
              </a>
            </div>
            <div>
              <img
                src="contact-icons/icons8-location-50.png"
                alt="Phone icon"
                height="35"
                width="35"
                className={styles.locationIcon}
              />
              <a href="https://www.google.com/maps/place/RESNA+Navarro+Rehabilitaci%C3%B3n+de+Edificios+Sl/@41.3668828,2.0985439,17z/data=!4m14!1m7!3m6!1s0x12a4991975ce68ed:0xd79a35eaa27cf03!2sRESNA+Navarro+Rehabilitaci%C3%B3n+de+Edificios+Sl!8m2!3d41.3668828!4d2.1007326!16s%2Fg%2F11c1rtk1z_!3m5!1s0x12a4991975ce68ed:0xd79a35eaa27cf03!8m2!3d41.3668828!4d2.1007326!16s%2Fg%2F11c1rtk1z_?entry=ttu">
                Avda. Can Serra, 88 C, Sot. <br /> 108906 L'Hospitalet de
                Llobregat (BCN)
              </a>
            </div>
          </>
        )}

        <span>Restauraciones Navarro &copy; {new Date().getFullYear()}</span>
      </footer>
    </>
  );
};

export default Footer;

interface IProps {
  page?: string;
}
