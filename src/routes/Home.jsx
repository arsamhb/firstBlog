import React, { useEffect } from 'react'
import { useState } from 'react'
import Feed from '../Components/Feed'
import api from "../api/post"

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get("/posts");
                setPosts(response.data)
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

        fetchPosts();
    },[])

    return (
        <main className='Home'>
            <Feed posts={posts} />
        </main>
    )
}

export default Home