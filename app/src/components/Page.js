import React, { useState } from 'react'
import "./Page.css"
export default function Page({elementsCount}) {
    const [text,settext]=useState("enter text");
    const textchng = (event) => {
        
      
        settext(event.target.value); 
        
      };
     
    return (
        <div className='contanier' style={{marginTop:"10px"}}>
            <div className=" d-flex rectangle6" >
                <div className="p-6 chatbox   d-flex flex-shrink-1 border-start" >
                    <div className="name" style={{
                        border: "2px solid transparent",
                        padding: "0 10px",
                        borderRadius: "50%",
                        backgroundColor: "#d6d0d0cc",
                        margin: "2px 7px 9px 7px ",
                        
                        width:"11%"
                    }}>V</div>
                    <div>
                        <div >Name</div>

                    </div>
                </div>
                {elementsCount>0?(     
                Array(elementsCount).fill(0).map((_, index) => (
                       
                       <div  key={index} className="p-6 chatbox   d-flex flex-shrink-1 border-start" >
                           <div className="name" style={{
                               border: "2px solid transparent",
                               padding: "0 10px",
                               borderRadius: "50%",
                               backgroundColor: "#d6d0d0cc",
                               margin: "2px 7px 9px 7px ",
       
                           }}>V</div>
                           <div>
                               <div >Name</div>
       
                          
                  
       
       
                   </div></div>))
                ):<div></div>
              }

            </div>
            
            <div className='rectangle1'>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" value = {text}  aria-label="text"onChange = {textchng} id="floatingTextarea"></textarea>
                   
                </div>
            </div>
        </div>

    )
}
