import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Dashboard from '../dashboard';
import './styleHome.css';
import { formatDate} from '../../functions';

export function HomePage() {
 
    const [data,setData]= useState([{title:'loading data', date : new Date()}]);

    const restEndpoint = "http://localhost:5000/posts";

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
        <div>
            <Dashboard/>
            <div className="data-collection">
                {data.map(function(item){
                    return (
                        
                        <div className='data-container'>
                            <Link className='data-title' id='link2'
                             to={{ pathname: `/posts/${item._id}`,  }}
                            >
                                <div >{item.title}</div>
                            </Link>
                            <div className='data-body'>{item.body}</div>
                            <div className='data-author'>{item.author}</div>
                            <div className='data-date'>
                               {formatDate(item.date)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
