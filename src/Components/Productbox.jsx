import React from 'react';

function Productbox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <ima src={props.image} alt=''/>
        </div>
        
        <div className='a-b-text'>
            <h2> {props.title} </h2>
            <button className='productbox-button'>Reserve a Table</button>
        </div>
    </div>
  )
}

export default Productbox;
