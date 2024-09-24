import React from "react";
import { Link } from "react-router-dom";
import PetsIcon from '@mui/icons-material/Pets';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    const handleLogout = () => {
        alert("Logout succesfully!");
        window.localStorage.removeItem("isLogedin");
        navigate('/');
    }

    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <Link to="/" className="d-flex align-item-center col-md-3 px-3 mb-2 md-mb-0 text-decoration-none"> <PetsIcon className="icon" /> Dog Shop <PetsIcon className="icon" /></Link>                   
                  
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link px-2 link-secondary" style={{color: "rgb(64, 64, 185)"}}>Home</Link>
                        </li>
                        <li className="nav-item"> 
                            <Link to="about" className="nav-link px-2" style={{color: "#a04fcf"}}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="login" className="nav-link px-2" style={{color: "rgb(64, 64, 185)"}}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link"><ShoppingCartCheckoutIcon fontSize="small" style={{color: "#a04fcf"}} /></Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={handleLogout} className="nav-link" style={{color: "#a04fcf"}}><ExitToAppIcon fontSize="small" style={{color: "rgb(64, 64, 185)"}}/></Link>
                        </li>
                    </ul>
            </header>
        </div>    
    );
}
