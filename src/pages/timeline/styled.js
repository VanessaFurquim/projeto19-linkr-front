import styled from "styled-components";

export const ContainerTimelinePage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #333333;


div{
  width: 620px;

  h1 {
    width: 145px;
    height: 64px;
    font-family: 'Oswald', sans-serif;
    font-size: 43px;
    font-weight: 700;
    color: #FFFFFF;
    margin-top: 30px;
  }
}


.feedvazio {
  background-color: transparent;
  margin-top: 30px;
  width: 611px;
  height: 36px;

  p {
    font-family: 'Oswald', sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #FFFFFF;
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

export const ContainerPublishes = styled.div`
display: flex;
flex-direction: column;
background-color: transparent;
width: 720px;


`

export const PublishCard = styled.div`
display: flex;
flex-direction: row;
background-color: #171717;
width: 720px;
border-radius: 16px;
font-family: 'Lato', sans-serif;
margin-top: 20px;
 
img{
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    margin: 10px;
  }

div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2{
      width: 520px;
      font-family: 'Lato', sans-serif;
      font-size: 19px;
      font-weight: 400;
      color: #ffffff;
  }
   p{
    width: 520px;
    font-family: 'Lato', sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: #B7B7B7;
   }
}

`


