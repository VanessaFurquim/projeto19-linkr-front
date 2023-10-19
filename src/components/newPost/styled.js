import styled from "styled-components";

export const ContainerPostPublish = styled.div`
display: flex;
position: relative;
justify-content: space-around;
background-color: #ffffff;
width: 720px;
height: 279px;
border-radius: 16px;
font-family: 'Lato', sans-serif;

img{
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    margin-top: 5px;
}

div{
    display: flex;
    flex-direction: column;
    width: 520px;
    height: 209px;

    h2{
        color: #707070;
        width: 445px;
        font-size: 20px;
        font-weight: 300;
    }

    input {
        background-color: #EFEFEF;
        width: 490px;
        height: 18px;
        border-radius: 5px;
        border: none;
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        line-height: 18px;
        font-weight: 300;
        color: #949494;
        margin: 2px;
    }
    .descriptionInput {
        background-color: #EFEFEF;
        width: 490px;
        height: 66px;
        border-radius: 5px;
        border: none;
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        font-weight: 300;
        color: #949494;
    }
    button {
        display: flex;
        position: absolute;
        right: 10px;
        bottom: 10px;
        justify-content: center;
        align-items: center;
        background-color: #1877F2;
        width: 112PX;
        height: 31px;
        border-radius: 5px;
        border: none;
        color: #FFFFFF;
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        font-weight: 700;
    }
}



  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`
