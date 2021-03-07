import {useContext} from 'react';
import ListCardItemContext from '../contexts/ListCardItemContext';

import styles from '../styles/components/ItemCarPurchase.module.css';

function ItemCarPurchase(){
    const {car} = useContext(ListCardItemContext);

    console.log(car);

    return(
        <div className={styles.container}>
            OLA!!
        </div>
    );
}

export default ItemCarPurchase;