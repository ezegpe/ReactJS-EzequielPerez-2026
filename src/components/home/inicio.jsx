import { Link } from "react-router-dom";
import styles from "./Inicio.module.css";

function Inicio() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>¡Bienvenidos a Tech Class!</h1>
        <p className={styles.subtitle}>
          Tu tienda de confianza para encontrar los mejores productos de
          tecnología al mejor precio.
        </p>
        <Link to="/productos" className={styles.ctaButton}>
          Explorar Catálogo
        </Link>
      </section>

      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>¿Por qué elegirnos?</h2>
        <div className={styles.grid}>
          <div className={styles.featureCard}>
            <h3>🚀 Envío Rápido</h3>
            <p>
              Recibí tus productos en la puerta de tu casa en tiempo récord, sin
              demoras ni complicaciones.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>🛡️ Garantía Oficial</h3>
            <p>
              Todos nuestros insumos cuentan con soporte y garantía directo de
              fábrica.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>💳 Múltiples Pagos</h3>
            <p>
              Aprovechá nuestras promociones con tarjetas de crédito y
              transferencia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
