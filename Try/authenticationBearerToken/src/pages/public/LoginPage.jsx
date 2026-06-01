import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginSer } from "../../auth/authServices";
import useAuth from "../../auth/useAuth";

export default function LoginPage() {
    const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
        const res = await loginSer(form);
        login(res.data.data, res.data.data.token);
        navigate("/");
    } catch (err) {
        console.error(err);
    }
  }

  const handleChanges = (e) => {
    e.preventDefault();

    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
  }

  return (
    <div className="flex bg-slate-200 h-screen justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl text-center">
        <h1 className="mb-6 text-2xl font-bold">Login Page</h1>
        <div className="flex flex-col mb-2">
          <label>Email</label>
          <input onChange={handleChanges} name="email" value={form.email} className="border-2 rounded-sm" type="email" />
        </div>
        <div className="flex flex-col mb-2">
          <label>Password</label>
          <input onChange={handleChanges} name="password" value={form.password} className="border-2 rounded-sm" type="password" />
        </div>
        <p className="mb-2">
          Dont have a Account?{" "}
          <Link to={"/register"} className="text-blue-600">
            Register
          </Link>
        </p>
        <button
          className="px-3 py-1.5 rounded-md bg-blue-600 text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
