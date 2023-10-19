import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, SingInContainer } from "./styled.js";


export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enviado, setEnviado] = useState(false);

  const obj = {
    email,
    password,
  };

  function sendInformations(e) {
    e.preventDefault();

    setEnviado(true);

    axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, obj)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem("user", response.data.username);
        localStorage.setItem("picture", response.data.picture);
        localStorage.setItem("userId", response.data.id);
        console.log(response.data)

        navigate("/timeline")


      }).catch((erro) => {

        setEnviado(false);
        console.log(erro.response);
        alert(erro.response.data.message || erro.response.data);

      });
  };


  return (
    <Container>
      <Logo>
        <h1>linkr</h1>
        <p>save, share and discover the best links on the web</p>
      </Logo>
      <SingInContainer>
    
        <form onSubmit={sendInformations}>
          <input data-test="email" placeholder="e-mail" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input data-test="password" placeholder="password" type="password" autoComplete="new-password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button data-test="login-btn" type="submit" disabled={enviado}>Log In</button>
        </form>

        <Link to="/sign-up">
          <h2 data-test="sign-up-link">First time? Create an account!</h2>
        </Link>
      </SingInContainer>
    </Container>
  );
}