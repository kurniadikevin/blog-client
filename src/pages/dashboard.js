import { Link } from 'react-router-dom';
import {toggleMode} from '../functions';

function Dashboard() {
  
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
            <span class="material-symbols-outlined" id='mode-icon'>
              dark_mode
            </span>
           </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  