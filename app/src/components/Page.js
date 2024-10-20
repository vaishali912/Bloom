import React, { useState } from 'react';
import './Page.css';

export default function Page({ elementsCount, isSidebarExpanded }) {
  const [text, setText] = useState("enter text");

  const textChng = (event) => {
    setText(event.target.value);
  };

  return (
    <div className= 'container' style={{ marginTop: "10px" }}>
      <div className={`d-flex rectangle6 ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="p-6 chatbox d-flex flex-shrink-1 border-start">
          <div className="name" style={{ border: "2px solid transparent" }}>
            <div style={{ display: "flex" }}>
              <div><img src="./avatar.png" alt="avatar" style={{ height: "36px", width: "43px" }} /></div>
              <div><img src="./avatar.png" alt="avatar" style={{ height: "36px", width: "43px" }} /></div>
              <div><img src="./avatar.png" alt="avatar" style={{ height: "36px", width: "43px" }} /></div>
            </div>
          </div>
          <div><div>Name</div></div>
        </div>
        {elementsCount > 0 ? (
          Array(elementsCount).fill(0).map((_, index) => (
            <div key={index} className="p-6 chatbox d-flex flex-shrink-1 border-start">
              <div className="name" style={{ border: "2px solid transparent" }}>
                <img src="./avatar.png" alt="avatar" style={{ height: "36px", width: "25px" }} />
              </div>
              <div><div>Name</div></div>
            </div>
          ))
        ) : <div></div>}
      </div>

      <div className={`rectangle1 ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
        <div className='chat' style={{ overflowY: "auto", height: "90%" }}>
          <div className='text left'>HI everyone</div>
          <div className='text right'>HI everyone</div>
        </div>
        <div className='d-flex send'>
          <div style={{ width: "100%" }}>
            <textarea className="send1" type="textarea" value={text} onChange={textChng}></textarea>
          </div>
          <img src="./send.png" alt="send" />
        </div>
      </div>
    </div>
  );
}
