import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import  * as FaIcons from "react-icons/fa";
import  * as AiIcons from "react-icons/ai";
import { SideBar } from './SideBarData';
import "./NavBar.css";
import {IconContext} from "react-icons";


function NavBar() {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{color:'#F0EDE4'}}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSideBar}/>
        </Link>
        <h1 className="Title">Savvy Interiors</h1>
      </div>
      <nav className={sidebar ? "nav-menu active": "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SideBar.map((item, index)=>{
              return(
                <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                </li>

              )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBar