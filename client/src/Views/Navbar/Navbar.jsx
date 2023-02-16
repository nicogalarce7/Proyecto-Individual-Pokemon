import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation} from "react-router-dom";
import { getAllPokemon } from "../../Redux/Petitions";
import "./NavBar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="container_Navbar">
      <div className="title_nav">
        <h2>Pokemon</h2>
      </div>
      <div className="container2">
        <div
          className={open ? "navTogglerOpen" : "navToggler"}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span></span>
        </div>
        <ul className={`${"list"} ${open ? null : "listOpen"}`}>
          <li className="listItem">
            <NavLink
              className={pathname === "/Home" ? "active" : null}
              onClick={() => {
                getAllPokemon(dispatch);
                setOpen(false);
              }}
              to="/Home"
            >
              Home
            </NavLink>
          </li>
          <li className="listItem">
            <NavLink
              className={pathname === "/Create" ? "active" : null}
              onClick={()=>setOpen(false)}
              to="/Create"
            >
              Create Pokemon
            </NavLink>
          </li>
          <li className="listItem">
            <NavLink
              className={pathname === "/About" ? "active" : null}
              onClick={()=>setOpen(false)}
              to="/About"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}
