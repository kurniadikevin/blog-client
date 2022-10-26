import { Link } from 'react-router-dom';

function Dashboard() {
    return (
      <div className="dashboard">
         <Link  to="/" className="blog-name">
          <div >Blackboard Journal</div>
        </Link>
        <Link  to="/" className='home-link'>
          <div >Home</div>
        </Link>
      </div>
    );
  }
  
  export default Dashboard;
  