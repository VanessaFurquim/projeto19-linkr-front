import styled from "styled-components";


export const SingInContainer = styled.section`
  flex: 37;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333333;

  button {
    width: calc(100% - 167px);
  }

  h2 {
    font-family: Lato;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    color: #ffffff;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 100vh;
    flex: 75;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 63px;

    button {
      width: calc(100% - 12.7%);
    }

    input {
      width: calc(100% - 18%);
    }

    h2 {
      font-family: Lato;
      font-size: 17px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
    }
  }
`;

export const Logo = styled.section`
  flex: 63;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #151515;
  height: 100vh;

  h1 {
    width: 442px;
    height: 117px;
    font-family: Passion One;
    font-size: 106px;
    font-weight: 700;
    line-height: 117px;
    letter-spacing: 0.05em;
    text-align: left;
    color: #ffffff;
  }

  p {
    width: 442px;
    height: 128px;
    font-family: Oswald;
    font-size: 43px;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 175px;
    flex: 25;

    p {
      width: 237px;
      height: 68px;
      font-family: Oswald;
      font-size: 23px;
      font-weight: 700;
      line-height: 34px;
      letter-spacing: 0em;
      text-align: center;
    }

    h1 {
      width: 167px;
      height: 84px;
      font-family: Passion One;
      font-size: 76px;
      font-weight: 700;
      line-height: 84px;
      letter-spacing: 0.05em;
      text-align: left;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #333333;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;