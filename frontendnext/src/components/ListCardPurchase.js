import ItemCarPurchase from '../components/ItemCarPurchase'
import styles from '../styles/components/ListCardPurchase.module.css';

import {
  useContext
} from 'react';
import ListCardItemContext from '../contexts/ListCardItemContext';

function ListCardPurchase() {
  const {
    car
  } = useContext(ListCardItemContext);

  function handleRemoveProductCar(param) {
    for (let i in car.products) {



      //if (car.products[i].name === param.item.name) {
        // console.log(param.item.name);
        console.log(car.products);
        console.log(param.item.name);
        //console.log(car.products[i].name);

        // car.products.map(item =>(
        //     console.log(item.name)
        // ))

        //var indice = car.products[i].name.indexOf(param.item.name);
        //car.splice(indice, 1);
      //}
    }
  }

  return (
    <div className={styles.container}>
      {car.products.map(item => (
          <ItemCarPurchase item={item} handleRemoveProductCar={handleRemoveProductCar} />
      ))}
    </div>
  );
}

export default ListCardPurchase;