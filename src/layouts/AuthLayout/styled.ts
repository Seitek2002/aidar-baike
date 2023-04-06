import styled from 'styled-components'

const Container = styled.div`
  display: block;
  height: 100%;
  min-height: 125vh;
  position:relative;
  padding-bottom: 50px;
  overflow-y:hidden;
  .fields {
    display: grid;
    gap: 50px;

    @media (max-width: 1280px) {
      gap: 35px;
    }

    @media (max-height: 768px) {
      gap: 35px;
    }
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(50%, auto));
  gap: 22px;
  max-width: 1480px;
  margin: 0px auto auto;
  padding-bottom: 80px;
  position: relative;
  top:149px;

  @media (max-width: 1600px) {
    padding: 0 40px 80px;
  }

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
  @media (max-width:768px){
    top:99px;
  }

  @media (max-width: 560px) {
    padding: 0 20px 50px;
  }
`

const FormWrapper = styled.div`
  display: grid;
  -webkit-align-content: start;
  -ms-flex-line-pack: start;
  align-content: start;
  gap: 50px;
  width:100%;
  min-width: 335px;
  max-width: 722px;
  z-index: 1;
  border-radius: 12px;
  padding: 50px 50px 100px 50px;
  background: inherit;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    gap: 35px;
    width: 335px;
    margin-bottom: 20px;
  }

  @media (max-height: 768px) {
    gap: 35px;
    padding: 30px;
  }

  @media (max-height: 900px) {
    gap: 35px;
    padding: 30px;
  }


  .form-title {
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0;
    color: inherit;

    @media (max-width: 768px) or (max-height: 700px) {
      font-size: 24px;
      line-height: 29px;
    }
  }

  .footer-button {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #556176;
    a{
      color: #556176;
      text-decoration:none !important;
    }
  }

  .footer-button--mobile {
    a {
      margin-left: 25px;
      color: var(--color-active);
    }


  }

  .footer-button--small {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #55617;
    text-decoration:none !important;

    @media (min-width: 769px) {
      margin-top: -25px;
    }
  }
`

const GreetingBox = styled.div`
  display: grid;
  align-content: start;
  gap: 25px;
  width: 100%;
  max-width: 722px;
  padding-top: 145px;
  margin-bottom: 50px;

  @media (max-width:380px){
  }

  @media (max-width: 960px) {
    padding-top: 0;
    gap: 15px;
  }

  @media (max-height: 768px) {
    padding-top: 120px;
  }

  @media (max-width: 960px) and (max-height: 768px) {
    padding-top: 0;
    gap: 15px;
  }

  .title {
    color: inherit;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;

    @media (max-width: 1280px) {
      font-size: 38px;
      line-height: 44px;
    }

    @media (max-width: 1024px) {
      font-size: 30px;
      line-height: 36px;
    }

    @media (max-width: 960px) {
      text-align: center;
    }
  }

  .description {
    color: #7383A5;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;

    @media (max-width: 1024px) {
      font-size: 16px;
      line-height: 19px;
    }

    @media (max-width: 960px) {
      text-align: center;
    }
  }
`

export { Container, Content, GreetingBox, FormWrapper }
