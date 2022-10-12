import { useState } from "react";
import logo from "../lendsqr-assets/logo.png";

import profilePic from "../Dashboard/dashboard-assets/profile-pic.png";
import notificationIcon from "../Dashboard/dashboard-assets/bell.png";
import './Navbar.scss';
import { Link } from "react-router-dom";

//heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs

const Navbar = (props) => {
 const [mobileMenuToggle, setMobileMenuToggle] = useState(false)
const [switchClick, setSwitchClick] = useState(true)

return ( 

<div className="navbar">

    {/* logo and navigation bar*/}
    <header>
<div className="header-body">

            {/* logo*/}
            <div className="logo"><img src={logo} alt="logo"/> </div>
            {/* all navigations*/}

            <nav>
                {/* pc navigation*/}  
<div className="pc-head">
<div className="search">
      <input type="search" name="search-anything" id=""  placeholder="Search for anything"/> 
      <button>
      <span className="material-icons-outlined search">
search
</span>
        </button>     
          </div>

          <button href="#" className="docs">Docs</button>
</div>


{/* mobile navigation */}
<div className="mobile-head">
  
  <div className="notification">
  <img src={notificationIcon} alt="notificationIcon" />
</div>

<div className="profile">
  <div className="ppName">
    <img src={profilePic} alt="profile-pic" />
  <p>Adedeji</p></div>
  
  <div className="caretdown">
    <i className="fi fi-sr-caret-down"></i></div>
  
</div>



{/* mobile navigation bar */}
<div className="hamburger-menu" onClick={()=> setMobileMenuToggle(!mobileMenuToggle)}>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
</div>

{/* mobile navigation menu*/}
{mobileMenuToggle &&
<div className="mobile-menu">
<div className="side-click" onClick={()=> setMobileMenuToggle(!mobileMenuToggle)}>
</div>
<div id="mobileNavMenu" className="mobileNavMenu">

<div className="cancel-btn">
  <h2 onClick={()=> setMobileMenuToggle(!mobileMenuToggle)}>&times;</h2>
  </div>


        <div className="menu-content">
          <div className="search">
      <input type="search" name="search-anything" id=""  placeholder="Search for anything"/> 
      <button>
      <span className="material-icons-outlined search">
search
</span>
        </button>     
          </div>


<button href="#" className="docs">Docs</button>

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
      <i className="fi fi-sr-money"></i>
      Savings
    </button>

    <button href="">
    <i className="fi fi-sr-piggy-bank"></i>
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
    <i className="fi fi-sr-salary"></i>
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
      <img src="" alt="" />
      Services
    </button>

    <button href="">
    <i className="fi fi-rr-user-settings"></i>
      Service Account
    </button>

    <button href="">
      <img src="" alt="" />
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
    <i class="fi fi-sr-clipboard-list"></i>
      Audit Logs
    </button>
</div>
</div>


</div>


        </div>
        <Link to="/" className="logout">
        <span class="material-icons">
logout
</span>
<h3>Logout</h3>
        </Link>
        </div>
        </div>
        </div>
        
}</div>
 </nav>
        </div>
    </header>




</div>


     )
};
 
export default Navbar;