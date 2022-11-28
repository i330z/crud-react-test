import { useEffect } from "react";
import { Link } from "react-router-dom";
import { logOutUser } from "../../config/auth";
import './navbar.css'
const Navbar = ({ isAuth }) => {

    const logOut = async() =>{
        await logOutUser()
      }

    return ( 
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">Home</Link>
                {isAuth ? <Link to="/create-list">Create List</Link>: ''}
                <Link to="/listing">Listing</Link>
                { !isAuth ? <Link to="/register">Register</Link> : ''}
                { !isAuth ? <Link to="/login">Login</Link> : ''}
                {isAuth ? <button className="m-2 btn btn-danger" onClick={logOut}>SignOut</button>:''}
            </nav>
        </div>
     );
}
 

export default Navbar;