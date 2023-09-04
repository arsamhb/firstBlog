import React, { useEffect, useState } from 'react'
import api from "../api/post"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        const findPost = async () => {
            try {
                const response = await api.get("/posts")
                const matchedPostWithId = (response.data).find((post) => post.id == id)
                setPost(matchedPostWithId)
            } catch (err) {
                //not in 200 range
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.header);
                    //no response
                } else {
                    console.log(`Error ${err.message}`);
                }
            }
        }
        findPost()
    }, [])

    const handleDelete = async () => {
        const response = await api.delete(`/posts/${id}`);
        navigate("/")
    }

    return (
        <>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
            <h4>{post.datetime}</h4>
            <button onClick={handleDelete}>
                DELETE
            </button>
        </>
    )
}

export default Post