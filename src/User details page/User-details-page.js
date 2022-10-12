import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Dashboard/dashboard.scss';
import './User details page.scss';
import Navbar from "../Navbar/navbar";

const UserDetailsPage = () => {
const [switchClick, setSwitchClick] = useState(true)
const [data, setData] = useState([])

useEffect( () => {
//getting data from local storage
  const fetchData = async()=>{
    let unParsedDataFromLocalDb = localStorage.getItem("localDb");
    const DataFromLocalDb = await JSON.parse(unParsedDataFromLocalDb);
     setData(DataFromLocalDb.slice(0,1))
}
      fetchData()

    }, [])
console.log(data.slice(0,1))
/*  let x =  await JSON.parse(localStorage.getItem("localDb"))
    setData(x)*/


return ( <div className='UserDetailsPage'>
    {/* Importing Navbar component */}
<Navbar />
 {/* pc side Navbar component */}
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
    <i className="fi fi-sr-clipboard list"></i>
      Audit Logs
    </button>
</div>
</div>


</div>


        </div>

        <Link to='/'>
          <div className='logout'>
        <span className="material-icons">
logout
</span>
<h3>Logout</h3>
       </div>
        </Link>
        
</div>
{/* Main body of user details */}
<div className='main-body'>
  <div className='details-head-nav'>
  
      <Link to="/UserPageFilter">
         <div className='back-btn'>
<span className="material-icons-outlined">keyboard_backspace</span>
 <p>Back to Users</p> 
     </div> 
      </Link >

   <div >
<h2>User Details</h2>
    <div className='buttons'>
    <button>BLACKLIST USER</button>
    <button>ACTIVATE USER</button>
  </div>
   </div>


  </div>
  {data.map(info=>{

  return(
    <div key="1">
       <div className='details-head'>
<div className='details-head-info'>
 <div><i className="fi fi-rr-user"></i></div>
 <div className='name-heads'>
  <div className='name'>
<h2>Grace Effiom</h2>
<p>jnskdfksdjsk</p>
  </div>
  <div className='name'>
<h2>Users Tier</h2>
<div className='stars'>
<span className="material-icons">
star_rate
</span>
<span className="material-icons">
star_outline
</span><span className="material-icons">
star_outline
</span>
</div>
  </div>
  <div className='name'>
<h2>N200,000.00</h2>
<p>0066507258 / Access Bank</p>
  </div> 
  </div>   
  </div>

  <div className='details-head-switch'>
<button>General Details</button>
<button>General Details</button>
<button>General Details</button>
<button>General Details</button>
<button>General Details</button>
<button>General Details</button>
  </div>
 


</div>

<div className='details-info-body'>
<section>
  <h2>Personal Information</h2>

  <div className='section-info'>
    <div className='section-data'>
<p>FULL NAME</p>
<h3>Grace Effiom</h3>
    </div>

    <div className='section-data'>
<p>FULL NAME</p>
<h3>Grace Effiom</h3>
    </div>

    <div className='section-data'>
<p>FULL NAME</p>
<h3>Grace Effiom</h3>
    </div>

    <div className='section-data'>
<p>FULL NAME</p>
<h3>Grace Effiom</h3>
    </div>
  </div>

</section>

<section>
  <h2>Personal Information</h2>

  <div className='section-info'>
    <div className='section-data'>
<p>FULL NAME</p>
<h3>Grace Effiom</h3>
    </div>

    <div className='section-data'>
<p>FULL NAME</p>
<h3>Grace Effiom</h3>
    </div>

    <div className='section-data'>
<p>FULL NAME</p>
<h3>Grace Effiom</h3>
    </div>

    <div className='section-data'>
<p>FULL NAME</p>
<h3>Grace Effiom</h3>
    </div>
  </div>

</section>

</div>
    </div>
  )
})}
 


</div>



    </div> );
}
 
export default UserDetailsPage;