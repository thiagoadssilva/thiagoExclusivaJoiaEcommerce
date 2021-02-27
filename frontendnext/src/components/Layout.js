import styles from '../styles/components/Layout.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListCardItem from '../components/ListCardItem';

function Layout(){
    return(
        <div className={styles.containerContent}>
            <Header />
            <ListCardItem />
            <Footer />
        </div>
    );
}

export default Layout;