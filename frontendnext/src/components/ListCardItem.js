import styles from '../styles/components/ListCardItem.module.css';
import CardItem from '../components/CardItem';

import { useContext } from 'react';
import ListCardItemContext from '../contexts/ListCardItemContext';

function ListCardItem() {
  const { newArrayProducts, controlMessage, addProducts } = useContext(ListCardItemContext);
  

  return (
    <div className={styles.container}>
      {newArrayProducts.map(item => (
        <CardItem item={item} addProducts={addProducts}/>
      ))}

      {!controlMessage &&
        <div className={styles.containerMessage}>
          <span>Seja Bem Vindo!!</span>  
        </div>
      }


    </div>
  );
}

export default ListCardItem;