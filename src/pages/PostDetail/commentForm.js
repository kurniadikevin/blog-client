import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';


function CommentForm(){

    const { id } = useParams();


    return(
    <form className='comment-container' method='POST'
     action={`${process.env.REACT_APP_API_URL}/posts/${id}/comment/form`}>
        <div className='comment-text'>
        <textarea  type='text' id='inputCom'
        name='text' placeholder="write new comment"></textarea>
        </div>
        <div className='comment-author'>
        <input type='text'
        name='user' placeholder="add yourname"></input>    
        </div>
        <div className='comment-submit'>              
        <button type="submit" id="addCommentBtn">Add</button>
        </div>  
      </form>
    )
}

export default  CommentForm;