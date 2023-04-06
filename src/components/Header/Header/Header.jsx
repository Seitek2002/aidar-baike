import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon, InlineIcon } from '@iconify/react';
import { NavLink, useParams } from 'react-router-dom';
import { capitalizeFirstLetter, rootDomain } from '../../../utils/usableFunctions';
import HeadreUserActions from '../HeaderUserActions/HeadreUserActions';
import bityx from '../../../img/logos/bityx.svg'
import {ReactComponent as LogoDark} from '../../../img/logo.svg'
import {ReactComponent as LogoLight} from '../../../img/LogoWhite.svg'
import UserOptions from '../UserOptions/UserOptions';
import api from '../../../api'
import UserEnters from '../UserEnters/UserEnters';
import accountDark from '../../../img/accountDark.svg';
import assetsSpot from '../../../img/sync2.svg'
import assetsFunding from '../../../img/assets.svg'
import "./popup.scss"

function Header({ onThemeToggle, theme }) {
   const { t } = useTranslation();
   const [auth,setAuth] = useState({})
   const domain = rootDomain(window.location.hostname)
   const { lang } = useParams(":lang")
   const Logo = theme === 'dark' ? <LogoDark /> : <LogoLight />
   const menuClassName = theme === 'dark' ? 'nav-list-links slideout-menu dark' : 'nav-list-links slideout-menu light';
   const [isOpen, setIsOpen] = useState(false);
   const [isOrderOpen, setOrderIsOpen] = useState(false);
   const [isAssetOpen, setAssetIsOpen] = useState(false);
   const [user, setUser] = useState({ email: '*****@*****.***', uid: '**********' })
   const [asset, setAsset] = useState({})
   useEffect(() => {
      if (auth) {
        const accountSettings = document.querySelector('.account-settings-name-id');
        if (accountSettings) {
          accountSettings.addEventListener('click', function () {
            // Get the text field
            var copyText = document.querySelector('.account-settings-name-id-number').textContent;
            // Copy the text inside the text field
            navigator.clipboard.writeText(copyText);
          });
        }
    
        api.get(`api/v1/user`).then((res) => setUser({ email: res.data.email, uid: res.data.uid }))
        api.get(`api/v1/assets`).then((res) => setAsset({ total: res.data.total_valuation_rated, total_rated: res.data.total_valuation, funding_rated: res.data.funding_valuation_rated, funding: res.data.funding_valuation, spot_rated: res.data.spot_valuation_rated, spot: res.data.spot_valuation }))
      }
    }, []);
    
   const [currencySign, setCurrencySign] = useState("");

   useEffect(() => {
      const currency = JSON.parse(localStorage.getItem("currency"));
      if (currency && currency.currencySign) {
        setCurrencySign(currency.currencySign);
      }
    }, []);

   const toggleMenu = () => {
     setIsOpen(!isOpen);
   };
   const toggleMenuOrder = () => {
      setOrderIsOpen(!isOrderOpen);
    };
    const toggleMenuAsset = () => {
      setAssetIsOpen(!isAssetOpen);
    };
   const rotateIcon = isOpen ? { transform: 'rotate(180deg)' } : {};
   const rotateOrderIcon = isOrderOpen ? { transform: 'rotate(180deg)' } : {};
   const rotateAssetIcon = isAssetOpen ? { transform: 'rotate(180deg)' } : {};
   let color;
  if (theme === 'dark') {
    color = '#fff';
  } else {
    color = '#000';
  }

   useEffect(() => {
      // Set Elements
      let menu = document.getElementById('slideout-menu');
      let toggleButton = document.getElementById('slideout-toggle');
      let closeButton = document.getElementById('slideout-close');
      let navListItem = document.querySelectorAll('#hidden-id');
      

      // Toggle Menu
      toggleButton.addEventListener('click', function (e) {
         e.preventDefault();
         menu.classList.toggle('is-open');
         document.body.classList.add('header-open');
      });

      // Close Menu
      closeButton.addEventListener('click', function (e) {
         e.preventDefault();
         menu.classList.remove('is-open');
         document.body.classList.remove('header-open');
      });
      for (var i=0; i <navListItem.length; i++) {
         navListItem[i].addEventListener('click', function (e) {
            setTimeout(() => {
               e.preventDefault();
               menu.classList.remove('is-open');
               document.body.classList.remove('header-open');
            },100)
         });
      }

      // header burger
      // if (window.screen.width <= 992) {
      //    // moving the language/currency below other links
      //    let navListFirst = document.getElementsByClassName('nav-list-padding')[0];
      //    let websiteSettings = document.getElementsByClassName('website-settings-select')[0];

      //    // moving the elements to new container-parents
      //    navListFirst.appendChild(websiteSettings);
      // }
   }, []);

   useEffect(() => {
      api.get('api/v1/authorized').then(r => setAuth(r.data));
   }, []);

   return (
      <>
      <a id="slideout-toggle" className="slideout-toggle" href="#">
               <span></span>
               <span></span>
               <span></span>
            </a>
            <a id="slideout-close" className="slideout-close" href="#"></a>
         <header className={`header ${theme}`}>
         <div className="container-parent">
            <nav className="nav">
               {/* <a href="/" className="logo"></a> */}
               <div className='header-logo-mobile'>
               <NavLink to={`/${lang}`}>
                     {Logo}
                  </NavLink>
               </div>
               
            </nav>
            <div className={menuClassName} id="slideout-menu">
               <NavLink to={`/${lang}`} className='header-logo-pc'>
                  {Logo}
               </NavLink>
               <ul className="nav-list">
                  <div className='nav-list-padding'>
                     {auth.authorized && 
                     <>
                     <div className='state-menu-account' onClick={toggleMenu}>
                     <img src={accountDark} alt="" />
                     <div className="account-settings-name">
                     <span className="account-settings-name-email">{user.email}</span>
                     <span className="account-settings-name-id">
                        UID: <span className="account-settings-name-id-number">{user.uid}</span>
                     </span>
                  </div>
                  <Icon 
               icon="material-symbols:arrow-drop-down-rounded" 
               style={{ color: color, fontSize: 24, ...rotateIcon }} 
               />
                     </div>
                     {isOpen && (
                     <ul className='state-menu-account-ul'>
                        <li  id='hidden-id'>
                           <a href={`/${lang}/dashboard`} className='account-settings-hidden-block'>
                           Account information
                           </a>
                        </li>
                        <li  id='hidden-id'>
                        <a to={`/${lang}/dashboard/verification`} className='account-settings-hidden-block'>
                        Verification
                           </a>
                        </li>
                        <li  id='hidden-id'>
                        <a href={`/${lang}/dashboard/security`} className='account-settings-hidden-block'>
                        Security Settings
                           </a>
                        </li>
                        <li  id='hidden-id'>
                        <a href={`/${lang}/dashboard/affiliates`} className='account-settings-hidden-block'>
                        Referrals
                           </a>
                        </li>
                     </ul>
                     )}
                     <div className='state-menu-account' onClick={toggleMenuOrder}>
                     Orders
                  <Icon 
               icon="material-symbols:arrow-drop-down-rounded" 
               style={{ color: color, fontSize: 24, ...rotateOrderIcon }} 
               />
                     </div>
                     {isOrderOpen && (
                     <ul className='state-menu-account-ul'>
                        <li  id='hidden-id'>
                           <a href={`/${lang}/dashboard/orders`} className='account-settings-hidden-block'>
                           Open Orders
                           </a>
                        </li>
                        <li  id='hidden-id' className='account-setting-logout'>
                           <a href={`/${lang}/dashboard/orders/history`} className='account-settings-hidden-block-logout'>
                              <span>Close Orders</span>
                           </a>
                        </li>
                     </ul>
                     )}
                     <div className='state-menu-account' onClick={toggleMenuAsset}>
                     Assets
                  <Icon 
               icon="material-symbols:arrow-drop-down-rounded" 
               style={{ color: color, fontSize: 24, ...rotateAssetIcon }} 
               />
                     </div>
                     {isAssetOpen && (
                     <ul className='state-menu-account-ul-asset'>
                        <li className='state-menu-account-ul-asset-li' id='hidden-id'>
                     <div class="total-assets-main">
                     <div class="total-value total-value--size-medium">
                     <span class="total-value__title">Total Valuation</span>
                     <span class="total-value__value-main"><span class="total-valuation">{asset.total_rated}</span> BTC</span>
                     <span class="total-value__preferred">≈ {currencySign}<span class="total-rated-valuation">{asset.total}</span></span>
                     </div>
                     </div>
                     <div class="dropdown__assets">
                     <div class="assets-main">
                     <a href={`/${lang}/dashboard/wallets`} className="assets__asset-main">
                        <img src={assetsFunding} alt='' />
                        <div className='assets-column'>
                     <span class="assets__title-main">Funding Account</span>
                     <span class="assets__total-main">≈ <span class="funding-valuation">{asset.funding}</span> BTC / {currencySign}<span class="funding-rated-valuation">{asset.funding_rated}</span></span>
                     </div>
                     </a>
                     <a href={`/${lang}/dashboard/wallets/spot`} className="assets__asset-main">
                     <img src={assetsSpot} alt='' />
                     <div className='assets-column'>
                     <span class="assets__title-main">Spot Account</span>
                     <span class="assets__total-main">≈ <span class="spot-valuation">{asset.spot}</span> BTC / {currencySign}<span class="spot-rated-valuation">{asset.spot_rated}</span></span>
                     </div>
                     </a>
                     </div>
                     </div>
                     </li>
                     </ul>
                     )}
                     </>
                     }
                     <li className="nav-list-item" id='hidden-id'>
                        <a href={`/${lang}/exchange/BTC-USDT`}>{t('exchangeText')}</a>
                     </li>
                     <li className="nav-list-item" id='hidden-id'>
                        <NavLink to={`/${lang}/markets`}>{t('market')}</NavLink>
                     </li>
                     <li className="nav-list-item" id='hidden-id'>
                        <a href="https://bityx.zendesk.com/hc/">{t('supportText')}</a>
                     </li>
                     <li className="nav-list-item" id='hidden-id'>
                        <a href={`/${lang}/buycoin`}>{t('buyCrypto')}</a>
                     </li>
                     <li className="nav-list-item" id='hidden-id'>
                        <NavLink to={`/${lang}/rewards`}>{t('rewardsCenter')}</NavLink>
                     </li>
                  </div>
                  <div className='auth-list-padding'>
                     {auth.authorized ? (<>
                     <li id='sign-in-button-header' className="nav-list-item">
                        <a href={`/${lang}/exchange/BTC-USDT`}>Trade</a>
                     </li>
                     <li id='sign-up-button-header' className="nav-list-item">
                        <a href={`/${lang}/dashboard`} className="btn-primary-blue">
                           Personal Area
                        </a>
                     </li>
                     </> ): ( <>
                     <li id='sign-in-button-header' className="nav-list-item">
                        <NavLink to={`/${lang}/signin`}>Sign In</NavLink>
                     </li>
                     <li id='sign-up-button-header' className="nav-list-item">
                        <NavLink to={`/${lang}/signup`} className="btn-primary-blue">
                           Get Started
                        </NavLink>
                     </li>
                     </>)}
                  </div>

                  <div className='display-control-options'>
                  <UserOptions auth={auth.authorized} theme={theme}/>
                  
                  </div>
               </ul>
               
               <HeadreUserActions theme={theme} auth={auth.authorized} onThemeToggle={onThemeToggle} />
               
            </div>
            
         </div>
      </header>
      </>
   );
}

export default Header;
