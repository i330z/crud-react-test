import { Link } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">Home</Link>
                <Link to="/create-list">Create List</Link>
                <Link to="/listing">Listing</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
     );
}
 

export default Navbar;