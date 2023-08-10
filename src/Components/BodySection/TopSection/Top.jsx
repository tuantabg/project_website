import React from 'react';
import './Top.css';

// Imported Icons =======>
import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle } from 'react-icons/tb';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';

// Imported Image =======>
import AdminAvata from '../../../Assets/tuanta_avata.jpg';
import Image_08 from '../../../Assets/image_08.jpg';
import Video from '../../../Assets/video.mp4';

const Top = () => {
  return (
    <div className='topSection'>

      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to pranti.</h1>
          <p>Hello IsraTech, Welcome Back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" aria-label="Search Dashboard"/>
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />

          <div className="adminImage">
            <img src={AdminAvata} alt="Admin Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">

          <h1>Create and sell extraorrdinary product</h1>
          <p>The world's fast growing industry today are natural made products!</p>

          <div className="buttons flex">
            <button className='btn'>Explore More</button>
            <button className='btn transparent'>Top Sellers</button>
          </div>
          
          <div className="videoDiv">
            <video src={Video} autoPlay loop muted></video>
          </div>

        </div>

        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <spall>4 Orders</spall>
                </span>
                <span>
                  This Month <br /> <spall>175 Orders</spall>
                </span>
              </div>

              <span className="flex link">
                Go to my orders
                <BsArrowRightShort className="icon" />
              </span>

            </div>

            <div className="imgDiv">
              <img src={Image_08} alt="Image name" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Top;