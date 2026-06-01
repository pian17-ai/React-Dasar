import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerSer } from "../../auth/authServices";

export default function RegisterPage() {
    const [form, setForm] = useState({
        full_name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            await registerSer(form);
            navigate("/login");
        } catch (err) {
            console.error(err);
        }
    }

    const handleChanges = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

  return (
    <div className="flex bg-slate-200 h-screen justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl text-center">
        <h1 className="mb-6 text-2xl font-bold">Register Page</h1>
        <div className="flex flex-col mb-2">
          <label>Full Name</label>
          <input onChange={handleChanges} name="full_name" value={form.full_name} className="border-2 rounded-sm" type="twxt" />
        </div>
        <div className="flex flex-col mb-2">
          <label>Email</label>
          <input onChange={handleChanges} name="email" value={form.email} className="border-2 rounded-sm" type="email" />
        </div>
        <div className="flex flex-col mb-2">
          <label>Password</label>
          <input onChange={handleChanges} name="password" value={form.password} className="border-2 rounded-sm" type="password" />
        </div>
        <p className="mb-2">
            Have a Account? <Link to={"/login"} className="text-blue-600">Login</Link>
        </p>
        <button
          className="px-3 py-1.5 rounded-md bg-blue-600 text-white"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}
