import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import Logo from "../images/logo.png"
import { links } from "../data"
import { GoThreeBars } from "react-icons/go"
import { MdOutlineClose } from "react-icons/md"
import "./navbar.css"

const Navbar = () => {

    const [ isNavShowing, setisNavShowing ] = useState(false);

    // const showing = () => {
    //      setisNavShowing = !isNavShowing
    //      return setisNavShowing
    // }

    // const toggleNav = () => setisNavShowing(!isNavShowing);
    const toggleIsNavShowing = () => {
        setisNavShowing(prev => !prev);
      };

      const setFalse = () => {
        setisNavShowing(false)
      };
      
  return (
    <nav>
        <div className="container nav__container">
            <Link to ="/" className="logo">
                <img src={Logo} alt="Nav logo" onClick = {setFalse} />
            </Link>
            <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key = {index}>
                                <NavLink to={path} className = {({isActive}) => isActive ? "active-nav" : ""} onClick= {toggleIsNavShowing}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn" onClick= {toggleIsNavShowing}>
                {
                    isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar













// function activeNav(isActive) {
//     return isActive ? "active-nav" : "";
//   }
  
//   <NavLink to={path} className={activeNav}>{name}</NavLink>


// const activeNav = function(isActive) {
//     return isActive ? "active-nav" : "";
//   };
  
//   <NavLink to={path} className={activeNav}>{name}</NavLink>
  
  