import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.teamSection}>
        <h3>Nuestro Equipo</h3>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h4>Ezequiel Perez</h4>
            <p>Desarrollador Front-End</p>
          </div>
          <div className={styles.card}>
            <h4>Gabriela Rodríguez</h4>
            <p>Diseñadora UI/UX</p>
          </div>
          <div className={styles.card}>
            <h4>Roxana Martínez</h4>
            <p>Tester QA</p>
          </div>
        </div>
      </div>

      <div className={styles.footerInfo}>
        <p>&copy; 2026 Tech Class. Todos los derechos reservados.</p>
        <p className={styles.links}>
          <span>Políticas de Privacidad</span> | <span>Contacto</span> |{" "}
          <span>Sucursales</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
