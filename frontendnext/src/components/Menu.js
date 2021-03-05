import styles from '../styles/components/Menu.module.css';
import ItemMenu from '../components/ItemMenu';

import { useState } from 'react';

function Menu() {
  const [controlMenuResponsive, setControlMenuResponsive] = useState(false);

  function handleOpenCloseMenu() {
    if (controlMenuResponsive === true) {
      setControlMenuResponsive(false);
    } else {
      setControlMenuResponsive(true);
    }

  }

  return (
    <div className={styles.container}>
      {/* <ItemMenu item="Home"/> */}
      <span className={styles.containerImageMenu} onClick={handleOpenCloseMenu}>☰ Menu</span>
      <div className={styles.containerItemMenu}>
        <ItemMenu item="Anéis" />
        <ItemMenu item="Alianças" />
        <ItemMenu item="Brincos" />
        <ItemMenu item="Conjuntos" />
        <ItemMenu item="Correntes" />
        <ItemMenu item="Pulseiras" />
        <ItemMenu item="Coleção" />
        <ItemMenu item="Symbol" />
        <ItemMenu item="Outleet" />
        <ItemMenu item="Verão" />
      </div>

      {controlMenuResponsive &&
        <div className={styles.containerItemMenuResponsive} onClick={handleOpenCloseMenu}> 
          <ItemMenu className={styles.itemMenuResponcive} item="Anéis" />
          <ItemMenu className={styles.itemMenuResponcive} item="Alianças" />
          <ItemMenu className={styles.itemMenuResponcive} item="Brincos" />
          <ItemMenu className={styles.itemMenuResponcive} item="Conjuntos" />
          <ItemMenu className={styles.itemMenuResponcive} item="Correntes" />
          <ItemMenu className={styles.itemMenuResponcive} item="Pulseiras" />
          <ItemMenu className={styles.itemMenuResponcive} item="Coleção" />
          <ItemMenu className={styles.itemMenuResponcive} item="Symbol" />
          <ItemMenu className={styles.itemMenuResponcive} item="Outleet" />
          <ItemMenu className={styles.itemMenuResponcive} item="Verão" />
        </div>
      }



    </div>
  );
}

export default Menu;