import './User-Table.scss';
import { useState,useEffect } from 'react';

const Table = () => {
const [data, setData] = useState([])
const [isPending, setIsPending] = useState(true)
const [donePending, setDonePending] = useState(false)
const [currentpage, setCurrentpage] = useState(1);
const [infoPerPage, setInfoPerPage] = useState(9);


useEffect( () => {
const fetchData = async () =>{

  await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
  .then((response) => response.json())
  .then((data) => {
    setIsPending(!isPending)
    setDonePending(!donePending)
    let localData = JSON.stringify(data);
    localStorage.setItem("localDb", localData);
    let unParsedDataFromLocalDb = localStorage.getItem("localDb");
    const DataFromLocalDb = JSON.parse(unParsedDataFromLocalDb);
     setData(DataFromLocalDb)
})  
}
fetchData()
    
  }, [])


  //getting current posts
  const indexOfLastInfo = currentpage * infoPerPage;
  const indexOfFirstInfo = indexOfLastInfo - infoPerPage; 
  const currentInfo = data.slice(indexOfFirstInfo,indexOfLastInfo)


    return ( <div>

        {/* loading circle */}
        {isPending && 
  <div className="loader"></div>}
  
{/* Data mapping table */}
        {donePending && 
  <div className="table-container">
<table>
<thead>

        <tr className='person'>
        <th>
            <h4>ORGANISATION</h4>
        <span className="material-icons-outlined">
filter_list
</span>
        </th>
        <th>
            <h4>USERNAME</h4>
            <span className="material-icons-outlined">
filter_list
</span>
        </th>
        <th>
            <h4>STATUS</h4>
        <span className="material-icons-outlined">
filter_list
</span>
        </th>
        </tr>
</thead>
<tbody>
    {currentInfo.map(info=>{


        return(
     <tr key={info.id}>
    <td>{info.orgName}</td>
    <td>{info.userName}</td>
    <td className='active-stat'>active</td>
    <td><span className="material-icons">
more_vert
</span></td>

    </tr> 
        )
    })
  
    }

    </tbody>

    <div className='table-bottom-nav'>
  <div>
    <p>Showing</p>
    <select name="" id="">
        <option value="">100</option>
        <option value="">99</option>
        <option value="">98</option>
    </select>
    <p className='out-of-text'>out of 100</p>
    
</div>      

<div>
<button>
<span class="material-icons-outlined">
arrow_back_ios
</span>
</button>
<p>1</p>
<p>2</p>
<p>3</p>
<p>...</p>
<p>15</p>
<p>16</p>
<button>
<span class="material-icons-outlined">
arrow_forward_ios
</span>
</button>
</div>
    </div>
    </table>



    </div>      }

    {donePending && 
  <div className="tablet-table-container">

<table>
<thead>

        <tr className='person'>
        <th>
            <h4>ORGANISATION</h4>
        <span className="material-icons-outlined">
filter_list
</span>
        </th>
        <th>
            <h4>USERNAME</h4>
            <span className="material-icons-outlined">
filter_list
</span>
        </th>
        <th>
        <h4>EMAIL</h4>
        <span className="material-icons-outlined">
filter_list
</span>
        </th>

        <th>
        <h4>DATE JOINED</h4>
        <span className="material-icons-outlined">
filter_list
</span>
        </th>
        <th>
            <h4>STATUS</h4>
        <span className="material-icons-outlined">
filter_list
</span>
        </th>
        </tr>
</thead>
<tbody>
    {currentInfo.map(info=>{


        return(
     <tr key={info.id}>
    <td>{info.orgName}</td>
    <td>{info.userName}</td>
    <td>{info.email}</td>
    <td>{info.createdAt}</td>
    <td className='active-stat'>active</td>
<td><span className="material-icons">
more_vert
</span></td>
    </tr> 
        )
    })
  
    }

    </tbody>
    <div className='table-bottom-nav'>
  <div>
    <p>Showing</p>
    <select name="" id="">
        <option value="">100</option>
        <option value="">99</option>
        <option value="">98</option>
    </select>
    <p className='out-of-text'>out of 100</p>
    
</div>      

<div>
<button>
<span class="material-icons-outlined">
arrow_back_ios
</span>
</button>
<p>1</p>
<p>2</p>
<p>3</p>
<p>...</p>
<p>15</p>
<p>16</p>
<button>
<span class="material-icons-outlined">
arrow_forward_ios
</span>
</button>
</div>
    </div>
    </table>
    </div>      }

    {donePending && 
  <div className="pc-table-container">

<table>
<thead>

        <tr className='person'>
        <th>
            <h4>ORGANISATION</h4>
        <span className="material-icons-outlined">
filter_list
</span>
        </th>
        <th>
            <h4>USERNAME</h4>
            <span className="material-icons-outlined">
filter_list
</span>
        </th>
        <th>
        <h4>EMAIL</h4>
        <span className="material-icons-outlined">
filter_list
</span>
        </th>
        <th>
        <h4>PHONE NUMBER</h4>
        <span className="material-icons-outlined">
filter_list
</span>
        </th>
        <th>
        <h4>DATE JOINED</h4>
        <span className="material-icons-outlined">
filter_list
</span>
        </th>
        <th>
            <h4>STATUS</h4>
        <span className="material-icons-outlined">
filter_list
</span>
        </th>
        </tr>
</thead>
<tbody>
    {currentInfo.map(info=>{


        return(
     <tr key={info.id}>
    <td>{info.orgName}</td>
    <td>{info.userName}</td>
    <td>{info.email}</td>
    <td>{info.phoneNumber}</td>
    <td>{info.createdAt}</td>
    <td className='active-stat'>active</td>
<td><span className="material-icons">
more_vert
</span></td>
    </tr> 
        )
    })
  
    }

    </tbody>
    <div className='table-bottom-nav'>
  <div>
    <p>Showing</p>
    <select name="" id="">
        <option value="">100</option>
        <option value="">99</option>
        <option value="">98</option>
    </select>
    <p className='out-of-text'>out of 100</p>
    
</div>      

<div>
<button>
<span class="material-icons-outlined">
arrow_back_ios
</span>
</button>
<p>1</p>
<p>2</p>
<p>3</p>
<p>...</p>
<p>15</p>
<p>16</p>
<button>
<span class="material-icons-outlined">
arrow_forward_ios
</span>
</button>
</div>
    </div>
    </table>
    </div>      }

    </div>
    );
}
 
export default Table;
