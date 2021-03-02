import styles from '../styles/components/CardItem.module.css';

function CardItem(props) {

  //console.log(props.item);

  return (
    <div className={styles.container}>
      <div className={styles.containerCard}>
        <img className={styles.containerImage} src="/01.jpg" alt="Anel" />
        <span className={styles.containerName}>{props.item.name}</span>
        <span className={styles.containerDescription}>{props.item.description}</span>
        <span className={styles.containerPrice}>R$ {props.item.price.toFixed(2)}</span>
        <button className={styles.containerButton}>
          <img className={styles.containerbuy} src="/carrinho.png" alt="Anel" />
          Adicionar no Carrinho
        </button>
      </div>
    </div>
  );
}

export default CardItem;