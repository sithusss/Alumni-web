import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNavbar = () => {
    // let url="";
    
    return (
        <>
        <nav className="navbar navbar-expand-lg customNavbar mt-auto">
            <div className="customNavbar__wrapper">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav customNavbar__nav">
                        <li className="nav-item">
                            <NavLink className={({isActive}) => (isActive ? 'active' : 'nav-link')} aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => (isActive ? 'active' : 'nav-link')} to="/about-us">About Us</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className={({isActive}) => (isActive ? 'active' : 'nav-link')} to="/our-events" aria-current="page">
                        {/* <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                        Our Events
                        </NavLink>
                        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href={url}>Action</a></li>
                            <li><a className="dropdown-item" href={url}>Another action</a></li>
                            <li><a className="dropdown-item" href={url}>Something else here</a></li>
                        </ul> */}
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => (isActive ? 'active' : 'nav-link')} to="/scholarships">Scholarships</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => (isActive ? 'active' : 'nav-link')} to="/contact-us">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>           
        </>
    );
};

export default HeaderNavbar;