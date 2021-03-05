import styles from '../styles/components/Layout.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListCardItem from '../components/ListCardItem';

import ListCardItemContext from '../contexts/ListCardItemContext';
import products from '../../products.json';

import {useState} from 'react';

function Layout() {
  const [newArrayProducts, setNewArrayProducts] = useState([]);
  const [controlMessage, setControlMessage] = useState(false);
  
  var productCategories ='';

  function chosenItem(param) {
    if(param === 'Anéis'){
      productCategories = products[0].Anéis;
    }
    if(param === 'Alianças'){
      productCategories = products[0].Alianças;
    }
    if(param === 'Brincos'){
      productCategories = products[0].Brincos;
    }
    if(param === 'Conjuntos'){
      productCategories = products[0].Conjuntos;
    }
    if(param === 'Correntes'){
      productCategories = products[0].Correntes;
    }
    if(param === 'Pulseiras'){
      productCategories = products[0].Pulseiras;
    }
    if(param === 'Coleção'){
      productCategories = products[0].Coleção;
    }
    if(param === 'Symbol'){
      productCategories = products[0].Symbol;
    }
    if(param === 'Outleet'){
      productCategories = products[0].Outleet;
    }
    if(param === 'Verão'){
      productCategories = products[0].Verão;
    }
    
    setNewArrayProducts( productCategories.map((function(elemt){
      return elemt;
    })));
    setControlMessage(true);
  }
  
  return (
    <div className={styles.containerContent}>
      <ListCardItemContext.Provider value={{ newArrayProducts, chosenItem, controlMessage}} >
        <Header />
        <ListCardItem />
        <Footer />
      </ListCardItemContext.Provider>
    </div>
  );
}

export default Layout;