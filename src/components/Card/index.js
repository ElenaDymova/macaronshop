import styles from './Card.module.css';
import { useState } from 'react';

function Card({title, description,  imageUrl, price, onPlus, onClickLike }) {
    const [isClick, setIsClicked] = useState(false);

    const onClickPlus = () => {
        onPlus({title, price, imageUrl});
        setIsClicked(!isClick);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img onClick={onClickLike} src="/img/heart-unliked.svg" alt="unliked"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Macarons"/>
            <h5>{title}</h5>
            <p>{description}</p>
            <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Price:</span>
                <b>{price}$</b>
            </div>
            <img className={styles.plus} onClick={onClickPlus} src={isClick ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus"/>
            </div>
        </div>
    )
}

export default Card;