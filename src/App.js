import React, { useState, useEffect} from 'react'
import axios from 'axios'
// Components
import List from './Components/List/List'
import Pagination from './Components/Pagination/Pagination'
// Styles
import './App.css';

const App =()=>{

const [posts, setPost] = useState([])
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);

useEffect(()=>{
const Data = async ()=>{
  // Get the data from API when component initially mounts
const result = await axios('http://data.sfgov.org/resource/bbb8-hzi6.json')
let item = result.data;

// Add zero's to the hours
const addZero=(i)=> {
  if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

// filter data according to the time
const date = new Date();
var h = addZero(date.getHours());
var m = addZero(date.getMinutes());
var j = h + ":" + m;
const filteredItems=item.filter(item=>
      item.start24<j && 
      item.end24>j && 
      item.dayorder===date.getDay().toString() 
      )
    
// Sort the data Alphabetically
const sortItems= filteredItems.sort((a,b)=>{
  var textA = a.applicant.toUpperCase();
  var textB = b.applicant.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    setPost(sortItems)
  }
 Data()
},[])

// Pagination Logic to find index
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// Setting Page index
const paginate = (pageNumber) => setCurrentPage(pageNumber);

return(
  <div className='hotel-app'>
     <h1 className='hotel-text'>Food Trucks Open In San Francisco</h1>
        <List pageOfItems={currentPosts}/>       
        <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
        />
  </div>
  )
}

export default App;