import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import '../../scss/language.scss'


const Languages = () => {
    const [loading, setLoading] = useState(true)
    const [changableLangLoading, setChangableLangLoading] = useState(true)
    const [render, setRender] = useState(false)
    const [defaultLanguage, setDefaultLanguage] = useState({})
    const [changeAbleLanguage, setChangeAbleLanguage] = useState({})
    const [succsessMessage, setSuccsesMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [objectSuccsess, setObjectSuccsess] = useState('')
    const [ojbectError, setObjectError] = useState('')
    const [objectKey, setObjectKey] = useState('')
    const [objectValue, setObjectValue] = useState('')
    const [pannelPassword, setPannelPassword] = useState('')
    const [auth, setAuth] = useState(false)
    const [init,setInit] = useState(false)
    const [init2,setInit2] = useState(false)
    const params = useParams('/:lang')

    useEffect(() => {
        if(loading){
            axiosInstance.get('get-language/en').then(res => {
                setDefaultLanguage(res.data)
                setInit(true)
                setLoading(false)
            })
        }
    }, [loading, defaultLanguage,init])
    useEffect(() => {
        if(changableLangLoading){
            axiosInstance.get(`get-language/${params.lang}`).then(res => {
                setChangeAbleLanguage(res.data)
                setInit2(true)
                setChangableLangLoading(false)
            })
        }
    }, [changableLangLoading, changeAbleLanguage, params.lang, defaultLanguage,init2])
    useEffect(() => {
        if(render){
            setChangeAbleLanguage(prev => ({...prev,}))
            setRender(false)
        }
    }, [render])
    useEffect(() => {
        if(defaultLanguage !== null && init){
            const defLang = Object.keys(defaultLanguage)
            const changeLang = Object.keys(changeAbleLanguage)
            const changeLangValues = Object.values(changeAbleLanguage)
            const newArr = []
            const defLangValue = Object.values(defaultLanguage)
            if(defLang.length > changeLang.length){
                const midLeng = defLang.length - changeLang.length
                const start = defLang.length - midLeng
                for (let index = 0; index < changeLang.length; index++) {
                    newArr.push({[changeLang[index]]: changeLangValues[index]})
                }
                for (let index = start; index < defLang.length; index++) {
                    newArr.push({[defLang[index]]: defLangValue[index]})
                }
                for (let i = 0; i < newArr.length; i++) {
                    const keys = Object.keys(newArr[i])
                    const values = Object.values(newArr[i])
                    setChangeAbleLanguage(prev => ({
                        ...prev,
                        [keys]: values[0]
                    }))
                }
            }
        }
    }, [defaultLanguage])

    const changeValue = (event,element,thirdArg) => {
        setChangeAbleLanguage(prev => ({
            ...prev,
            [element]: event.target.value
        }))
        setRender(true)

    }

    const saveChanges = (e) => {
        axiosInstance.put(`change-language/${params.lang}`, changeAbleLanguage).then(res => {
            setSuccsesMessage(res.data)
            setAuth(true)
        }).catch(response => {
            setErrorMessage(response.message)
        })
    }
    const addObject = () => {
        axiosInstance.post(`add-object/${params.lang}`, {key: objectKey, value: objectValue}).then(res => {
            setObjectSuccsess(res.data)
        }).catch(res => {
            setObjectError(res.message)
        })
    }

    const loginToPanel = () => {
        axiosInstance.post(`/login-language/${params.lang}`, {password: pannelPassword}).then(res => {
            if(res.status == 200){
                setAuth(true)
            }
        })
    }
    


    return (
        <>
        {auth && init  && init2 ? (
                    <div className="container-parent">
                    <div className="save-wrapper">
                        <div className="save-content-flex">
                            <form>
                            <div className="save-button" onClick={saveChanges}>
                                Save
                            </div>
                            </form>
                            {succsessMessage !== '' && <div className="succsess-message"><span>{succsessMessage}</span></div>}
                            {errorMessage !== '' && <div className="error-message"><span>{errorMessage}</span></div>}
                        </div>
                        {/* <div className="add-object-flex">
                            {objectSuccsess !== '' && <div className="succsess-message"><span>{objectSuccsess}</span></div>}
                            {ojbectError !== '' && <div className="error-message"><span>{ojbectError}</span></div>}
                            <div className="add-button" onClick={addObject}>
                                Add
                            </div>
                            <input placeholder="Object key" value={objectKey} onChange={(e) => setObjectKey(e.target.value)} />
                            <input placeholder="Object value" value={objectValue} onChange={(e) => setObjectValue(e.target.value)} />
                        </div> */}
                    </div>
                    <h1 className="text-h1-languages">Main</h1>

                    <div className="languages-rows">
                        <div className="languages-columns">
                            {defaultLanguage !== null && 
                            <>
                                {Object.keys(defaultLanguage).slice(0,127).map((el, i) => (
                                    <>
                                        <div className="language-dont-changable" key={i}>
                                            <span className="languages-text">{defaultLanguage[el]}</span>
                                        </div>
                                    </>
                                ))}
                            </>                              
                            }
                        </div>
                        <div className="languages-columns">
                            {defaultLanguage !== null && 
                                <>
                                {Object.keys(changeAbleLanguage).slice(0,127).map((element, index) => (
                                    <div className="language-input-wrapper" key={index}>
                                        <input className="language-input" value={changeAbleLanguage[element]} onChange={e => changeValue(e, element)} />
                                    </div>
                                ))}
                                </>
                            }
                        </div>
                    </div>
                    <h1 className="text-h1-languages">Protection</h1>
                    <div className="languages-rows">
                        <div className="languages-columns">
                            {defaultLanguage !== null && 
                            <>
                                {Object.keys(defaultLanguage).slice(127,147).map((el, i) => (
                                    <>
                                        <div className="language-dont-changable" key={i}>
                                            <span className="languages-text">{defaultLanguage[el]}</span>
                                        </div>
                                    </>
                                ))}
                            </>                              
                            }
                        </div>
                        <div className="languages-columns">
                            {defaultLanguage !== null && 
                                <>
                                {Object.keys(changeAbleLanguage).slice(127,147).map((element, index) => (
                                    <div className="language-input-wrapper" key={index}>
                                        <input className="language-input" value={changeAbleLanguage[element]} onChange={e => changeValue(e, element)} />
                                    </div>
                                ))}
                                </>
                            }
                        </div>
                    </div>
                    <h1 className="text-h1-languages">Markets</h1>
                    <div className="languages-rows">
                        <div className="languages-columns">
                            {defaultLanguage !== null && 
                            <>
                                {Object.keys(defaultLanguage).slice(147,149).map((el, i) => (
                                    <>
                                        <div className="language-dont-changable" key={i}>
                                            <span className="languages-text">{defaultLanguage[el]}</span>
                                        </div>
                                    </>
                                ))}
                            </>                              
                            }
                        </div>
                        <div className="languages-columns">
                            {defaultLanguage !== null && 
                                <>
                                {Object.keys(changeAbleLanguage).slice(147,149).map((element, index) => (
                                    <div className="language-input-wrapper" key={index}>
                                        <input className="language-input" value={changeAbleLanguage[element]} onChange={e => changeValue(e, element)} />
                                    </div>
                                ))}
                                </>
                            }
                        </div>
                    </div>
                    <h1 className="text-h1-languages">Fees</h1>
                    <div className="languages-rows">
                        <div className="languages-columns">
                            {defaultLanguage !== null && 
                            <>
                                {Object.keys(defaultLanguage).slice(149,154).map((el, i) => (
                                    <>
                                        <div className="language-dont-changable" key={i}>
                                            <span className="languages-text">{defaultLanguage[el]}</span>
                                        </div>
                                    </>
                                ))}
                            </>                              
                            }
                        </div>
                        <div className="languages-columns">
                            {defaultLanguage !== null && 
                                <>
                                {Object.keys(changeAbleLanguage).slice(149,154).map((element, index) => (
                                    <div className="language-input-wrapper" key={index}>
                                        <input className="language-input" value={changeAbleLanguage[element]} onChange={e => changeValue(e, element)} />
                                    </div>
                                ))}
                                </>
                            }
                        </div>
                    </div>
                    <h1 className="text-h1-languages">Institutional</h1>
                    <div className="languages-rows">
                        <div className="languages-columns">
                            {defaultLanguage !== null && 
                            <>
                                {Object.keys(defaultLanguage).slice(154,189).map((el, i) => (
                                    <>
                                        <div className="language-dont-changable" key={i}>
                                            <span className="languages-text">{defaultLanguage[el]}</span>
                                        </div>
                                    </>
                                ))}
                            </>                              
                            }
                        </div>
                        <div className="languages-columns">
                            {defaultLanguage !== null && 
                                <>
                                {Object.keys(changeAbleLanguage).slice(154,189).map((element, index) => (
                                    <div className="language-input-wrapper" key={index}>
                                        <input className="language-input" value={changeAbleLanguage[element]} onChange={e => changeValue(e, element)} />
                                    </div>
                                ))}
                                </>
                            }
                        </div>
                    </div>
                    <h1 className="text-h1-languages">Rewards</h1>
                    <div className="languages-rows">
                        <div className="languages-columns">
                            {defaultLanguage !== null && 
                            <>
                                {Object.keys(defaultLanguage).slice(189,239).map((el, i) => (
                                    <>
                                        <div className="language-dont-changable" key={i}>
                                            <span className="languages-text">{defaultLanguage[el]}</span>
                                        </div>
                                    </>
                                ))}
                            </>                              
                            }
                        </div>
                        <div className="languages-columns">
                            {defaultLanguage !== null && 
                                <>
                                {Object.keys(changeAbleLanguage).slice(189,239).map((element, index) => (
                                    <div className="language-input-wrapper" key={index}>
                                        <input className="language-input" value={changeAbleLanguage[element]} onChange={e => changeValue(e, element)} />
                                    </div>
                                ))}
                                </>
                            }
                        </div>
                    </div>
                </div>
        ) 
        :
        <div style={{ display:"flex", alignItems: 'center', justifyContent: 'center',flexDirection: 'column', margin: '150px 0px' }}>
            <span>Login</span>
            <input value={pannelPassword} onChange={e => setPannelPassword(e.target.value)} />
            <div style={{marginTop: '10px', cursor: 'pointer'}} className='save-button' onClick={loginToPanel}>
                Login
            </div>
        </div>

    }
        </>
    )
}

export default Languages;
