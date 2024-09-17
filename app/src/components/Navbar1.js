import React from 'react'

export default function Navbar({bgchange}) {
  return (


    <nav class="navbar navbar-expand-lg border">
      <div class="container-fluid navbar" style={{margin:"0px 60px 0 30px"}}>
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
            <li nav-item><i className="nav-link active fa-solid fa-bolt" style={{ fontSize: "25px",marginRight:"20px"}}></i></li>
            <li ><i className=" nav-link active fa-regular fa-moon" style={{ fontSize: "25px" ,marginRight:"10px"}}></i></li>
            <li >V</li>
            </ul>
        </div>
      </div>
    </nav>
  )
}
