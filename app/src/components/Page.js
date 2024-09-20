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
                        
                    }}>
                        <div style={{display:"flex"}}>
                            <div><img src = "./avatar.png" alt ="error" style={{height:"36px",width:"43px"}}></img></div>
                            <div><img src = "./avatar.png" alt ="error" style={{height:"36px",width:"43px"}}></img></div>
                            <div><img src = "./avatar.png" alt ="error" style={{height:"36px",width:"43px"}}></img></div>
                        </div></div>
                    <div>
                        <div >Name</div>

                    </div>
                </div>
                {elementsCount>0?(     
                Array(elementsCount).fill(0).map((_, index) => (
                       
                       <div  key={index} className="p-6 chatbox   d-flex flex-shrink-1 border-start" >
                           <div className="name" style={{
                               border: "2px solid transparent",
                              
                           }}> <img src = "./avatar.png" alt ="error" style={{height:"36px",width:"25px"}}></img>
</div>
                           <div>
                               <div >Name</div>
                   </div></div>))
                ):<div></div>
              }
            </div>
            
            <div className='rectangle1'>
                <div className='chat' style={{overflowY:"auto",height:"90%"}}>
                <div className='text left'>
                    HI everyone
                </div>
                <div className='text right'>
                    HI everyone
                </div>
                </div><div className='d-flex send'>
                <div  style={{width:"100%"}}>
                 <textarea className="send1" type = "textarea" value={text} onChange={textchng} ></textarea>
                </div>
                <img src = "./send.png" alt ="error" ></img></div>  
                
            </div>
              
        </div>

    )
}
