import { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import { login as loginApi } from "../../auth/AuthService";
import useAuth from "../../auth/useAuth";

export default function LoginPage() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginApi(form);
      login(res.data?.data, res.data?.data?.token);
      navigate("/", replace);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="">
      <div className="bg-white">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="bg-slate-400">
            <label>email</label>
            <input name="email" onChange={handleChanges} className="border" type="text" />
          </div>
          <div className="bg-slate-400">
            <label>password</label>
            <input name="password" onChange={handleChanges} className="border" type="text" />
          </div>
          <button type="submit" className="bg-slate-400 px-2 py-1 rounded">
            Login
          </button>
        </form>
        <p>
          Dont have a account? <Link to={"/register"}>register</Link>
        </p>
      </div>
    </div>
  );
}
