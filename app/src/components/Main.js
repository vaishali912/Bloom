import React from 'react'
import './MAIN.css'
import { useState } from 'react'
import Navbar from './Navbar'
import Slidebar from './Slidebar'


import Page from './Page'
export default function Main() {
  const [elementsCount, setElementsCount] = useState(0);
  const [bgcolor, setbgcolor] = useState("#FFFFF0");
  const [textcolor,settextcolor] = useState("black");
  const changebg = () => {
    if (bgcolor === "#FFFFF0") {
      setbgcolor("#333333")
      settextcolor("white")
    }
    else {
      setbgcolor("#FFFFF0")
      settextcolor("black")
    }
  }
  const handlePlusClick = () => {
    setElementsCount(elementsCount + 1);
  };
  return (
    <div style={{height:"100%"}} >
      <div className="h-100 d-flex"  >
        <div className='slide3' style={{width:"3.1%"}} >
          <Slidebar handlePlusClick={handlePlusClick} elementsCount={elementsCount} />
        </div>
        <div className="h-100 flex-fill" style={{width:"7%"}}>
          <div className="d-flex h-100">
            <div className="h-100 flex-fill ps-3">
              <Navbar bgchange={changebg} ></Navbar>
             <Page elementsCount={elementsCount}></Page>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
