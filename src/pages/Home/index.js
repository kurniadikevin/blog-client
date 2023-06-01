import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Dashboard from '../dashboard';
import './styleHome.css';
import { formatDate, getImageSrc, limitDisplayText,renderSeeMore} from '../../functions';
import LoaderComponent from '../loader/loader';

export function HomePage() {
 
    const [data,setData]= useState([{title:'', date : new Date()}]);

    const restEndpoint = "https://blog-api-production-8114.up.railway.app/posts";

    
    const callRestApi = async () => {
        const response = await fetch(restEndpoint);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        setData( jsonResponse);
        const loader= document.querySelector('#loader');
        loader.style.display='none';
    };

    // useEffect once
    useEffect(()=>{
        callRestApi();
       
    },[])
    
    return (
        <div>
            
            <Dashboard/>
            <div className="data-collection">
            <LoaderComponent />
                {data.map(function(item){
                    return (
                        
                        <div className='data-container' >
                            {
                             item.imageContent?.length > 0 ?
                            <img id='data-image' alt='post-image' src={getImageSrc(item.imageContent)}
                            width={200} >
                            </img>
                            : ''
                            }
                            <Link className='data-title' id='link2'
                             to={{ pathname: `/posts/${item._id}`,  }}
                            >
                                <div id='data-title-text'>{item.title}</div>
                            </Link>
                            <div className='data-body' id='index-data-body'>
                            {limitDisplayText(item.body,30)}
                            {renderSeeMore(item.body, item._id)}
                                </div>
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
