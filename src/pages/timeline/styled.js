import styled from "styled-components";

export const ContainerTimelinePage = styled.div`
display: flex;
justify-content: center;
background-color: #333333;
height: 100vh;

div{
    width: 620px;
}
h1 {
    width: 145px;
    height: 64px;
    font-family: 'Oswald', sans-serif;
    font-size: 43px;
    font-weight: 700;
    color: #FFFFFF;
    margin-top: 30px;
}

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

`

export const ContainerPublishes = styled.div`
display: flex;
flex-direction: column;
background-color: transparent;
width: 720px;

`

export const PublishCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
background-color: #171717;
width: 720px;
border-radius: 16px;
font-family: 'Lato', sans-serif;
margin-top: 20px;

.user {
  display: flex;
  flex-direction: row;
  img{
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    margin-top: 5px;
  }

  h2{
      width: 520px;
      height: 209px;
      font-family: 'Lato', sans-serif;
      font-size: 19px;
      font-weight: 400;
      color: #ffffff;
  }
}

div{
  display: flex;
  flex-direction: column;
  align-items: center;
   p{
    width: 520px;
    font-family: 'Lato', sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: #B7B7B7;
   }
}

`