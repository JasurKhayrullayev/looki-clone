import React from 'react'
import makeUp from '../../assets/makeup.png'
import shipping from '../../assets/shipping.png'
import buy from '../../assets/buy.png'
import heroStyle from '../Hero/Hero.module.css'

function Hero() {
  return (
    <div className={heroStyle["hero__body"]}>
        <img src={makeUp} alt="makeup" />
        <div className={heroStyle["hero__container"]}>
            <img className={heroStyle["hero__shipping"]} src={shipping} alt="shipping" />
            <img src={buy} alt="buy" />
        </div>
    </div>
  )
}

export default Hero