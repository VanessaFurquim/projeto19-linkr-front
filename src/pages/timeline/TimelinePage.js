import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar.js";
import { NewPost } from "../../components/newPost/NewPost.js";
import { ContainerPublishes, ContainerTimelinePage, PublishCard } from "./styled.js";
import apiPublishes from "../../services/apiPublishes.js";
import feedvazio from "../../imgs/feedvazio.jpg"
import { Link } from "react-router-dom";

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
                alert ("An error occured while trying to fetch the posts, please refresh the page")
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

                        <div className="feedvazio">
                            <p>There are no posts yet</p>
                            <img src={feedvazio} alt={"imagem para ilustrar que o feed está sem publicações"} />
                        </div>

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
                        <PublishCard key={p.id}>
                            <img src={p.picture} alt={p.username} />
                            <div>
                                <h2>{p.username}</h2>
                                <p>{p.post.description}</p>
                                <Link to={p.post.url} target="_blank">
                                    <p>{p.post.url}</p>
                                </Link>
                            </div>
                        </PublishCard>
                    ))}
                </ContainerPublishes>
            </ContainerTimelinePage>
        </>
    )
};