import { useState } from "react";
import { Container, ContainerInput, ContainerUserClosed, ContainerUserOpened } from "./styled.js";
import { BiSearch, BiChevronDown, BiChevronUp } from "react-icons/bi/index.esm.js";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/apiAuth.js";


export default function Navbar() {
    const [openLogout, setOpenLogout] = useState(false)
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    const picture = localStorage.getItem("picture");
    
    

    function handleLogout() {
        setOpenLogout(true)
    }

    function handleCloseLogout() {
        setOpenLogout(false)
    }

    function logout(){
       
        apiAuth.signOut(token)
            .then(res =>{
                console.log(token)
                navigate("/")
               
            })
            .catch(err =>{
                console.log(token)
                console.log(err.response.data)
                alert(err.response.data.message|| err.message)
            })
    }

    return (
        <Container >
            <p onClick={handleCloseLogout}>linkr</p>
            <ContainerInput onClick={handleCloseLogout}>
                <input placeholder="Search for people" ></input>
                <BiSearch className={"searchInput"} onClick={handleCloseLogout} />

            </ContainerInput>

            {openLogout === false ? (
                <ContainerUserClosed onClick={handleLogout}>
                    <button > <BiChevronDown /> </button>
                    <img src={picture} alt={"Foto de perfil do usuário"} data-test="avatar" />
                </ContainerUserClosed>

            ) : (
                <ContainerUserOpened>
                    <div>
                        <button onClick={handleCloseLogout} > <BiChevronUp /> </button>
                        <img onClick={handleCloseLogout} src={picture} alt={"Foto de perfil do usuário"} data-test="avatar" />
                    </div>
                    <div data-test="menu"  className="logoutButton">
                    <button data-test="logout" type="submit" onClick={logout}> Logout </button>
                    </div>
                    
                </ContainerUserOpened>
            )}

        </Container>
    )

};
