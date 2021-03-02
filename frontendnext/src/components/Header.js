import styles from '../styles/components/Header.module.css';

function Header() {
  return (
    <div>
      <div className={styles.containerHeader}>
        <span className={styles.containerTitle}>EXCLUSIVA JOIA</span>

        <div className={styles.containerSearchImg}>
          <input className={styles.containerSearch} placeholder="O que você procura?" />
          <img className={styles.containerImg} src="search.png" alt="Pesquisar" />
        </div>



        <div className={styles.containerCardCall}>
          <img className={styles.containerImgCall} src="envelope.png" />
          <span className={styles.containerSpan}>Atendimento</span>
          <div className={styles.containerCardCall} />
          <img className={styles.containerImgCall} src="carrinho.png" />
          <span className={styles.containerSpan}>Minha Sacola (0)</span>
        </div>

        <div className={styles.containerSearchImgMobile}>
          <input className={styles.containerSearchMobile} placeholder="O que você procura?" />
        </div>

      </div>



      <div className={styles.containerMenus}>
        Menus
      </div>
    </div>

  );
}

export default Header;