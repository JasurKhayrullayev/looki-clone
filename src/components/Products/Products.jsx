import React from 'react'
import productsStyle from '../Products/Products.module.css'
import line from '../../assets/blueline.svg'
import makeCosmetic from '../../assets/make-cosmetic.png'
import makeupBox from '../../assets/makeup-box.png'
import { Link } from 'react-router-dom'
import newCosmetics from '../../assets/newcosmetic.png'
import fromcosmetic from '../../assets/fromcosmetic.png'

function Products() {
  return (
    <div className={productsStyle["product__container"]}>
        <div className={productsStyle["product__our"]}>
            <h2 className={productsStyle["product__our-title"]}>Our products</h2>
            <img className={productsStyle["product__our-line"]} src={line} alt="" />
            <p className={productsStyle["product__our-parag"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?</p>
            <nav className={productsStyle["product__our-nav"]}>
                <Link className={productsStyle["product__our-link"]}>New products</Link>
                <Link className={productsStyle["product__our-link"]}>Onsale</Link>
                <Link className={productsStyle["product__our-link"]}>Pcoming products</Link>
            </nav>
            <img className={productsStyle["product__our-img"]} src={makeCosmetic} alt="" />
            <img src={makeupBox} alt="" />
        </div>
        <div className={productsStyle["product__our"]}>
            <h2 className={productsStyle["product__our-title"]}>New Arrival products</h2>
            <img className={productsStyle["product__our-line"]} src={line} alt="" />
            <p className={productsStyle["product__our-parag"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?</p>
            <img className={productsStyle["product__our-img"]} src={newCosmetics} alt="" />
        </div>
        <div className={productsStyle["product__our"]}>
            <h2 className={productsStyle["product__our-title"]}>From our Latest Blogs</h2>
            <img className={productsStyle["product__our-line"]} src={line} alt="" />
            <p className={productsStyle["product__our-parag"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?</p>
            <img className={productsStyle["product__our-img"]} src={fromcosmetic} alt="" />
        </div>
    </div>
  )
}

export default Products