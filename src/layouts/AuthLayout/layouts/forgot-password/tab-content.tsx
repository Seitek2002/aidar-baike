import React, { FC, ReactNode } from 'react'
import { Input, Button } from '../../components'
import * as s from './styled'

interface Props {
  tab: 'email' | 'phone'
}

const TabContent: FC<Props> = ({ tab }) => {


  function renderLoginInput(): ReactNode {
    switch (tab) {
      case 'phone':
        return (
          <Input
            name="phone"
            type="text"
            placeholder="Enter your phone number"
            label="Email"
          />
        )
      case 'email':
        return (
          <Input name="email" type="email" placeholder="Enter email address"  label="Email"/>
        )
    }
  }

  return (
    <s.Container>
      <div className="field-wrapper">
        <div className="field top-part-field">
          {renderLoginInput()}
          <div>
          <Button className='send_code_button'>Send Code</Button>
          </div>
        </div>
      </div>

      <div className="field field--col">
        <Input name="verification code" type="text" label="Verification code" />
        <div>
          <Button>Submit Code</Button>
        </div>
      </div>
    </s.Container>
  )
}

export default TabContent
