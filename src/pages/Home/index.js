
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Dashboard from '../dashboard';

export function HomePage() {
  let posts;
    const [data,setData]= useState([{title:'loading data'}]);

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
                        <div>
                            <div>{item.title}</div>
                            <div>{item.body}</div>
                            <div>{item.author}</div>
                            <div>{item.date}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
