import ItemCarPurchase from '../components/ItemCarPurchase'
import styles from '../styles/components/ListCardPurchase.module.css';

import { useContext } from 'react';
import ListCardItemContext from '../contexts/ListCardItemContext';

function ListCardPurchase(){
    const { car } = useContext(ListCardItemContext);
    
    return(
        <div className={styles.container}>
            {car.products.map(item => (
                <ItemCarPurchase item={item}/>
            ))}
        </div>
    );
}

export default ListCardPurchase;