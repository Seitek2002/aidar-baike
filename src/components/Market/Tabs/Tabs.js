import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CurrencyPairsList from '../PairsList/PairsList';

function Tabs() {
   const [toggleTabs, setToggleTabs] = useState(1);
   const [searchValue, setSearchValue] = useState('')
   const {t} = useTranslation()

   return (
      <div className="container-parent">
        <span className="market-text">{t('marketText1')}</span>
        <div className='markets-header'>
            <div className="tabbar__controls">
                <button id="tab-usdt" type="button" onClick={() => setToggleTabs(1)} className={`tabbar__control ${toggleTabs == 1 && 'tabbar__control--active'}`}>USDT</button>
                <button id="tab-usdc" type="button" onClick={() => setToggleTabs(2)} className={`tabbar__control ${toggleTabs == 2 && 'tabbar__control--active'}`}>USDC</button>
                <button id="tab-btc" type="button" onClick={() => setToggleTabs(3)} className={`tabbar__control ${toggleTabs == 3 && 'tabbar__control--active'}`}>BTC</button>
                <button id="tab-eth" type="button" onClick={() => setToggleTabs(4)} className={`tabbar__control ${toggleTabs == 4 && 'tabbar__control--active'}`}>ETH</button>
            </div>
            <label className="search">
                <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className="search__field" type="text" id="marketSearch" />
                <div className="search__placeholder">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2426 13.2426C10.8995 15.5858 7.1005 15.5858 4.75736 13.2426C2.41421 10.8995 2.41421 7.1005 4.75736 4.75736C7.1005 2.41421 10.8995 2.41421 13.2426 4.75736C15.5858 7.1005 15.5858 10.8995 13.2426 13.2426ZM13.2426 13.2426L17 17" stroke="#7383A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg><span className="search__placeholder-text" >{t('marketText2')}</span>
                </div>
            </label>
         </div>
         <CurrencyPairsList searchedValue={searchValue} toggleTabs={toggleTabs} tabNumber={1} criptoVal={'usdt'}  />
         <CurrencyPairsList searchedValue={searchValue} toggleTabs={toggleTabs} tabNumber={2} criptoVal={'usdc'}  />
         <CurrencyPairsList searchedValue={searchValue} toggleTabs={toggleTabs} tabNumber={3} criptoVal={'btc'}  />
         <CurrencyPairsList searchedValue={searchValue} toggleTabs={toggleTabs} tabNumber={4} criptoVal={'eth'}  />
      </div>
   );
}

export default Tabs;
