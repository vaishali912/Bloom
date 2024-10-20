import React from 'react'

export default function Navbar({ bgchange }) {
  return (
    <nav className="navbar navbar-expand-lg " style={{backgroundColor:"rgba(248, 247, 249, 0.1)",margin:"0"}}>
      <div className="container-fluid" style={{margin:"0 9px"}}>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0 " style={{width:"100%"}}>
            <li className="nav-item" style={{width:"80%"}} >

              <form className="d-flex justify-content-center ms-8" role="search" style={{width:"80%"}}>
                <input className="form-control me-2 w-60" type="search" placeholder="Search" aria-label="Search" style={{width:"80%"}}/>
              </form>

            </li>
            <li className="nav-item" style={{marginRight:"7px",fontSize:"25px"}}>
              <i className="nav-link active fa-solid fa-bolt" ></i>
            </li>
            
            
          </ul>

        </div>
      </div>
    </nav>


  )
}
