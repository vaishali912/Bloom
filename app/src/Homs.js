import React from 'react'

import './components/MAIN.css'
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Frame1 } from './components/Frame1/Frame1';
import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar'

export default function Homs() {
  return (
    <div>
     
    <Slidebar></Slidebar>
     <Navbar></Navbar>
      <div className="rectangle1">
        <div className="rectangle8 form-floating">
          <textarea class="form-control text" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label for="floatingTextarea"></label>
        </div>
      </div >
      <div className="frame2">
        <div className="rectangle7">hi</div>
        <div className="IconPeople">
          <div className= "helpSupport">Help &amp; Support</div>
        </div>
      </div>
   
  


    </div>
  )
}
