import React from 'react';

import styles from './Card.module.scss';

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
  };
  return (
    <div className={styles.card}>
      <div className='favourite cu-p' onClick={props.onClickFavourite}>
        <img src='/img/unliked.svg' alt='unliked' />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt='sneakers' />
      <h5>{props.name}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <div>
          <img
            className='cu-p'
            src={isAdded ? '/img/btn-checked.svg' : '/img/plus.svg'}
            onClick={handleClick}
            alt='plus'
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
