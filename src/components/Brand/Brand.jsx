import React from 'react'
import brand from '../../assets/brand.png'
import brandStyle from '../Brand/Brand.module.css'

function Brand() {
  return (
    <div className={brandStyle["brand__container"]}>
        <img width={1520} src={brand} alt="" />
    </div>
  )
}

export default Brand