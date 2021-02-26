import styles from '../styles/components/Layout.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout(){
    return(
        <div className={styles.containerContent}>
            <Header />
            <Footer />
        </div>
    );
}

export default Layout;