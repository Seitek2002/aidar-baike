import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {ReactComponent as ArrowRight} from '../../img/rewards/arrow_right.svg'
import DownArrow from './DownArrow/DownArrow'
import '../../css/main.css'


const Rewards = () => {
    const {t} = useTranslation()
    const [states,setStates] = useState({
        state1: false,
        state2: false,
        state3: false,
        state4: false,
        state5: false,
    })
    const showElement = (e) => {
        setStates(prev => ({
            ...prev,
            [e.target.id]: !states[e.target.id]
        }))
        console.log(e.target.id)
    }
    return (
        <div className='main_rewards_content'>
            <main role="main" className="content">    <div data-v-2f468cc0="" className="welfare-rewards-wrap">
                <div data-v-df70ccce="" data-v-2f468cc0="" className="welfare-v2-banner-box">
                    <div data-v-df70ccce="" className="welfare-v2-banner-wrap">
                        <div data-v-df70ccce="" className="welfare-v2-banner-text-box">
                            <div data-v-df70ccce="" className="welfare-v2-banner-h1">{t('rewardsText1')} <span className="rewardMount" style={{ fontSize: '50px', fontWeight: '600' }}>$4163 </span> {t('rewardsText2')}
                            </div>
                            <div data-v-df70ccce="" className="welfare-v2-banner-h2">
                            {t('rewardsText3')}: 0/5
                            </div>
                            <div data-v-df70ccce="" className="welfare-v2-banner-btns">
                                <button data-v-df70ccce="" className="welfare-v2-button small">
                                {t('rewardsText4')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-2f468cc0="" className="rewards-trans-box show">
                    <div data-v-2f468cc0="" className="welfare-v2-rewards-box" dtolist="[object Object],[object Object],[object Object],[object Object],[object Object]" spotlist="[object Object],[object Object]" contractvolume="100,000" depositday="5" depositmaxreward="4,000" followordervolume="100,000" totalrewardamount="4163">
                        <div className="welfare-v2-rewards-title"><span>{t('rewardsText5')}</span></div>
                        <div className="welfare-v2-rewards-list">
                            <div data-v-73db8cb4="" className="welfare-v2-rewards-item hide show" dtolist="[object Object],[object Object],[object Object],[object Object],[object Object]" spotlist="[object Object],[object Object]" contractvolume="100,000" depositday="5" depositmaxreward="4,000" followordervolume="100,000" totalrewardamount="4163">
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-num gold"><span data-v-73db8cb4="">$3</span> <em data-v-73db8cb4="">
                                {t('couponText')}
                                </em></div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-title">{t('rewardsText6')}</div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-desc"><span data-v-73db8cb4="">{t('rewardsText7')}</span>
                                </div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-btn">
                                    <button data-v-73db8cb4="">
                                        {t('rewardsText8')}
                                        <ArrowRight /></button>
                                </div>
                            </div>
                            <div data-v-73db8cb4="" className="welfare-v2-rewards-item hide show" contractvolume="100,000" depositday="5" depositmaxreward="4,000" dtolist="[object Object],[object Object],[object Object],[object Object],[object Object]" followordervolume="100,000" spotlist="[object Object],[object Object]" totalrewardamount="4163">
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-num gold"><span data-v-73db8cb4="">$50</span> <em data-v-73db8cb4="">
                                    {t('couponText')}
                                </em></div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-title">{t('rewardsText9')}</div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-desc"><span data-v-73db8cb4="">{t('rewardsText10')} </span>
                                </div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-btn">
                                    <button data-v-73db8cb4="">
                                    {t('rewardsText11')}
                                    <ArrowRight /></button>
                                </div>
                            </div>
                            <div data-v-73db8cb4="" className="welfare-v2-rewards-item hide show" contractvolume="100,000" depositday="5" depositmaxreward="4,000" dtolist="[object Object],[object Object],[object Object],[object Object],[object Object]" followordervolume="100,000" spotlist="[object Object],[object Object]" totalrewardamount="4163">
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-num gold"><span data-v-73db8cb4="">$4,000</span> <em data-v-73db8cb4="">
                                {t('rewardsText12')}
                                </em></div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-title">{t('rewardsText13')}</div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-desc"><span data-v-73db8cb4="">{t('rewardsText14')}</span>
                                </div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-btn">
                                    <button data-v-73db8cb4="">
                                    {t('rewardsText15')}
                                    <ArrowRight /></button>
                                </div>
                            </div>
                            <div data-v-73db8cb4="" className="welfare-v2-rewards-item hide show" contractvolume="100,000" depositday="5" depositmaxreward="4,000" dtolist="[object Object],[object Object],[object Object],[object Object],[object Object]" followordervolume="100,000" spotlist="[object Object],[object Object]" totalrewardamount="4163">
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-num gold"><span data-v-73db8cb4="">$60</span> <em data-v-73db8cb4="">
                                    {t('couponText')}
                                </em></div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-title">{t('rewardsText16')}</div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-desc"><span data-v-73db8cb4="">{t('rewardsText17')}<br /> {t('rewardsText18')}&nbsp;</span>
                                </div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-btn">
                                    <button data-v-73db8cb4="">
                                        {t('rewardsText19')}
                                        <ArrowRight /></button>
                                </div>
                            </div>
                            <div data-v-73db8cb4="" className="welfare-v2-rewards-item hide show" contractvolume="100,000" depositday="5" depositmaxreward="4,000" dtolist="[object Object],[object Object],[object Object],[object Object],[object Object]" followordervolume="100,000" spotlist="[object Object],[object Object]" totalrewardamount="4163">
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-num gold"><span data-v-73db8cb4="">$500</span> <em data-v-73db8cb4="">
                                {t('couponText')}
                                </em></div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-title">{t('rewardsText20')}</div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-desc"><span data-v-73db8cb4="">{t('rewardsText21')}</span>
                                </div>
                                <div data-v-73db8cb4="" className="welfare-v2-rewards-item-btn">
                                    <button data-v-73db8cb4="">
                                    {t('rewardsText22')}
                                    <ArrowRight /></button>
                                </div>
                            </div>
                        </div>            </div>
                </div>
                <div data-v-781032eb="" data-v-2f468cc0="" className="welfare-v2-rule-box">
                    <div data-v-1168433b="" data-v-781032eb="" className="welfare-v2-title">{t('rewardsText23')}</div>
                    <div data-v-781032eb="" className="welfare-v2-rule-list">
                        <div data-v-781032eb="">{t('rewardsText24')}
                        </div>
                        <div data-v-781032eb="">{t('rewardsText25')}
                        </div>
                        <div data-v-781032eb=""> {t('rewardsText26')}
                        </div>
                        <div data-v-781032eb="">{t('rewardsText27')}</div>
                        <div data-v-781032eb="">{t('rewardsText28')}</div>
                        <div data-v-781032eb="">(2) 50,000&lt; {t('rewardsText29')} ≤100,000 USDT: {t('rewardsText30')}
                        </div>
                        <div data-v-781032eb="">(3) 100,000&lt; {t('rewardsText29')} ≤150,000 USDT: {t('rewardsText31')}
                        </div>
                        <div data-v-781032eb="">(4) 150,000&lt; {t('rewardsText29')} ≤200,000 USDT: {t('rewardsText32')}
                        </div>
                        <div data-v-781032eb="">{t('rewardsText33')}
                        </div>
                        <div data-v-781032eb="">{t('rewardsText34')}
                        </div>
                        <div data-v-781032eb="">{t('rewardsText35')}
                        </div>
                    </div>
                </div>
                <div data-v-e2bf9204="" data-v-2f468cc0="" className="welfare-v2-qa-box">
                    <div data-v-1168433b="" data-v-e2bf9204="" className="welfare-v2-title">{t('rewardsText36')}</div>
                    <div data-v-e2bf9204="" className="welfare-v2-qa-list">
                        <div data-v-e2bf9204="" className="dt" id="state1"   onClick={(e) => showElement(e)}><span id="state1" data-v-e2bf9204="">{t('rewardsText37')}</span><DownArrow /></div>
                        <div data-v-e2bf9204="" className={`dd-box ${states.state1 && 'show'}`}>
                            <div data-v-e2bf9204="" className="dd">{t('rewardsText38')}
                            </div>
                        </div>
                        <div data-v-e2bf9204="" className="dt" id="state2"  onClick={(e) => showElement(e)}><span data-v-e2bf9204="" id="state2" >{t('rewardsText39')}</span> <DownArrow /></div>
                        <div data-v-e2bf9204="" className={`dd-box ${states.state2 && 'show'}`}>
                            <div data-v-e2bf9204="" className="dd">{t('rewardsText40')}
                            </div>
                            <div data-v-e2bf9204="" className="dd">{t('rewardsText41')}
                            </div>
                            <div data-v-e2bf9204="" className="dd">{t('rewardsText42')}
                            </div>
                            <div data-v-e2bf9204="" className="dd">{t('rewardsText43')}
                            </div>
                            <div data-v-e2bf9204="" className="dd">{t('rewardsText44')}
                            </div>
                        </div>
                        <div data-v-e2bf9204="" className="dt" id="state3"  onClick={(e) => showElement(e)}><span id='state3' data-v-e2bf9204="">{t('rewardsText45')}</span> <DownArrow /></div>
                        <div data-v-e2bf9204="" className={`dd-box ${states.state3 && 'show'}`}>
                            <div data-v-e2bf9204="" className="dd">{t('rewardsText46')}
                            </div>
                        </div>
                        <div data-v-e2bf9204="" className="dt" id="state4"  onClick={(e) => showElement(e)}><span id='state4' data-v-e2bf9204="">{t('rewardsText47')}	</span>
                        <DownArrow /></div>
                        <div data-v-e2bf9204="" className={`dd-box ${states.state4 && 'show'}`}>
                            <div data-v-e2bf9204="" className="dd">{t('rewardsText48')}
                            </div>
                        </div>
                        <div data-v-e2bf9204="" id="state5"  className="dt" onClick={(e) => showElement(e)}><span data-v-e2bf9204="" id='state5'>{t('rewardsText49')}</span>
                        <DownArrow /></div>
                        <div data-v-e2bf9204="" className={`dd-box ${states.state5 && 'show'}`}>
                            <div data-v-e2bf9204="" className="dd">{t('rewardsText50')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </main>
        </div>
    )
}

export default Rewards