import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar.js";
import { NewPost } from "../../components/newPost/NewPost.js";
import { ContainerPublishes, ContainerTimelinePage, PublishCard } from "./styled.js";
import apiPublishes from "../../services/apiPublishes.js";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi/index.esm.js";



export default function Timeline() {
    const [publishes, setPublishes] = useState(undefined);
    const token = localStorage.getItem('token');
    const [like, setLike] = useState(0)

    useEffect(() => {
        apiPublishes.getPublishes(token)
            .then(res => {
                setPublishes(res.data)
                console.log(res.data)

            })
            .catch(erro => {
                console.log(erro.response.data)
                alert("An error occured while trying to fetch the posts, please refresh the page")
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
                            <p data-test="message">There are no posts yet</p>
                        </div>

                    </div>
                </ContainerTimelinePage>
            </>
        )
    }



    function likes(p) {
        const idPost = p.post.id;
        console.log(idPost)

        apiPublishes.postLike(idPost, token)
            .then(res => {
                console.log(res.data)
                setLike(res.data)
            })
            .catch(erro =>{
                alert(erro.response.data)})
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
                        <PublishCard key={p.id} data-test="post" >
                            <div className="avatar-like">
                                <img src={p.picture} alt={p.username} />
                                <div>
                                    <button className="likebutton" > <BiHeart onClick={() => likes(p)} /> </button>
                                </div>
                                <p> 13 likes</p>
                                
                            </div>

                            <div>
                                <h2 data-test="username" >{p.username}</h2>
                                <p data-test="description" >{p.post.description}</p>
                                <Link to={p.post.url} target="_blank" data-test="link">
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