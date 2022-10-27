
export const formatDate= (value)=>{
        let valueStr = value.toString()
      let split = valueStr.split('T');// split error
      return split[0]
    }

export const toggleMode= ()=>{
        const black = 'rgb(35,35,35)';
        const white = '	rgb(255,255,245)';
      
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
          toggleBtn.value = 'day';
          iconMode.textContent='clear_day';
        }
      }
    