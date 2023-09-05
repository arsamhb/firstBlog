import React, { useEffect } from 'react'
import { useState } from 'react'
import Feed from '../Components/Feed'
import api from "../api/post"
import { useOutletContext } from 'react-router-dom'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [search] = useOutletContext();
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get("/posts");
                setPosts(response.data)
                setSearchResult(response.data)
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
    }, [])

    useEffect(() => {
        const result = posts.filter((post) => post.body.toLowerCase().includes(search.toLowerCase()));
        setSearchResult(result.reverse());
    }, [search])

    return (
        <main className='Home'>
            <Feed posts={searchResult} />
        </main>
    )
}

export default Home