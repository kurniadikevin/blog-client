
export const formatDate= (value)=>{
  let arrMonths=[null,'January','February', 'March','April', 'May', 'June','July','August','September','October','November','December'];
        let valueStr = value.toString()
      let split = valueStr.split('T');// split error
      let splitYMD= split[0].split('-');
      let displayDate = `${splitYMD[2]} ${arrMonths[splitYMD[1]]} ${splitYMD[0]}`
      return displayDate;
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
    