import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../auth/AuthService";

export default function RegisterPage() {
    const [form, setForm] = useState({
        full_name: "",
        email: "",
        birth_date: "",
        password: ""
    });

    const handleChanges = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        register(form);
    }

    return (
        <div className="">
            <div className="bg-white">
                <h1>Register Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="bg-slate-400">
                        <label>full name</label>
                        <input name="full_name" onChange={handleChanges} className="border" type="text"/>
                    </div>
                    <div className="bg-slate-400">
                        <label>email</label>
                        <input name="email" onChange={handleChanges} className="border" type="text"/>
                    </div>
                    <div className="bg-slate-400">
                        <label>birth date</label>
                        <input name="birth_date" onChange={handleChanges} className="border" type="date"/>
                    </div>
                    <div className="bg-slate-400">
                        <label>password</label>
                        <input name="password" onChange={handleChanges} className="border" type="text"/>
                    </div>
                    <button type="submit" className="bg-slate-400 px-2 py-1 rounded">Register</button>
                </form>
                <p>Have a account? <Link to={"/login"}>login</Link></p>
            </div>
        </div>
    )
}