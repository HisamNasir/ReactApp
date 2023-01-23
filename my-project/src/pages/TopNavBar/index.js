import React from "react";
import "../../Routers/index";
import { Link, NavLink} from "react-router-dom";

const TopNavBar = () => {
  return (
    <header>
              <div className="logoarea">
            <img src="https://ahgroup-pk.com/assets/images/logos/ah-logo.png" className="logo" alt="logo"/>
          </div>
          <nav className="MainNavbar">

                <Link className="navmenubtn" to="/">Home</Link>

                <NavLink className="navmenubtn" to="/About">About</NavLink>

                <NavLink className="navmenubtn" to="/Approvals">Approvals</NavLink>

                <NavLink className="navmenubtn" to="/Blog">Blog</NavLink>

                <NavLink className="navmenubtn" to="/Careers">Careers</NavLink>

                <NavLink className="navmenubtn" to="/Contact">Contact</NavLink>

                <NavLink className="navmenubtn" to="/Projects">Projects</NavLink>

                <NavLink className="navmenubtn" to="/Services">Services</NavLink>

          </nav>
    </header>
  )
}

export default TopNavBar