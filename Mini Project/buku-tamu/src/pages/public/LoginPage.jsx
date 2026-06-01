import { useState } from "react";
import { Link } from "react-router-dom";
import { login as loginApi } from "../../auth/authService";
import useAuth from "../../auth/useAuth";

export default function LoginPage() {
  const { login } = useAuth();

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
      login(res.data.data, res.data.data?.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col p-8 text-center rounded shadow-2xl">
        <h1 className="text-2xl font-semibold mb-4">Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 flex flex-col">
            <label>Email</label>
            <input
              name="email"
              onChange={handleChanges}
              className="px-1 border rounded border-gray-400"
              type="email"
            />
          </div>
          <div className="mb-2 flex flex-col">
            <label>Password</label>
            <input
              name="password"
              onChange={handleChanges}
              className="px-1 border rounded border-gray-400"
              type="password"
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white rounded px-3 py-1 m-2">
            Login
          </button>
        </form>
        <p>
          Dont have a account ?{" "}
          <Link className="text-blue-600" to={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
