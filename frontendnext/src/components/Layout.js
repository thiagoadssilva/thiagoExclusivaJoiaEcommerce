import styles from '../styles/components/Layout.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListCardItem from '../components/ListCardItem';

import ListCardItemContext from '../contexts/ListCardItemContext';
import products from '../../products.json';

function Layout() {
  let newArrayProducts = [];
  let productCategories ='';

  function chosenItem(param) {
    if(param === 'Anéis'){
      productCategories = products[0].Anéis;
    }
    if(param === 'Alianças'){
      productCategories = products[0].Alianças;
    }
    
    newArrayProducts = productCategories.map((function(elemt){
      return elemt;
    }));

    console.log(newArrayProducts);
  }

  
  
  

  return (
    <div className={styles.containerContent}>
      <ListCardItemContext.Provider value={{ newArrayProducts, chosenItem }} >
        <Header />
        <ListCardItem />
        <Footer />
      </ListCardItemContext.Provider>
    </div>
  );
}

export default Layout;