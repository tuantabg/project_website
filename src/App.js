import React from 'react';
import Sidebar from './Components/SideBarSection/SideBar';
import Body from './Components/BodySection/Body';
import './app.css';

const App = () => {
  return (
    <div className='container'>
      <Sidebar />
      <Body />
    </div>
  )
}

export default App