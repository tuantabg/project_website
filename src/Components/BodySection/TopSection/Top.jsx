import React from 'react';
import './Top.css';

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to pranti.</h1>
          <p>Hello IsraTech, Welcome Back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default Top;