import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Table from "./User-Table.js"

const UserPage = () => {
    return ( <div className="UserPage">
        <Dashboard />
        <div className="content-body" >
        <Table />
        <Link to="/UserPageFilter">Next Page</Link> 
        </div>
  
    </div> );
}

export default UserPage;