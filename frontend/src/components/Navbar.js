import React from "react";
import logo from '../img/logo-100.png'
function Navbar() {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    function logout() {
        localStorage.removeItem("currentUser")
        window.location.href="/login";
    }

    return (
        <div className="header">
            <nav className="nav d-flex align-items-center justify-content-center gap-5">
                <h1 className="nav-title"><a href="/home"><img className="me-2" width = "75" height = "75" src ={logo}/>TourEase</a></h1>

                <div className="nav-menu">
                    <a href="/home" className="home">Home</a>
                    <a href="/about" className="about">About</a>
                    <a href="/contact" className="about">Contact</a>

                    {user ? (<>
                        <div className="dropdown">
                            <button className="nav-name" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa-solid fa-user"></i>
                            {user.name}
                            <i className="fa-sharp fa-solid fa-caret-down"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/profile">Profile</a>
                                <a className="dropdown-item" href="#" onClick={logout}>Logout</a>
                            </div>
                        </div>
                    </>) : (<>
                        <a href="/register" className="pay">Register</a>
                        <a href="/login" className="pay">Login</a>
                    </>)}

                </div>
            </nav>
        </div>
    )
}
export default Navbar;