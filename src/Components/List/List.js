import React from 'react'
// styles
import './List.css';

const List =({pageOfItems})=>{
    return(
    <div>
        <div className='item-container'>
                <div className='item-row'>
                    <div className='item'> 
                        <h1>Name of Food Truck</h1>
                    </div>  
                    <p className='item-price green'>Opens At</p>
                    <p className='item-volume red'>Closes At</p>
                    <p className='item-marketcap'>Address</p>
                </div>
        </div>
        {pageOfItems.map((item,index) =>(
            <div className='item-container' key={index}>
                <div className='item-row'>
                    <div className='item'> 
                        <h1>{item.applicant}</h1>
                    </div>  
                    <p className='item-price green'>{item.starttime}</p>
                    <p className='item-volume red'>{item.endtime}</p>
                    <p className='item-marketcap'>{item.location}</p>
                </div>
            </div>)
        )}
    </div>
   )
}

export default List