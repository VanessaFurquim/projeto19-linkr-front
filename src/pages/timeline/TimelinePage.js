import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar.js";
import { NewPost } from "../../components/newPost/NewPost.js";
import { ContainerPublishes, ContainerTimelinePage, PublishCard } from "./styled.js";
import apiPublishes from "../../services/apiPublishes.js";

export default function Timeline() {
    const [publishes, setPublishes] = useState(undefined);
    const token = localStorage.getItem('token');

    useEffect(() => {

        apiPublishes.getPublishes(token)
            .then(res => {
                setPublishes(res.data)
                console.log(res.data)
            })
            .catch(erro => {
                console.log(erro.response.data)
            });

    }, []);

    if (publishes === undefined) {
        return (
            <>
                <Navbar />
                <ContainerTimelinePage>
                    <div>
                        <h1>Timeline</h1>
                        <NewPost />

                        <div>Seja o primeiro a compartilhar um link!!</div>
                        
                    </div>
                </ContainerTimelinePage>
            </>
        )
    }


    return (
        <>
            <Navbar />
            <ContainerTimelinePage>
                <div>
                    <h1>Timeline</h1>
                    <NewPost />
                </div>
                <ContainerPublishes>
                    {publishes.map(p => (
                        <PublishCard>
                            <div className="user">
                                <img src={p.photo} alt={p.username} />
                                <h2>{p.username}</h2>
                            </div>
                            <div>
                                <p>{p.description}</p>
                                <p>{p.url}</p>
                            </div>
                        </PublishCard>
                    ))}
                </ContainerPublishes>
            </ContainerTimelinePage>
        </>
    )
};