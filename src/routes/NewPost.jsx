import React, { useState } from 'react'
import api from "../api/post"
import { format } from 'date-fns'

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const findId = async () => {
    try {
      const response = await api.get("/posts");
      return (response.data[(response.data).length - 1].id + 1);
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
  const handleSubmit = async (e) => {
    e.preventDefault()
    let newPost = {}
    newPost.id = await findId();
    console.log(newPost.id);
    newPost.datetime = format(new Date(), 'yyyy-MM-dd');
    newPost.body = body;
    newPost.title = title;
    const response = await api.post('/posts', newPost);
    console.log(response.data);
    setBody('');
    setTitle('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">the text</label>
        <textarea
          name="body text"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button
          type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default NewPost