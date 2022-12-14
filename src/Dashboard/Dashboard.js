import { useState, } from 'react';
import './dashboard.scss';
import Navbar from "../Navbar/navbar";
import users from "./dash-page-assets/users.png";
import activeUsers from "./dash-page-assets/active-users.png";
import usersLoans from "./dash-page-assets/users-loans.png";
import usersSavings from "./dash-page-assets/users-savings.png";
import { Link } from 'react-router-dom';


const Dashboard = () => { 
const [switchClick, setSwitchClick] = useState(true)

    return ( <div>
<Navbar />

<div className='side-nav'>
<div className="switch-click" onClick={()=>setSwitchClick(!switchClick)}>
<i className="fi fi-sr-briefcase"></i>
<h3>Switch Organization </h3>

<span className="material-icons-outlined">
  {switchClick ?"expand_less" : "expand_more"}</span>
</div>
<div className={`${switchClick ?"org-content":"org-content hidden"}`}>
  <div className="dash">
  <i className="fi fi-sr-home"></i>
    <h3>Dashboard</h3>
  </div>

<div>
<div className="link-menu">
  <h3>CUSTOMERS</h3>

<div className="links">
  <div className="users">
    <button href="" >
      <i className="fi fi-sr-users"></i>
      Users
    </button>
    </div>
    

    <button href="">
    <i className="fi fi-sr-users-alt"></i>
     Guarantors
    </button>

    <button href="">
    <i className="fi fi-sr-sack"></i>
    Loans
    </button>

    <button href="">
    <i className="fi fi-sr-handshake"></i>
     Descision Models
    </button>

    <button href="">
      <i className="fi fi-sr-piggy-bank"></i>
      Savings
    </button>

    <button href="">
    <i className="fi fi-sr-sack"></i>
      Loan Request
    </button>

    <button href="">
    <i className="fi fi-sr-user-add"></i>
      Whitelist
    </button>

    <button href="">
    <i className="fi fi-sr-delete-user"></i>
      Karma
    </button>
</div>
</div>

<div className="link-menu">
  <h3>BUSINESSES</h3>

<div className="links">
    <button href="">
    <i className="fi fi-sr-briefcase"></i>
      Organization
    </button>

    <button href="">
    <i className="fi fi-sr-sack"></i>
      Loan Products
    </button>

    <button href="">
    <i className="fi fi-rr-bank"></i>
      Savings Products
    </button>

    <button href="">
    <i className="fi fi-sr-coins"></i>
    Fees and charges
    </button>

    <button href="">
    <i className="fi fi-sr-document"></i>
      Transactions
    </button>

    <button href="">
    <i className="fi fi-sr-settings"></i>
      Services
    </button>

    <button href="">
    <span class="material-icons-outlined">
manage_accounts
</span>
      Service Account
    </button>

    <button href="">
    <i class="fi fi-sr-document"></i>
      Settlements
    </button>

    <button href="">
    <i className="fi fi-rr-stats"></i>
      Reports
    </button>
</div>
</div>

<div className="link-menu">
  <h3>SETTINGS</h3>

<div className="links">
    <button href="">
    <i className="fi fi-rr-settings-sliders"></i>
      Preferences
    </button>

    <button href="">
    <i className="fi fi-sr-badge-percent"></i>
      Fees and Pricing
    </button>

    <button href="">
    <i class="fi fi-rr-clipboard-list"></i>
      Audit Logs
    </button>
</div>
</div>


</div>


        </div>

        <Link to="/" className='logout'>
        <span class="material-icons">
logout
</span>
<h3>Logout</h3>
        </Link>


</div>


<div className='main-body'>

<h1>Users
</h1>

{/**Mobile boxes **/}
<div className='main-box'>

    <div className='users-info-box'>
<img src={users} alt="users-icon" />
<div className='users-info-box-texts'>
<h3>USERS</h3>
<h2>2,453</h2>
</div>
    </div>  

    <div className='three-boxes'>
    <div className='info-box'>
<img src={activeUsers} alt="users-icon" />
<h3>ACTIVE USERS</h3>
<h2>2,453</h2>
    </div>

    <div className='info-box'>
<img src={usersLoans} alt="users-icon" />
<h3>USERS WITH LOANS</h3>
<h2>12,453</h2>
</div>

<div className='info-box'>
<img src={usersSavings} alt="users-icon" />
<h3>USERS WITH SAVINGS</h3>
<h2>102,453</h2>
    </div>
    
</div>

</div>

{/**pc boxes **/}
<div className='pc-main-box'>
    <div className='four-boxes'>

    <div className='info-box'>
<img src={users} alt="users-icon" />
<h3>USERS</h3>
<h2>2,453</h2>
    </div>


    <div className='info-box'>
<img src={activeUsers} alt="users-icon" />
<h3>ACTIVE USERS</h3>
<h2>2,453</h2>
    </div>

    <div className='info-box'>
<img src={usersLoans} alt="users-icon" />
<h3>USERS WITH LOANS</h3>
<h2>12,453</h2>
</div>

<div className='info-box'>
<img src={usersSavings} alt="users-icon" />
<h3>USERS WITH SAVINGS</h3>
<h2>102,453</h2>
    </div>
    
</div>

</div>

</div>
 

    </div> );
}
 
export default Dashboard;