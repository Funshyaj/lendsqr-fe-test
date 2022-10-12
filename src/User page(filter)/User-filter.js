import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Table from "./Filter-Table";


const UserFilter = () => {
  return ( <div className="FilterPage">
<Dashboard />
<div className="content-body" >
            <Table />
            <Link to="/UserPage">Prev Page</Link> 
        <Link to="/UserDetailspage">Next Page</Link> 
  </div>
  </div> );
}
 
export default UserFilter;