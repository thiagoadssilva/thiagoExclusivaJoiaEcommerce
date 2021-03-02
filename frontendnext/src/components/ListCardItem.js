import styles from '../styles/components/ListCardItem.module.css';
import CardItem from '../components/CardItem';
import { useEffect } from 'react';

import { useContext } from 'react';
import ListCardItemContext from '../contexts/ListCardItemContext';

function ListCardItem() {

  const products = useContext(ListCardItemContext);
  console.log(products[0]);
  let dogs = products[0].filter((animal) => {
    return animal.type === 'dog';
  })

  //console.log(dogs);



  return (
    <div className={styles.container}>
      {products[0].bracellete.map(item => (
        <CardItem item={item} />
      ))}

    </div>

  );
}

export default ListCardItem;