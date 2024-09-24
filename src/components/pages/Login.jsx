import React, { useState } from "react";
import { Link } from "react-router-dom";
import dog6 from "../../image/dog6.png";
import { useNavigate } from "react-router-dom";



export default function Login() {
 
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleLogin = (e) => {
        e.preventDefault();

        const userData = JSON.parse(localStorage.getItem("user"));

        if (!userData) {
            alert("Please Register First!");
            navigate('/register');
        }

        if (userData.email === data.email) { 
            if (userData.password === data.password) {
                alert(userData.name + " You Are Successfully Logged In");
                window.localStorage.setItem("isLogedin", true);
                navigate("/");
            } else {
                alert("Email or Password is incorrect");
                navigate("/login");
            }
        } else {
            alert("Email or Password is incorrect");
            navigate("/login");
        }
    };


    return (
        <div className="container-fluid">
            <div  className="thinkImage">
                <img src={dog6} alt="thinkingDog"/>
            </div>

            <div className="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-5 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 class="fw-bold mb-0">Sign up</h2>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="modal-form" onSubmit={handleLogin}>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control rounded-4" id="floatingInput"  name="email" value={data.name} onChange={(e) => setData({...data, [e.target.name]: e.target.value})} placeholder="Email address" />
                
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control rounded-4" id="floatingPassword"  name="password" value={data.name} onChange={(e) => setData({...data, [e.target.name]: e.target.value})} placeholder="Password" />
            
                            </div>
                            <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Sign up</button>
                            <small className="text-muted mt-3">If you don't have an account, please <Link to="/register">Register here</Link>.</small> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
