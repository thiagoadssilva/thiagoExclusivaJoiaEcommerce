import styles from '../styles/components/Footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>

      <div className={styles.containerFormaPagamento}>
        <span>Formas de Pagamentos</span>
        <img className={styles.image} src="/pag.png" />
      </div>

      <span>EXCLUSIVA JOIA</span>

      <div className={styles.containerRedesSociais}>
        <span>Redes Sociais</span>
        <div className={styles.containerImage}>
          <img className={styles.image} src="/face.png" />
          <img className={styles.image} src="/tiktok.png" />
          <img className={styles.image} src="/instagram.png" />
        </div>
      </div>

    </div>
  );
}

export default Footer;