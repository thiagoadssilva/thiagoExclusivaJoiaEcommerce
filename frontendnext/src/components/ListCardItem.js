import styles from '../styles/components/ListCardItem.module.css';
import CardItem from '../components/CardItem';

import { useContext, useEffect } from 'react';
import ListCardItemContext from '../contexts/ListCardItemContext';

function ListCardItem() {
  const { newArrayProducts } = useContext(ListCardItemContext);

  function handleTeste(){
    {newArrayProducts.map(item => (
      <CardItem item={item} />
    ))}
  }

  useEffect(() =>{
    handleTeste();
  },[newArrayProducts]);

  return (
    <div className={styles.container} onClick={handleTeste}>
      {handleTeste()}
    </div>
  );
}

export default ListCardItem;