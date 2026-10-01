import styles from "./Contacto.module.css";

function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado con éxito!");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacto</h2>
      <p className={styles.subtitle}>
        Déjanos tu consulta y te responderemos a la brevedad.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ingresá tu nombre"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            placeholder="ejemplo@correo.com"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            placeholder="Escribí tu mensaje aquí..."
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}

export default Contacto;
