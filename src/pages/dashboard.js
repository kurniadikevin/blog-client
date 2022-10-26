import { Link } from 'react-router-dom';

function Dashboard() {
    return (
      <div className="dashboard">
        <div className="blog-name">Blackboard Journal</div>
        <Link  to="/" className="dash-home">
          <div >Home</div>
        </Link>
      </div>
    );
  }
  
  export default Dashboard;
  