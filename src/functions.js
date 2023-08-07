import { Link } from "react-router-dom";

export const formatDate= (value)=>{
  let valueStr = value.toString()
  let split = valueStr.split('T');// split error
  return split[0]
  }


  export const toggleLightDarkMode=()=>{
    const root = document.querySelector(':root');
    const iconMode = document.querySelector('#mode-icon');
    const toggleBtn = document.querySelector('#toggle-mode');
  
    const styles = getComputedStyle(document.documentElement);
    const white = styles.getPropertyValue('--white');
    const black = styles.getPropertyValue('--black');
    
    if (toggleBtn.value === 'day'){
    //dark mode
    root.style.setProperty('--background', black);
    root.style.setProperty('--text', white);
    toggleBtn.value = 'night'
    iconMode.textContent='dark_mode'
    } else{
      //light mode
      root.style.setProperty('--background', white);
      root.style.setProperty('--text', black);
      toggleBtn.value = 'day';
      iconMode.textContent='light_mode';
    }
  }
  
  export const getValueLightDarkMode=()=>{
  const styles = getComputedStyle(document.documentElement);
  const bgColor = styles.getPropertyValue('--background');
  const white = styles.getPropertyValue('--white');
  const black = styles.getPropertyValue('--black');
   if(bgColor === white){
    return 'day'
   } else if(bgColor === black){
    return 'night'
   }
  }
    
export const getImageSrc = data => {
  return `${process.env.REACT_APP_API_URL}/${data[0]}`
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