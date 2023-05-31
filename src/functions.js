import { Link } from "react-router-dom";

export const formatDate= (value)=>{
  let valueStr = value.toString()
  let split = valueStr.split('T');// split error
  return split[0]
  }

export const toggleMode= ()=>{
        const black = 'var(--black)';
        const white = '	var(--white)';
      
        const iconMode = document.querySelector('#mode-icon');
        const toggleBtn = document.querySelector('#toggle-mode');

    
        if (toggleBtn.value === 'day'){
          const body = document.querySelector('body');
          body.style.backgroundColor=white;
          body.style.color=black;
          const blogName = document.querySelector('#link');
          blogName.style.color=black;
          const blogTitle = document.querySelectorAll('#link2');
          for(let i=0; i< blogTitle.length; i++){
            blogTitle[i].style.color=black;
          }
          document.documentElement.style.setProperty('--link','rgb(35,35,35)');
          toggleBtn.value = 'night'
          iconMode.textContent='dark_mode'
          
      } else{
          const body = document.querySelector('body');
          body.style.backgroundColor=black;
          body.style.color=white;
          const blogName = document.querySelector('#link');
          blogName.style.color=white;
          const blogTitle = document.querySelectorAll('#link2');
          for(let i=0; i< blogTitle.length; i++){
            blogTitle[i].style.color=white;
          }
          document.documentElement.style.setProperty('--link','rgb(255,255,235)');
          toggleBtn.value = 'day';
          iconMode.textContent='clear_day';
        }
      }
    
export const getImageSrc = data => {
  return `http://localhost:5000/${data[0]}`
};

export const limitDisplayText=(data, limit)=>{
  if(data){
  const word=data.split(' ');
  let shortenText;
  if (word.length >= limit){
    shortenText = word.splice(0,limit);
    return shortenText.join(' ') 
  } else{
    return data;
  }}
}

export const renderSeeMore=(text,id)=>{
  if(text && text.split(' ').length >= 30){
      return(
          <Link  id='link-seemore'
          to={{ pathname: `/posts/${id}`,  }}
          >
          <a> See More..</a>
          </Link>
      )}
}