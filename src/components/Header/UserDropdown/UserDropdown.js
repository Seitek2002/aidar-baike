import React, { useEffect, useState } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import accountDark from '../../../img/accountDark.svg';
import accountLogout from '../../../img/logout.svg';
import assetsSpot from '../../../img/sync2.svg'
import assetsFunding from '../../../img/assets.svg'

import api from '../../../api';
import { NavLink, useParams } from 'react-router-dom';

function UserDropdown({ auth, theme }) {
   const { lang } = useParams(":lang")
   const [display, setDisplay] = useState(true)
   const [user, setUser] = useState({ email: '*****@*****.***', uid: '**********' })
   const [asset, setAsset] = useState({})
   useEffect(() => {
      if (auth) {
         document.querySelector('.account-settings-name-id').addEventListener('click', function () {
            // Get the text field
            var copyText = document.querySelector('.account-settings-name-id-number').textContent;
            // Copy the text inside the text field
            navigator.clipboard.writeText(copyText);
         });

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
   
   let color;
  if (theme === 'dark') {
    color = '#fff';
  } else {
    color = '#000';
  }

   return (
      <>
         {auth &&
            <>
               <div className='profile-parent-header-mobile'>
                  <span>Profile</span>
               </div>
               <li className="nav-list-item-btn">
               <a href={`/${lang}/exchange/BTC-USDT`} className='btn-primary-blue'>
                      Trade
                    </a>
                    </li>
                    <li className="nav-list-item-btn">
               <a href={`/${lang}/dashboard`} className='btn-primary-asset'>
               Personal Area
                    </a>
                    </li>
               <li className="nav-list-item account-settings-select">
                  <a href="#" className='account-svg'>
                     Orders
                  <Icon 
                     icon="material-symbols:arrow-drop-down-rounded" 
                     style={{ color: color, fontSize: 24 }} 
                  />
                  </a>

                  <div className="account-settings" style={{width: "166px"}}>
                     <ul className="account-settings-list">
                        <li className="account-settings-dropdown">
                           <div className='account-info' onClick={() => setDisplay(prev => !prev)}>
                              <span>Account information</span>
                           </div>
                        </li>
                        {display &&
                           <>
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
                           </>
                        }
                     </ul>
                  </div>
               </li>
               <li className="nav-list-item account-settings-select">
                  <a href="#" className='account-svg'>
                     Assets
                  <Icon 
                     icon="material-symbols:arrow-drop-down-rounded" 
                     style={{ color: color, fontSize: 24 }} 
                  />
                  </a>

                  <div className="account-settings" style={{width: "200px"}} >
                     <ul className="account-settings-list-assets">
                        <li className="account-settings-dropdown">
                           <div className='account-info' onClick={() => setDisplay(prev => !prev)}>
                              <span>Account information</span>
                           </div>
                        </li>
                        {display &&
                           <>
                           <li  id='hidden-id'>
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
                           </>
                        }
                     </ul>
                  </div>
               </li>
               <li className="nav-list-item account-settings-select">
                  <a href="#" className='account-svg'>
                     <img src={accountDark} alt="" />
                  </a>

                  <div className="account-settings">
                     <div className="account-settings-id">
                        <div className="account-settings-name">
                           <span className="account-settings-name-email">{user.email}</span>
                           <span className="account-settings-name-id">
                              UID: <span className="account-settings-name-id-number">{user.uid}</span>
                           </span>
                        </div>
                     </div>
                     <ul className="account-settings-list">
                        <li className="account-settings-dropdown">
                           <div className='account-info' onClick={() => setDisplay(prev => !prev)}>
                              <span>Account information</span>
                           </div>
                        </li>
                        {display &&
                           <>
                           <li  id='hidden-id'>
                                 <a href={`/${lang}/dashboard`} className='account-settings-hidden-block'>
                                 Account information
                                 </a>
                              </li>
                              <li  id='hidden-id'>
                              <a href={`/${lang}/dashboard`} className='account-settings-hidden-block'>
                              Verification
                                 </a>
                              </li>
                              <li  id='hidden-id'>
                              <a href={`/${lang}/dashboard`} className='account-settings-hidden-block'>
                              Security Settings
                                 </a>
                              </li>
                              <li  id='hidden-id'>
                              <a href={`/${lang}/dashboard`} className='account-settings-hidden-block'>
                              Referrals
                                 </a>
                              </li>
                              <li  id='hidden-id' className='account-setting-logout'>
                                 <a href={`/${lang}/logout`} className='account-settings-hidden-block-logout'>
                                    <span>Logout</span>
                                    <img src={accountLogout} alt="" /> 
                                 </a>
                              </li>
                           </>
                        }
                     </ul>
                  </div>
               </li>
            </>
         }
      </>
   );
}

export default UserDropdown;
