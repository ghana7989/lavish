import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="container navbar-container">
                    <Link to="/" className="navbar-logo">
                        LAVISH
                    </Link>
                    <div className="menu-icon">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
