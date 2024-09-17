import React from 'react'
import "./Slidebar.css"
import { useState } from 'react';
export default function Slidebar({handlePlusClick,elementsCount}) {
  
  
    return (
    <>
     <div className=" slide  position-fixed overflow-hidden start-0 text-white"  style= {{width: "64px", zIndex: "1", padding: "1rem",alignItems:"center",overflowY: "auto",backgroundColor: "#001f3f"}}>
    <button className="fa-solid fa-plus "
    style={{
      border: "2px solid transparent",
      padding: "4px",
      fontSize:"30px",
      borderRadius: "5px",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      margin:"7px 5px 5px "
    }}type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
  </button>
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
        <div className=" slide  position-fixed overflow-hidden start-0 text-white" 
     style= {{width: "64px", zIndex: "1", padding: "1rem", display: "flex", flexDirection: "column",gap: "1rem", height: "100vh",alignItems:"center",overflowY: "auto",backgroundColor: "#001f3f"}}>
      <div><i
    className="fa-solid fa-plus"
    style={{
      border: "2px solid transparent",
      padding: "4px",
      fontSize:"30px",
      borderRadius: "5px",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      margin:"7px 5px 5px "
    }}
    onClick={handlePlusClick}
  /></div>
      <div>
  {Array(elementsCount).fill(0).map((_, index) => (
    <div key={index} ckassName = "name"style={{
      border: "2px solid transparent",
      padding: "5px 13px",  
      borderRadius: "8px",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      margin:"7px 5px 5px 5px ",
      marginBottom:"10px",
    }}>V</div>
  ))}
  
</div>
</div>
</div>
</div>
</>

  );
}


    
