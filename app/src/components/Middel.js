import React from 'react'
import { useState } from 'react';

export default function Middel({elementsCount}) {
  
  return (
        <div className="d-none d-lg-flex flex-column  ps-4 pt-3 " style={{height: "100vh",width:"20%"}}>
          {elementsCount>0?(     
                Array(elementsCount).fill(0).map((_, index) => (
                       <div  key={index} className="border m-2">Name</div>))
                ):<div></div>
              }
    </div>
  )
}