import PostService from 'API/PostService';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CertainPost() {
    let params = useParams();
    let [post, setPost] = useState([]);
    let [comments, setComments] = useState([])

    // ajax
    useEffect(() => {
        fetchCertainPost()
        fetchComments()
    }, [])

    async function fetchCertainPost() {
        let response = await PostService.getCertain(params.id);
        setPost(response.data);
    };

    async function fetchComments() {
        let response = await PostService.getComments(params.id);
        setComments(response.data);
    };
    
  return (
    <div>
       <div>
            <h1>{post['title']}</h1>
            <p>{post['body']}</p>
       </div>

        <div>
            <hr></hr>
            <h3>comments</h3>
            <hr></hr>

            {comments.length
                ? comments.map(comment => 
                    <div key={comment.id}>
                        <b>{comment.email}</b>
                        <p>{comment.body}</p>
                    </div>)
                : <h3>no comments</h3>
            }
        </div>
    </div>
  )
}
