import React, { useState } from "react";
import dog7 from "../../image/dog7.png";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();


    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
    };


    return (
        <div className="container-fluid">
            <div>
                <img src={dog7} alt="sitDog" className="sitImage"/>
            </div>
            <div className="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content-register rounded-5 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 class="fw-bold mb-0">Register</h2>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="modal-form" onSubmit={handleOnSubmit}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control rounded-4" id="floatingInput"  name="name" value={data.name} onChange={(e) => setData({...data, [e.target.name]: e.target.value})} placeholder="Full Name" />
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control rounded-4" id="floatingInput"  name="email" value={data.email} onChange={(e) => setData({...data, [e.target.name]: e.target.value})} placeholder="Email address" />
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control rounded-4" id="floatingPassword"  name="password" value={data.password} onChange={(e) => setData({...data, [e.target.name]: e.target.value})} placeholder="Password" />
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control rounded-4" id="floatingInput"  name="passwordConfirm" value={data.passwordConfirm} onChange={(e) => setData({...data, [e.target.name]: e.target.value})} placeholder="Password Confirm" />
                            </div>
                            <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Register</button>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
