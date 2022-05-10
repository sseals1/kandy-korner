import React from "react";
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar_link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar_link" to="/products">Products</Link>
            </li>
        </ul>
    )
}