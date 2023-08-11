import React from 'react';
import './Listing.css';

// Imported Icons =======>
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

// Imported Image =======>
import image_01 from '../../../Assets/image_01.jpg';
import image_02 from '../../../Assets/image_02.jpg';
import image_03 from '../../../Assets/image_03.jpg';
import image_04 from '../../../Assets/image_04.jpg';


const Listing = () => {
  return (
    <div className='listingSection'>
      
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={image_01} alt="Image Name" />
          <h3>Strawberry</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={image_02} alt="Image Name" />
          <h3>Strawberry</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={image_03} alt="Image Name" />
          <h3>Strawberry</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={image_04} alt="Image Name" />
          <h3>Strawberry</h3>
        </div>

      </div>
      
    </div>
  )
}

export default Listing;