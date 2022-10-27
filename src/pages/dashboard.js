import { Link } from 'react-router-dom';


function Dashboard() {

  const body = document.querySelector('body');
  const black = 'rgb(35,35,35)';
  const white = '	rgb(255,255,245)';

  const toggleMode= ()=>{

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
      toggleBtn.value = 'day'
    }
  }

  console.log(body.style.backgroundColor)

/*   const syncColor = ()=>{
    if(body.style.backgroundColor===black){
      console.log('change')
    }
  }
  syncColor();
  
   */
  
  return (
      <div className="dashboard">
         <Link  to="/" className="blog-name" id='link'>
          <div >Blackboard Journal</div>
        </Link>
        <div className='dashboard-menu'>
          <Link  to="/" className='home-link' id='link2'>
            <div >Home</div>
          </Link>
          <div id='toggle-mode' onClick={toggleMode} value='day'>
            mode</div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  