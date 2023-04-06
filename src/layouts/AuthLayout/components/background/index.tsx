import React, { FC } from 'react'
import { IconDecorationNetBig, IconDecorationNetSmall } from '../../../../icons'
import cubic1 from '../../../../img/home/cubic1.png'
import cubic2 from '../../../../img/home/cubic2.png'
import cubic3 from '../../../../img/home/cubic3.png'
import * as s from './styled'

import Lottie from 'react-lottie-player'
import lottieJson from '../../../../lot.json'


const Background: FC = () => {
  function lott() {
    return (
      <div>
        <Lottie
          loop
          play
          animationData={lottieJson}
        />
      </div>
    )
  }
  return (
    <s.Container>
      <div className='overflow_hidden'>
        <div className="auth-lottie-anim">{lott()}</div>
      </div>
    </s.Container>
  )
}

export default Background
