import logo from '../../logo.svg';
import './style.css';
import { Link } from 'react-router-dom';
import Dashboard from '../dashboard';
import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { formatDate, getImageSrc} from '../../functions';
import CommentForm from './commentForm';
import LoaderComponent from '../loader/loader';



export function PostDetail(props) {
  
  const { id } = useParams();

  const [data,setData]= useState([{title:'loading data...', date : new Date()}]);
  const [comment,setComment] = useState([{title:'loading data...', date : new Date()}]);

  //api for post
  const restEndpoint = `${process.env.REACT_APP_API_URL}/posts/${id}`;

  const callRestApi = async () => {
      const response = await fetch(restEndpoint);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setData( jsonResponse);
  };

  //api for comment
  const restEndpointComment = `${process.env.REACT_APP_API_URL}/posts/${id}/comment`;

  const callRestApiComment = async () => {
      const responseCom = await fetch(restEndpointComment);
      const jsonResponseCom = await responseCom.json();
      console.log(jsonResponseCom);
      setComment( jsonResponseCom);
      const loader= document.querySelector('#loader');
        loader.style.display='none';
  };

  // useEffect once
  useEffect(()=>{
      callRestApi();
      callRestApiComment();
    
  },[])


 
  return (
    <div className="post-detail">
      <Dashboard/>
      <LoaderComponent id='loader-post'/>
      {data.map(function(item){
        return (
        <div>
          <div className='post-container'>
            <div className='post-col1'>
            {
                item.imageContent?.length > 0 ?
              <img id='post-image-detail' alt='post-image' src={getImageSrc(item.imageContent)}
              width={550} >
              </img>
              : ''
              }
             <div className='data-title' id='link2'>{item.title}</div>
            </div>
            <div className='post-col2'>
              <div className='data-body'>{item.body}</div>
              <div className='data-author'>{item.author}</div>
              <div className='data-date'>{formatDate(item.date)}</div>
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
                  <div className='comment-date'>
                  {formatDate(item.date)}
                    </div>
                </div>
                
              )
            })}
            <CommentForm/>
            </div>
           
          </div>
        </div>
        )
      })}
  
    </div>
  );
}
