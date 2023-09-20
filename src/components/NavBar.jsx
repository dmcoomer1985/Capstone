import { NavLink, Link } from "react-router-dom";
import image from "../Assets/Welcome-to-All-Express-Shoppin-8-27-2023.jpg";
import Brand from "../Assets/Free_Sample_By_Wix.jpg";

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="container">
//                 <div className="logo">
//                   <img src={image} id="center" alt="Header of Webpage" />
//                   <h2 className="centerText">The Best In Fashion and Tech</h2>
//                 </div>
//                 {/* <Brand /> */}
//             </div>
//             <div className="nav-elements">
//                 <ul>
//                     <li>
//                       <NavLink to="/">Home</NavLink>
//                     </li>
//                     <li>
//                     {/* <NavLink to="/signup">Sign Up</NavLink> */}
//                     </li>
//                     <li>
//                     <NavLink to="/products">Products</NavLink>
//                     </li>
//                     <li>
//                     {/* <NavLink to="/about">About</NavLink> */}
//                     </li>
//                     <li>
//                     {/* <NavLink to="/cart">Cart</NavLink> */}
//                     </li>
//                     <li>
//                     <NavLink to="/login">Login</NavLink>
//                     </li>
//                     <li>
//                     <NavLink to="/register">Register</NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     )
// }

// export default Navbar

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      
      <Navbar color="dark" dark {...args}>
        <NavbarBrand href="/"><img
        alt="logo"
        src={Brand}
        style={{
          height: 100,
          width: 100
        }}
      /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem className="nav-item">
              <NavLink  to="/">Home</NavLink>
              {/* <NavLink to="/signup">Sign Up</NavLink> */}
              <NavLink to="/products">Products</NavLink>

             <NavLink to="/about">About</NavLink> 

              <NavLink to="/login">Login</NavLink>

              <NavLink to="/register">Register</NavLink>

              <NavLink to="/cart">Cart</NavLink> 
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="container">
        {" "}
        <div className="logo">
          <img src={image} id="center" alt="Header of Webpage" />
          <h2 className="centerText">The Best In Fashion and Tech</h2>
        </div>{" "}
        {/* <Brand /> */}
      </div>
    </div>
  );
}

export default NavBar;
