import React from 'react'

import { useState } from 'react'
import Navbar from './Navbar'
import Slidebar from './Slidebar'
import Middel from './Middel'
import Chatbox from './Chatbox'
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
    <div >
      <div className="h-100 d-flex"  >
        <div className="me-5">
          <Slidebar handlePlusClick={handlePlusClick} elementsCount={elementsCount} />
        </div>
        <div className="h-100 flex-fill">
          <div className="d-flex gap-3 h-100">
            <div className="h-100 flex-fill ps-3">
              <Navbar bgchange={changebg} ></Navbar>
              <div style = {{width:"100%"}}>
              <Page></Page>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
