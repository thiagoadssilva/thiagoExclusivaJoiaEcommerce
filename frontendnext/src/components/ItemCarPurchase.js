import styles from '../styles/components/ItemCarPurchase.module.css';
import { useState } from 'react';

function ItemCarPurchase(props) {
  const [qtdProductsMulti, setQtdProductsMulti] = useState(props.item.qtd);
  const [totalPrice, setTotalPrice] = useState(props.item.price * props.item.qtd);

  function handlePlus() {
    let result = qtdProductsMulti + 1;
    setTotalPrice(result * props.item.price);
    setQtdProductsMulti(result);
  }

  function handleAnyLess() {
    if (qtdProductsMulti > 0) {
      let result = qtdProductsMulti - 1;
      setTotalPrice(result * props.item.price);
      setQtdProductsMulti(result);
    }

    props.handleRemoveProductCar(props);

  }

  return (
    <div className={styles.container}>
      <div className={styles.containerCard}>

        <div className={styles.containerImageNameDescription}>
          <img className={styles.containerImage} src="/01.jpg" alt="Anel" />

          <div className={styles.containerNameDescription}>
            <span className={styles.spanName}>{props.item.name}</span>
            <span className={styles.spanDescription}>{props.item.description}</span>
          </div>
        </div>

        <div className={styles.containerInitial}>
          <div className={styles.containerValueQtd}>
            <div className={styles.containerPriceQtd}>
              <span className={styles.spanPrice}>R$ {props.item.price}</span>


              <div>
                <button className={styles.spanPlus} onClick={() => handlePlus()}>+</button>
                <input className={styles.inputQtd} value={qtdProductsMulti}></input>
                <button className={styles.spanAnyLess} onClick={() => handleAnyLess()}>-</button>
              </div>


              <span className={styles.spanPrice}>R$ {totalPrice}</span>
            </div>

            {/* <button className={styles.containerButton}>
              <img className={styles.containerbuy} src="/carrinho.png" alt="Carrinho" />
              Adicionar no Carrinho
            </button> */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default ItemCarPurchase;