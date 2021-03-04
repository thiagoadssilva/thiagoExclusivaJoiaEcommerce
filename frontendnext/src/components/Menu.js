import styles from '../styles/components/Menu.module.css';
import ItemMenu from '../components/ItemMenu';

import { useContext } from 'react';
import ListCardItemContext from '../contexts/ListCardItemContext';

function Menu(){
    const {chosenItem} = useContext(ListCardItemContext);

    return(
        <div className={styles.container}>
            <ItemMenu item="Home"/>
            <ItemMenu item="Anéis"/>
            <ItemMenu item="Alianças"/>
            <ItemMenu item="Brincos"/>
            <ItemMenu item="Conjuntos"/>
            <ItemMenu item="Correntes"/>
            <ItemMenu item="Pulseiras"/>
            <ItemMenu item="Coleção"/>
            <ItemMenu item="Symbol"/>
            <ItemMenu item="Outleet"/>
            <ItemMenu item="Verão"/>
        </div>
    );
}

export default Menu;