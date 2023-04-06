import { useState } from "react"
import img1 from '../../static/img/BTC.png'
import img2 from '../../static/img/ETH.png'
import img3 from '../../static/img/XRP.png'
import img4 from '../../static/img/BCH.png'
import img5 from '../../static/img/LTC.png'
import img6 from '../../static/img/USDT.png'
import img7 from '../../static/img/ONT.png'
import img8 from '../../static/img/TRX.png'
import img9 from '../../static/img/NEO.png'
import img10 from '../../static/img/LINK.png'
import img11 from '../../static/img/BAT.png'
import img12 from '../../static/img/HOT.png'
import img13 from '../../static/img/DOGE.png'
import img14 from '../../static/img/ATOM.png'
import img15 from '../../static/img/FTM.png'
import img16 from '../../static/img/MATIC.png'
import img17 from '../../static/img/SHIB.png'
import img18 from '../../static/img/ROSE.png'
import img19 from '../../static/img/CAKE.png'
import img20 from '../../static/img/YFI.png'
import img21 from '../../static/img/SUSHI.png'
import img22 from '../../static/img/DYDX.png'
import img23 from '../../static/img/SXP.png'
import img24 from '../../static/img/1INCH.png'
import img25 from '../../static/img/COMP.png'
import img26 from '../../static/img/QNT.png'
import img27 from '../../static/img/ENS.png'
import img28 from '../../static/img/ZRX.png'
import img29 from '../../static/img/UNI.png'
import img30 from '../../static/img/AAVE.png'
import img31 from '../../static/img/MKR.png'
import img32 from '../../static/img/USDC.png'
import { useTranslation } from "react-i18next"


const Fees = () => {
    const [active, setActive] = useState(false)
    const {t} = useTranslation()
    return (
        <div className="page">
            <main role="main" className="content">
                <div className="main-bitget global-theme">
                    <div className="global-theme white">

                        <div data-v-564f9628="">

                            <div data-v-564f9628="" tabIndex="-1" className="el-drawer__wrapper white" style={{display: "none"}}>
                                <div role="document" tabIndex="-1" className="el-drawer__container">
                                    <div aria-modal="true" aria-labelledby="el-drawer__title" aria-label="" role="dialog"
                                        tabIndex="-1" className="el-drawer rtl flatheader-drawer__container" style={{width: "80%"}}>
                                        <header id="el-drawer__title" className="el-drawer__header"><span role="heading"
                                            title=""></span>
                                            <button aria-label="close drawer" type="button" className="el-drawer__close-btn"><i
                                                className="el-dialog__close el-icon el-icon-close"></i></button>
                                        </header>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-d0e35e04="" tabIndex="-1" className="el-drawer__wrapper white" style={{display: "none"}}>
                            <div role="document" tabIndex="-1" className="el-drawer__container">
                                <div aria-modal="true" aria-labelledby="el-drawer__title" aria-label="" role="dialog"
                                    tabIndex="-1" className="el-drawer rtl flatheader-drawer__container" style={{width: "80%"}}>
                                    <header id="el-drawer__title" className="el-drawer__header"><span role="heading"
                                        title=""></span>
                                        <button aria-label="close drawer" type="button" className="el-drawer__close-btn"><i
                                            className="el-dialog__close el-icon el-icon-close"></i></button>
                                    </header>

                                </div>
                            </div>
                        </div>
                        <div id="all-loading" className="loader-total1" data-v-1abf0f60="" style={{display: "none"}}>
                            <div className="wrap" data-v-1abf0f60=""><img src="./Fees _ Spot Trading Fees _ Bityx_files/19ee180.svg"
                                alt="" style={{display: "block",width: "50px",height: "50px"}} data-v-1abf0f60="" /></div>
                        </div>

                        <div tabIndex="-1" className="el-drawer__wrapper" center="" style={{display: "none"}}>
                            <div role="document" tabIndex="-1" className="el-drawer__container">
                                <div aria-modal="true" aria-labelledby="el-drawer__title" aria-label="Preference Settings"
                                    role="dialog" tabIndex="-1" className="el-drawer rtl alert-config-drawer">
                                    <header id="el-drawer__title" className="el-drawer__header"><span role="heading"
                                        title="Preference Settings">Preference Settings</span>
                                        <button aria-label="close Preference Settings" type="button"
                                            className="el-drawer__close-btn"><i
                                                className="el-dialog__close el-icon el-icon-close"></i></button>
                                    </header>

                                </div>
                            </div>
                        </div>
                        <div></div>

                    </div>
                    <div className="main-box lay-box clearfix">
                        <div data-v-49a82000="" className="rate">
                            <div data-v-49a82000="" className="rate__top">
                                <div data-v-49a82000="" className="rate__top__left">
                                    <div data-v-49a82000="" className="rate__top__left__title">{t('feeText1')}</div>
                                    <div data-v-49a82000="" className="rate__top__left__desc">
                                        {t('feeText2')}
                                        <span data-v-49a82000=""><a className="link"
                                            href="https://bityx.com/institutional">{t('feeText3')}</a></span>
                                    </div>
                                </div>
                            </div>
                            <div data-v-49a82000="" className="rate__bottom">
                                <div data-v-49a82000="" className="rate__bottom__tabs el-tabs el-tabs--top">
                                    <div className="el-tabs__header is-top">
                                        <div className="el-tabs__nav-wrap is-scrollable is-top"><span
                                            className="el-tabs__nav-prev is-disabled"><i
                                                className="el-icon-arrow-left"></i></span><span className="el-tabs__nav-next"><i
                                                    className="el-icon-arrow-right"></i></span>
                                            <div className="el-tabs__nav-scroll">
                                                <div role="tablist" className="el-tabs__nav is-top"
                                                    style={{transform: "translateX(0px)"}}>
                                                    <div id="tab-0" aria-controls="pane-0" role="tab" tabIndex="0" onClick={() => setActive(false)}
                                                        className={`el-tabs__item is-top ${!active && 'is-active'}`} aria-selected="true">{t('feeText4')}
                                                    </div>
                                                    <div onClick={() => setActive(true)} id="tab-2" aria-controls="pane-2" role="tab" tabIndex="-1"
                                                        className={`el-tabs__item is-top ${active && 'is-active'}`}>
                                                        {t('feeText5')}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{display: `${!active ? 'block' : 'none'}`}} data-v-11f64ed0="" data-v-49a82000="" className="rate-spot-table content-tab" id="content-tab-0">

                                <div data-v-11f64ed0=""
                                    className="el-table rate-spot-table__table el-table--fit el-table--scrollable-x">
                                    <div className="hidden-columns">
                                        <div data-v-11f64ed0=""></div>
                                        <div data-v-11f64ed0=""></div>
                                        <div data-v-11f64ed0=""></div>
                                        <div data-v-11f64ed0=""></div>
                                        <div data-v-11f64ed0=""></div>
                                    </div>
                                    <div className="el-table__header-wrapper">
                                        <table cellSpacing="0" cellPadding="0" border="0" className="el-table__header">
                                            <colgroup>
                                                <col name="el-table_12_column_45" width="120" />
                                                <col name="el-table_12_column_46" width="120" />
                                                <col name="el-table_12_column_47" width="120" />
                                                <col name="el-table_12_column_48" width="200" />
                                                <col name="el-table_12_column_49" width="200" />
                                            </colgroup>
                                            <thead className="">
                                                <tr className="rate-spot-table__table__header">
                                                    <th colSpan="1" rowSpan="1"
                                                        className="el-table_12_column_45  is-center   is-leaf">
                                                        <div className="cell">Trading Pair</div>
                                                    </th>
                                                    <th colSpan="1" rowSpan="1"
                                                        className="el-table_12_column_46  is-center   is-leaf">
                                                        <div className="cell">Maker</div>
                                                    </th>
                                                    <th colSpan="1" rowSpan="1"
                                                        className="el-table_12_column_47  is-center   is-leaf">
                                                        <div className="cell">Taker</div>
                                                    </th>
                                                    <th colSpan="1" rowSpan="1"
                                                        className="el-table_12_column_48  is-center   is-leaf">
                                                        <div className="cell">
                                                            Maker
                                                            <span data-v-11f64ed0=""
                                                                className="rate-spot-table__table__column__text">
                                                                (Institutional)
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th colSpan="1" rowSpan="1"
                                                        className="el-table_12_column_49  is-center   is-leaf">
                                                        <div className="cell">
                                                            Taker
                                                            <span data-v-11f64ed0=""
                                                                className="rate-spot-table__table__column__text">
                                                                (Institutional)
                                                            </span>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                    <div className="el-table__body-wrapper is-scrolling-left">
                                        <table cellSpacing="0" cellPadding="0" border="0" className="el-table__body">
                                            <colgroup>
                                                <col name="el-table_12_column_45" width="120" />
                                                <col name="el-table_12_column_46" width="120" />
                                                <col name="el-table_12_column_47" width="120" />
                                                <col name="el-table_12_column_48" width="200" />
                                                <col name="el-table_12_column_49" width="200" />
                                            </colgroup>
                                            <tbody>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            BTC/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ETH/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            LTC/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            TRX/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            XRP/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ETH/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            LTC/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            TRX/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            XRP/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            LTC/ETH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            TRX/ETH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            XRP/ETH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            LINK/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            HOT/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            BAT/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            LINK/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            BAT/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            LINK/ETH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            HOT/ETH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            BAT/ETH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ONT/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ONT/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ONT/ETH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            BCH/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            BCH/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            NEO/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            NEO/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            NEO/ETH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            DOGE/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            DOGE/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ATOM/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ATOM/ETH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ATOM/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            FTM/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            FTM/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            MATIC/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            MATIC/ETH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            MATIC/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            SHIB/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ROSE/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ROSE/ETH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ROSE/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            CAKE/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            CAKE/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            YFI/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            YFI/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            SUSHI/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            SUSHI/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            DYDX/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            DYDX/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            SXP/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            SXP/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            1INCH/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            1INCH/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            COMP/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            COMP/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            QNT/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            QNT/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ENS/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ENS/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ZRX/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ZRX/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            UNI/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            UNI/ETH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            UNI/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            AAVE/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            AAVE/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            MKR/BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            MKR/USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            BTC/USDC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            ETH/USDC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            LTC/USDC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            TRX/USDC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            XRP/USDC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            LINK/USDC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_45 is-center">
                                                        <div className="cell">
                                                            BCH/USDC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_46 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_47 is-center ">
                                                        <div className="cell">0.100%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_48 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_12_column_49 is-center ">
                                                        <div className="cell">0.08%</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                </div>


                                <div className="el-table__column-resize-proxy" style={{display: "none"}}></div>
                            </div>
                            <div data-v-11f64ed0="" data-v-49a82000="" className="rate-spot-table content-tab" id="content-tab-2"
                                style={{display: `${active ? 'block' : 'none'}`}}>

                                <div data-v-4298876b="" data-v-49a82000=""
                                    className="el-table rate-mention-table el-table--fit el-table--enable-row-hover">
                                    <div className="hidden-columns">
                                        <div data-v-4298876b=""></div>
                                        <div data-v-4298876b=""></div>
                                        <div data-v-4298876b=""></div>
                                        <div data-v-4298876b=""></div>
                                    </div>
                                    <div className="el-table__header-wrapper">
                                        <table cellSpacing="0" cellPadding="0" border="0" className="el-table__header">

                                            <thead className="">
                                                <tr className="rate-mention-table__header">
                                                    <th colSpan="1" rowSpan="1" className="el-table_3_column_9     is-leaf">
                                                        <div className="cell">Coin</div>
                                                    </th>
                                                    <th colSpan="1" rowSpan="1" className="el-table_3_column_10     is-leaf">
                                                        <div className="cell">Network</div>
                                                    </th>
                                                    <th colSpan="1" rowSpan="1" className="el-table_3_column_11     is-leaf">
                                                        <div className="cell">Withdrawal fee</div>
                                                    </th>
                                                    <th colSpan="1" rowSpan="1" className="el-table_3_column_12     is-leaf">
                                                        <div className="cell">Min. withdrawal</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                    <div className="el-table__body-wrapper is-scrolling-none">
                                        <table cellSpacing="0" cellPadding="0" border="0" className="el-table__body">

                                            <tbody>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img1} alt="BTC"
                                                            className="rate-mention-table__column__img" />
                                                            BTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BTC </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0002 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0005 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img2} alt="ETH"
                                                            className="rate-mention-table__column__img" />
                                                            ETH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.007 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img3} alt="XRP"
                                                            className="rate-mention-table__column__img" />
                                                            XRP </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    XRP </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.5 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    16 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img4} alt="BCH"
                                                            className="rate-mention-table__column__img" />
                                                            BCH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BCH </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.08 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img5} alt="LTC"
                                                            className="rate-mention-table__column__img" />
                                                            LTC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    LTC </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.1 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img6}
                                                            alt="USDT" className="rate-mention-table__column__img" />
                                                            USDT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    MATIC </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    FTM </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    10 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    10 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    10 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    10 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img7} alt="ONT"
                                                            className="rate-mention-table__column__img" />
                                                            ONT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ONT </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    53 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img8} alt="TRX"
                                                            className="rate-mention-table__column__img" />
                                                            TRX </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    TRX </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    160 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img9} alt="NEO"
                                                            className="rate-mention-table__column__img" />
                                                            NEO </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    NEO </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.4 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img10}
                                                            alt="LINK" className="rate-mention-table__column__img" />
                                                            LINK </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    MATIC </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    FTM </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img11} alt="BAT"
                                                            className="rate-mention-table__column__img" />
                                                            BAT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    43 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    43 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img12} alt="HOT"
                                                            className="rate-mention-table__column__img" />
                                                            HOT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    5728 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img13}
                                                            alt="DOGE" className="rate-mention-table__column__img" />
                                                            DOGE </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    DOGE </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    106 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img14}
                                                            alt="ATOM" className="rate-mention-table__column__img" />
                                                            ATOM </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    MATIC </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.9 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.9 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.9 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img15} alt="FTM"
                                                            className="rate-mention-table__column__img" />
                                                            FTM </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    FTM </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    41 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    41 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    41 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img16}
                                                            alt="MATIC" className="rate-mention-table__column__img" />
                                                            MATIC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    MATIC </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    11 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    11 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    11 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img17}
                                                            alt="SHIB" className="rate-mention-table__column__img" />
                                                            SHIB </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1062837 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img18}
                                                            alt="ROSE" className="rate-mention-table__column__img" />
                                                            ROSE </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    218 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    218 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img19}
                                                            alt="CAKE" className="rate-mention-table__column__img" />
                                                            CAKE </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    2 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img20} alt="YFI"
                                                            className="rate-mention-table__column__img" />
                                                            YFI </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    FTM </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img21}
                                                            alt="SUSHI" className="rate-mention-table__column__img" />
                                                            SUSHI </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    MATIC </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    FTM </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    8 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    8 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    8 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    8 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img22}
                                                            alt="DYDX" className="rate-mention-table__column__img" />
                                                            DYDX </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    6 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img23} alt="SXP"
                                                            className="rate-mention-table__column__img" />
                                                            SXP </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    40 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    40 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img24}
                                                            alt="1INCH" className="rate-mention-table__column__img" />
                                                            1INCH </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    22 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    22 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img25}
                                                            alt="COMP" className="rate-mention-table__column__img" />
                                                            COMP </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.2 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.2 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img26} alt="QNT"
                                                            className="rate-mention-table__column__img" />
                                                            QNT </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.07 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img27} alt="ENS"
                                                            className="rate-mention-table__column__img" />
                                                            ENS </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.7 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img28} alt="ZRX"
                                                            className="rate-mention-table__column__img" />
                                                            ZRX </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    50 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img29} alt="UNI"
                                                            className="rate-mention-table__column__img" />
                                                            UNI </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    MATIC </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    2 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    2 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    2 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img30}
                                                            alt="AAVE" className="rate-mention-table__column__img" />
                                                            AAVE </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    MATIC </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    FTM </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.1 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.1 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.1 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.1 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img31} alt="MKR"
                                                            className="rate-mention-table__column__img" />
                                                            MKR </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    BSC </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.0001 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.01 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    0.01 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="el-table__row">
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_9  ">
                                                        <div className="cell"><img data-v-4298876b=""
                                                            src={img32}
                                                            alt="USDC" className="rate-mention-table__column__img" />
                                                            USDC </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_10  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    ETH </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    MATIC </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    FTM </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_11  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    1 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td rowSpan="1" colSpan="1" className="el-table_3_column_12  ">
                                                        <div className="cell">
                                                            <div data-v-6e45a648="" data-v-4298876b=""
                                                                className="rate-mention-table-list">
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    10 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    10 </div>
                                                                <div data-v-6e45a648="" className="rate-mention-table-list__item">
                                                                    10 </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>


                                    </div>




                                    <div className="el-table__column-resize-proxy" style={{display: "none"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}


export default Fees