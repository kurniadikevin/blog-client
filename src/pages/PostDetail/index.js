import logo from '../../logo.svg';
import './style.css';
import { Link } from 'react-router-dom';
import Dashboard from '../dashboard';
import { useParams,useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';



export function PostDetail(props) {
  
  const { id } = useParams();

  const [data,setData]= useState([{title:'loading data'}]);

  const restEndpoint = `http://localhost:5000/posts/${id}`;

  const callRestApi = async () => {
      const response = await fetch(restEndpoint);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setData( jsonResponse);
  };

  // useEffect once
  useEffect(()=>{
      callRestApi();
  },[])


 
  return (
    <div className="post-detail">
      <Dashboard/>
      {data.map(function(item){
        return (
          <div className='post-container'>
            <div className='data-title'>{item.title} {id}</div>
            <div className='data-body'>{item.body}</div>
            <div className='data-author'>{item.author}</div>
            <div className='data-date'>{item.date}</div>
        </div>
        )
      })}
  
    </div>
  );
}
