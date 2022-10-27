import logo from '../../logo.svg';
import './style.css';
import { Link } from 'react-router-dom';
import Dashboard from '../dashboard';
import { useParams,useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';



export function PostDetail(props) {
  
  const { id } = useParams();

  const [data,setData]= useState([{title:'loading data'}]);
  const [comment,setComment] = useState([{title:'loading data'}]);

  //api for post
  const restEndpoint = `http://localhost:5000/posts/${id}`;

  const callRestApi = async () => {
      const response = await fetch(restEndpoint);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setData( jsonResponse);
  };

  //api for comment
  const restEndpointComment = `http://localhost:5000/posts/${id}/comment`;

  const callRestApiComment = async () => {
      const responseCom = await fetch(restEndpointComment);
      const jsonResponseCom = await responseCom.json();
      console.log(jsonResponseCom);
      setComment( jsonResponseCom);
  };

  // useEffect once
  useEffect(()=>{
      callRestApi();
      callRestApiComment();
  },[])


 
  return (
    <div className="post-detail">
      <Dashboard/>
      {data.map(function(item){
        return (
        <div>
          <div className='post-container'>
            <div className='post-col1'>
             <div className='data-title'>{item.title}</div>
            </div>
            <div className='post-col2'>
              <div className='data-body'>{item.body}</div>
              <div className='data-author'>{item.author}</div>
              <div className='data-date'>{item.date}</div>
            </div>
          </div>
          <div className='comment-section'>
            <div className='comment-head'>Comment </div>
            <div className='comment-wrapper'>
            {comment.map(function(item){
              return (
                <div className='comment-container'>
                  <div className='comment-text'>{item.text_comment}</div>
                 {(()=> {
                    if (item.author){
                      return <div className='comment-author'>{item.author}</div>
                    } else {
                      return <div className='comment-author'>Anonymous</div>
                    }
                  })()}
                  <div className='comment-date'>{item.date}</div>
                </div>
              )
            })}
            </div>
          </div>
        </div>
        )
      })}
  
    </div>
  );
}
