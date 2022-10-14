import React,  {useState } from 'react'
import { FaBars, FaTimes} from "react-icons/fa"
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks} from "./navbarElements";
import logo from "../../images/logo.svg";

export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
    return (
          <Nav click={click}>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon src={logo}/>
                </NavLogo>
                <MobileIcon onClick = {handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </MobileIcon>
            </NavbarContainer>
            <NavMenu onClick={handleClick} click ={click}>
                    <NavItem>
                        <NavLinks to = "/">Dashboard</NavLinks>
                    </NavItem>
            </NavMenu>
        </Nav>
    )
};