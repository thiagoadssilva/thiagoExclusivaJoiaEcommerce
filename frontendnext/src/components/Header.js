import styles from '../styles/components/Header.module.css';
import Menu from '../components/Menu';

import {useContext} from 'react';
import ListCardItemContext from '../contexts/ListCardItemContext';

function Header() {
  const {qtdProductsCar} = useContext(ListCardItemContext);

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
          <span className={styles.containerSpan}>Minha Sacola ({qtdProductsCar})</span>
        </div>

        <div className={styles.containerSearchImgMobile}>
          <input className={styles.containerSearchMobile} placeholder="O que você procura?" />
        </div>

      </div>

      <div className={styles.containerMenus}>
        <Menu />
      </div>
    </div>

  );
}

export default Header;