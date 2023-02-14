import React from 'react'
import cartStyle from '../Cart/Cart.module.css'
import line from '../../assets/blueline.svg'
import { Link } from 'react-router-dom'
import located from '../../assets/lacated.svg'
import products from '../../assets/products.png'
import colculate from '../../assets/colculate.png'

function Cart() {
  return (
    <div>
        <div className={cartStyle["cart__container"]}>
            <h1 className={cartStyle["cart__title"]}>Cart</h1>
            <img className={cartStyle["cart__line"]} src={line} alt="" />
            <div className={cartStyle["cart__link-wrap"]}>
                <Link className={cartStyle["cart__link-home"]} to={"/home"}>Home</Link>
                <img className={cartStyle["cart__locat"]} src={located} alt="" />
                <Link className={cartStyle["cart__link-cart"]} to={"/cart"}>Cart</Link>
            </div>
        </div>
        <div className={cartStyle["cart__item"]}>
            <h2 className={cartStyle["cart__item-title"]}>Your cart items</h2>
            <img className={cartStyle["cart__item-img"]} src={products} alt="" />
            <img src={colculate} alt="" />
        </div>
    </div>
  )
}

export default Cart