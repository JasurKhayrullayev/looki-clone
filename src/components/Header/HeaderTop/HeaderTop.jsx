import React from 'react'
import headerTopStyle from '../HeaderTop/HeaderTop.module.css'
import facebookIco from '../../../assets/facebook.svg'
import twitterIco from '../../../assets/twitter.svg'
import youTubeIco from '../../../assets/youtube.svg'
import instagramIco from '../../../assets/instagram.svg'
import telIco from '../../../assets/telico.svg'


function HeaderTop() {
  return (
    <div className={headerTopStyle["header__body"]}>
      <div className={headerTopStyle["header__top-container"]}>
        <nav className={headerTopStyle["header__top-nav"]}>
            <a className={headerTopStyle["header__top-link"]} href="https://www.facebook.com/">
                <img src={facebookIco} alt="facebook" />
            </a>
            <a className={headerTopStyle["header__top-link"]} href="https://twitter.com/">
                <img src={twitterIco} alt="twitter" />
            </a>
            <a className={headerTopStyle["header__top-link"]} href="https://www.youtube.com/">
                <img src={youTubeIco} alt="youtube" />
            </a>
            <a className={headerTopStyle["header__top-link"]} href="https://www.instagram.com/">
                <img src={instagramIco} alt="instagram" />
            </a>
        </nav>
        <div className={headerTopStyle["header__tel"]}>
            <span className={headerTopStyle["header__tel-img"]}>
                <img src={telIco} width={30} height={30} alt="tel-icon" />
            </span>
            <a className={headerTopStyle["header__tel-num"]} href="tel:(+123)4567890">(+123)4567890</a>
            
        </div>
        <div className={headerTopStyle["header__option"]}>
            <a className={headerTopStyle["header__option-link"]} href="/setting">Setting</a>
            <select className={headerTopStyle["header__option-money"]} name="" id="">
                <option value="Uz">UZS</option>
                <option value="Eng">USD</option>
            </select>
            <select className={headerTopStyle["header__option-lang"]} name="" id="">
                <option value="Uz">Uzbek</option>
                <option value="Eng">English</option>
            </select>
        </div>
      </div>  
    </div>
  )
}

export default HeaderTop;