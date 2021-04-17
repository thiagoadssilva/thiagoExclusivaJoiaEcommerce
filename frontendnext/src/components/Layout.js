import styles from '../styles/components/Layout.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListCardItem from '../components/ListCardItem';
import ListCardPurchase from '../components/ListCardPurchase';

import ListCardItemContext from '../contexts/ListCardItemContext';
import products from '../../products.json';

import { useState } from 'react';

function Layout() {
  const [newArrayProducts, setNewArrayProducts] = useState([]);
  const [controlMessage, setControlMessage] = useState(false);
  const [qtdProductsCar, setQtdProductsCar] = useState(0);
  const [car, setCar] = useState({ products: [] });
  const [controlCarPurchase, setControlCarPurchase] = useState(false);

  var productCategories = '';

  function chosenItem(param) {
    if (param === 'Anéis') {
      productCategories = products[0].Anéis;
    }
    if (param === 'Alianças') {
      productCategories = products[0].Alianças;
    }
    if (param === 'Brincos') {
      productCategories = products[0].Brincos;
    }
    if (param === 'Conjuntos') {
      productCategories = products[0].Conjuntos;
    }
    if (param === 'Correntes') {
      productCategories = products[0].Correntes;
    }
    if (param === 'Pulseiras') {
      productCategories = products[0].Pulseiras;
    }
    if (param === 'Coleção') {
      productCategories = products[0].Coleção;
    }
    if (param === 'Symbol') {
      productCategories = products[0].Symbol;
    }
    if (param === 'Outleet') {
      productCategories = products[0].Outleet;
    }
    if (param === 'Verão') {
      productCategories = products[0].Verão;
    }

    setNewArrayProducts(productCategories.map((function (elemt) {
      return elemt;
    })));
    setControlMessage(true);
  }

  function addProducts(productCar) {

    const objCar = Object.assign({}, car);
    let newProduct = true;

    objCar.products.forEach((prod, index) => {
      if (prod.name === productCar.item.name) {
        objCar.products[index].qtd++;
        newProduct = false;
      }
    });

    if (newProduct) {
      objCar.products.push({
        id: 1 + 1,
        name: productCar.item.name,
        price: productCar.item.price,
        qtd: 1,
        description: productCar.item.description
      });
    }

    setCar(objCar);
    setQtdProductsCar(qtdProductsCar + 1);

  }

  return (
    <div className={styles.containerContent}>
      <ListCardItemContext.Provider
        value={{
          newArrayProducts,
          chosenItem,
          controlMessage,
          addProducts,
          qtdProductsCar,
          car,
          setControlCarPurchase
        }}
      >
        <Header />
        {!controlCarPurchase &&
          <ListCardItem />
        }
        {controlCarPurchase &&
          <ListCardPurchase />
        }
        <Footer />
      </ListCardItemContext.Provider>
    </div>
  );
}

export default Layout;