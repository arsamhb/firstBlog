import React from 'react'
import Post from './Post'
import api from "../api/post"
const Feed = ({ posts }) => {
    return (
        posts.length ? posts.map((post) => <Post key={post.id} post={post} />) : "NOTHING TO DISPLAY"
    )
}

export default Feed