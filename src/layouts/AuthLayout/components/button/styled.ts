import styled from 'styled-components'

const Button = styled.button`
  transition: 0.7s;
  background: #0052FF;
  box-shadow: 0px 15px 24px rgba(0, 82, 255, 0.15);
  border-radius: 4px;
  padding: 24px 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: white;  

  &:hover,
  &:focus {
    transition: 0.7s;
    background-color: white;
    color: #0052FF;
  }

  &:active {
    background-color: var(--color-active--active);
  }
`

export { Button }
