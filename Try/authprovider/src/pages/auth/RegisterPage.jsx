import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="">
            <div className="bg-white">
                <h1>Register Page</h1>
                <form>
                    <div className="bg-slate-400">
                        <label>full name</label>
                        <input className="border" type="text"/>
                    </div>
                    <div className="bg-slate-400">
                        <label>email</label>
                        <input className="border" type="text"/>
                    </div>
                    <div className="bg-slate-400">
                        <label>birth date</label>
                        <input className="border" type="date"/>
                    </div>
                    <div className="bg-slate-400">
                        <label>password</label>
                        <input className="border" type="text"/>
                    </div>
                    <button type="submit" className="bg-slate-400 px-2 py-1 rounded">Register</button>
                </form>
                <p>Have a account? <Link to={"/login"}>login</Link></p>
            </div>
        </div>
    )
}