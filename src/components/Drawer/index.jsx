import React from 'react'

import styles from './Drawer.module.scss'

function Drawer(props) {
  return (
    <div  className={styles.drawerOwerlay}>
    <div className={styles.drawer}>
    <h2 className="d-flex justify-between">Корзинa<img className="removeBtn cu-p" onClick={props.onClose} src="/img/btn-remove.svg" alt="remove" /></h2>

    <div className="items">
    <div className="cartItem d-flex align-center">
      <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers" />
      <div className="mr-20">
        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
          <b>12 999 руб.</b>
        </div>
        <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
    </div>


    <div className="cartItem d-flex align-center">
      <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers" />
      <div className="mr-20">
        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
          <b>12 999 руб.</b>
        </div>
        <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
    </div>

    </div>

    <div className="cartTotalBlock">
    <ul>
      <li>
        <span>Итого: </span>
        <div></div>
        <b>21 498 руб.</b>
      </li>
      <li>
        <span>Налог 5%:</span>
        <div></div>
        <b>1074 руб.</b>
      </li>
      <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
    </ul>
    </div>

  </div>
  </div>
  )
}

export default Drawer