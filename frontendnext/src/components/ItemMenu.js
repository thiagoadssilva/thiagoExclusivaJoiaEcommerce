import styles from '../styles/components/ItemMenu.module.css';
import { useContext } from 'react';
import ListCardItemContext from '../contexts/ListCardItemContext';


function ItemMenu(props){
    const {chosenItem, setControlCarPurchase} = useContext(ListCardItemContext);

    function handleChoose(param){
        chosenItem(param);
        setControlCarPurchase(false);
    }

    return(
        <div className={styles.container} onClick={() =>handleChoose(props.item)}>
            {props.item}
        </div>
    );
}

export default ItemMenu;