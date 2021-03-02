import styles from '../styles/components/Layout.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListCardItem from '../components/ListCardItem';


import ListCardItemContext from '../contexts/ListCardItemContext';
import products from '../../products.json';


function Layout() {
  return (
    <div className={styles.containerContent}>
      <ListCardItemContext.Provider value={products}>
        <Header />
        <ListCardItem />
        <Footer />
      </ListCardItemContext.Provider>
    </div>
  );
}

export default Layout;