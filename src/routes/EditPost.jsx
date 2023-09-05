import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import format from 'date-fns/format'
import api from "../api/post"

const EditPost = () => {
    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')
    const { id } = useParams();
    const navigate = useNavigate()

    const handleEdit = (postId) => {
        let editedPost = {}
        editedPost.id = postId;
        editedPost.datetime = format(new Date(), 'yyyy-MM-dd');
        editedPost.body = editBody;
        editedPost.title = editTitle;

        const fetchEditedPost = async () => {
            try {
                const response = await api.put(`/posts/${postId}`, editedPost);
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

        fetchEditedPost();
        navigate('/')
    }

    return (
        <form>
            <label htmlFor="editTitle">Title</label>
            <input
                type="text"
                id='editTitle'
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="editBody">Body</label>
            <textarea
                type="text"
                id='editBody'
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
            >Body
            </textarea>
            <button onClick={() => handleEdit(id)}>EDIT</button>
        </form>
    )
}

export default EditPost