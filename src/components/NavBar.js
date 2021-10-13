import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBar, AdminSideBar } from "./SideBarData";

import "./NavBar.css";
import { IconContext } from "react-icons";
import { Auth } from "aws-amplify";
import { AmplifySignOut } from "@aws-amplify/ui-react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false,
      Auth: "",
    };
  }
  getData = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const groups =
        user.signInUserSession.accessToken.payload["cognito:groups"];
      console.log("Admin", groups.includes("Admin"));
      if (groups.includes("Admin")) {
        this.setState({ Auth: "Admin" });
        return "Admin";
      } else {
        this.setState({ Auth: "Client" });
        return "Client";
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    const result = this.getData();
    console.log(result);
  }

  showSideBar = () => {
    this.setState({ sidebar: true });
  };

  hideSideBar = () => {
    this.setState({ sidebar: false });
  };

  render() {
    return this.state.Auth === "Admin" ? (
      <>
        <IconContext.Provider value={{ color: "#F0EDE4" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars
                onClick={() => {
                  this.showSideBar();
                }}
              />
            </Link>
            <h1 className="Title">Savvy Interiors Admin</h1>
          </div>
          <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
            <ul
              className="nav-menu-items"
              onClick={() => {
                this.hideSideBar();
              }}
            >
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose
                    onClick={() => {
                      this.hideSideBar();
                    }}
                  />
                </Link>
              </li>
              {AdminSideBar.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <AmplifySignOut />
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    ) : (
      <>
        <IconContext.Provider value={{ color: "#F0EDE4" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars
                onClick={() => {
                  this.showSideBar();
                }}
              />
            </Link>
            <h1 className="Title">Savvy Interiors</h1>
          </div>
          <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
            <ul
              className="nav-menu-items"
              onClick={() => {
                this.hideSideBar();
              }}
            >
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose
                    onClick={() => {
                      this.hideSideBar();
                    }}
                  />
                </Link>
              </li>
              {SideBar.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <AmplifySignOut />
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }
}

export default NavBar;
