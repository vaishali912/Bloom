import React, { useState } from 'react';
import './Dashboard.css';
import './Page.css';
import Navbar from './Navbar';  
import Slidebar from './Slidebar';  
import Page from './Page';

const Icon = ({ children }) => (
  <span className="icon">{children}</span>
);

export default function Dashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(prevState => !prevState);
  };

  return (
    <div className="dashboard">
      <aside className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="header">
          {isSidebarExpanded && <a className="navbar-brand" href="#"><img src="./Bloom icon.png" alt="icon" style={{ height: "70px", width: "60px" }} /></a>}
          <button onClick={toggleSidebar} className="toggle-button">
            <Icon>{isSidebarExpanded ? <i className="fa-solid fa-arrow-left"></i> : <i className="fa-solid fa-arrow-right"></i>}</Icon>
          </button>
        </div>
        <nav className="nav">
          <NavItem icon={<Icon>◫</Icon>} label="Dashboard" expanded={isSidebarExpanded} />
          <NavItem icon={<Icon><i className="fa-solid fa-house"></i></Icon>} label="Notification" expanded={isSidebarExpanded} />
          <NavItem icon={<Icon><i className="fa-solid fa-message"></i></Icon>} label="Chat" expanded={isSidebarExpanded} />
          <NavItem icon={<Icon><i className="fa-solid fa-chart-bar"></i></Icon>} label="Analytics" expanded={isSidebarExpanded} />
          <NavItem icon={<Icon><i className="fa-solid fa-folder"></i></Icon>} label="Files" expanded={isSidebarExpanded} />
          <NavItem icon={<Icon><i className="fa-solid fa-question"></i></Icon>} label="Help & Support" expanded={isSidebarExpanded} />
        </nav>
        <div className="footer">
          <NavItem icon={<Icon><i className="fa-solid fa-user"></i></Icon>} label="User" expanded={isSidebarExpanded} />
          <NavItem icon={<Icon>↪</Icon>} label="Logout" expanded={isSidebarExpanded} />
        </div>
      </aside>
      <main className={`main-content ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
        <Navbar className={`${isSidebarExpanded ? 'expanded' : 'collapsed'}`} />
        <Page elementsCount={0} isSidebarExpanded={isSidebarExpanded} />
      </main>
      <div className='slide2'><Col></Col></div>
      
    </div>
  );
}

function NavItem({ icon, label, expanded }) {
  return (
    <div className={`nav-item ${expanded ? 'expanded' : 'collapsed'}`}>
      {icon}
      {expanded && <span className="nav-label">{label}</span>}
    </div>
  );
}
function Col(){
  return (
    <>
  <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        <i className="fa-solid fa-bars" style={{ height: "4%", fontSize: "28px", marginTop: "4px" }}></i>
      </button>

     
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style={{ backgroundColor: "#374151", width: "250px" }}>
        <div className="offcanvas-header">
          
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body">
          
          <div className="image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
            <img src={("./Bloom icon.png")} alt="Bloom Icon" style={{ height: "70px", width: "60px" }} />
          </div>

         
          <nav className="nav">
            <NavItem icon={<Icon>◫</Icon>} label="Dashboard" expanded={true} />
            <NavItem icon={<Icon><i className="fa-solid fa-house"></i></Icon>} label="Notification" expanded={true} />
            <NavItem icon={<Icon><i className="fa-solid fa-message"></i></Icon>} label="Chat" expanded={true} />
            <NavItem icon={<Icon><i className="fa-solid fa-chart-bar"></i></Icon>} label="Analytics" expanded={true} />
            <NavItem icon={<Icon><i className="fa-solid fa-folder"></i></Icon>} label="Files" expanded={true} />
            <NavItem icon={<Icon><i className="fa-solid fa-question"></i></Icon>} label="Help & Support" expanded={true} />
          </nav>

          
          <div className="footer">
            <NavItem icon={<Icon><i className="fa-solid fa-user"></i></Icon>} label="User" expanded={true} />
            <NavItem icon={<Icon>↪</Icon>} label="Logout" expanded={true} />
          </div>
        </div>
      </div>
      </>
            );
}
