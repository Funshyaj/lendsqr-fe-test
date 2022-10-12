import UserFilter from "./User page(filter)/User-filter";
import UserPage from "./User page/UserPage";
import UserDetailsPage from "./User details page/User-details-page";
import Login from "./login page/login";
import './App.scss';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
<Route exact path="/" element={<Login />}/>
<Route exact path="/UserPage" element={<UserPage />}/>
<Route exact path="/UserPageFilter" element={<UserFilter />}/>
<Route exact path="/UserDetailsPage" element={<UserDetailsPage />}/>


      </Routes>

    </div> 
  );
}


export default App;

