import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerPostPublish } from "./styled";
import apiPublishes from "../../services/apiPublishes";

export function NewPost() {
    const token = localStorage.getItem('token');
    const picture = localStorage.getItem("picture");
    const [form, setForm] = useState({ url: "", description: "" })
    const [send, setSend] = useState(false)

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function post(e) {
        e.preventDefault()

        if (form.url.length === 0) {
            return alert("Plis, insert a link!!")
        }

        setSend(true);

        apiPublishes.postPublish(form, token)
        .then(res => {
            setSend(false)
            setForm({ url: "", description: "" })
            window.location.reload();
        })
        .catch(err =>{
            setSend(false);
           
            console.log(err.response.data)
            alert("Houve um erro ao publicar seu link")
        })
    }

    return (
        <ContainerPostPublish>
            <img src={picture} alt={"Foto de perfil do usuário"} />
            <div>
                <h2>What are you going to share today?</h2>
                {send === false ? (
                    <form onSubmit={post}>
                        <input
                            data-test="" name="url"
                            placeholder="http://..." type="url" required
                            value={form.url} onChange={handleForm} 
                        />
                        <input
                            data-test="" className="descriptionInput" name="description"
                            placeholder="Awesome article about #javascript" type="text"
                            value={form.description} onChange={handleForm} 
                        />
                        <button type="submit" >Publish</button>
                    </form>
                ) : (
                    <form>
                        <input
                            data-test="" name="url"
                            placeholder="http://..." type="url" required
                            value={form.url} onChange={handleForm} disabled={send}
                        />
                        <input
                            data-test="" className="descriptionInput"
                            name="description" placeholder="Awesome article about #javascript"
                            type="text"
                            value={form.description} onChange={handleForm} disabled={send}
                        />
                        <button disabled={send}>Publishing...</button>
                    </form>
                )}

            </div>

        </ContainerPostPublish>

    )
}
