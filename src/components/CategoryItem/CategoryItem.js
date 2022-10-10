import React from "react";
import "./CategoryItem.css";
import Dropdown from "../Dropdown/Dropdown";
import completedIcon from '../../assets/icons/completed.png'
import bookNow from '../../assets/icons/bookNow.png'
import booked from '../../assets/icons/booked.png'

function CategoryItem({ category }) {

  
  return (
    <div className="item">
      <span className="title">{category.title}</span>
      <div className="options">
        {category.status === 1 ? (
          <div className="d-flex">
          <img src={completedIcon} className='icon' alt=""/>
          <span className="st-completed">Completed</span>
          </div>
        ) : category.status === 2 ? (
          <div className="d-flex">
          <img src={booked} className='icon' alt=""/>
          <span className="st-booked">Booked</span>
          </div>
        ) : (
          <div className="d-flex">
          <img src={bookNow} className='icon' alt=""/>
          <span className="st-book">Book Now</span>
          </div>
        )}
        <Dropdown id={category.id}/>
      </div>
      
    </div>
  );
}

export default CategoryItem;
