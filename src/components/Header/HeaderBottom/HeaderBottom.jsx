import React from 'react'
import headerBottomStyle from '../HeaderBottom/HeaderBottom.module.css'
import siteLogo from '../../../assets/sitelogo.svg'
import search from '../../../assets/search.svg'
import line from '../../../assets/line.svg'
import like from '../../../assets/like.svg'
import bag from '../../../assets/bag.svg'
import { useState } from 'react'
import Modal from '../../Modal/Modal'
import { Link } from 'react-router-dom'

function HeaderBottom() {

const [showModal, setShowModal] = useState(false);
const showedModal = () => {
    setShowModal(true);
};

const hiddenModal = () => {
    setShowModal(false);
};

  return (
   <>
    
   <div className={headerBottomStyle["header__bottom-body"]}>
        <div className={headerBottomStyle["header__bottom-container"]}>
            <a className={headerBottomStyle["header__bottom-logolink"]} href="/home">
                <img src={siteLogo} width={114} height={34} alt="site-logo" />
            </a>
            <nav className={headerBottomStyle["header__bottom-nav"]}>
                
                <a className={headerBottomStyle["header__bottom-navlink"]} href="/home">Home</a>
                <a className={headerBottomStyle["header__bottom-navlink"]} href="">Shop</a>
                <a className={headerBottomStyle["header__bottom-navlink"]} href="">Pages</a>
                <a className={headerBottomStyle["header__bottom-navlink"]} href="">Blog</a>
                <a className={headerBottomStyle["header__bottom-navlink"]} href="">contact Us</a>
            </nav>
            <div className={headerBottomStyle["header__bottom-mix"]}>
                <span className={headerBottomStyle["header__bottom-search"]}>
                    <img src={search} alt="search" />
                </span>
                <span className={headerBottomStyle["header__bottom-line"]}>
                    <img width={28} height={28} src={line} alt="line" />
                </span>
                <span className={headerBottomStyle["header__bottom-like"]}>
                    <img width={28} height={28} src={like} alt="like" />
                </span>
                <Link className={headerBottomStyle["header__bottom-bag"]}  to={"/cart"}>
                    <img width={28} height={28} src={bag} alt="bag" />
                </Link>
            </div>
            <button onClick={showedModal} className={headerBottomStyle["header__bottom-btn"]}>Admin</button>
        </div>
    </div>
    {
        showModal && <Modal hiddenModal={hiddenModal} />
    }</>
  )
}

export default HeaderBottom