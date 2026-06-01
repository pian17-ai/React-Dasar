import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col p-8 text-center rounded shadow-2xl">
        <h1 className="text-2xl font-semibold mb-4">Register Page</h1>
        <form>
          <div className="mb-2 flex flex-col">
            <label>Email</label>
            <input className="px-1 border rounded border-gray-400" type="email" />
          </div>
          <div className="mb-2 flex flex-col">
            <label>Name</label>
            <input className="px-1 border rounded border-gray-400" type="text" />
          </div>
          <div className="mb-2 flex flex-col">
            <label>Password</label>
            <input className="px-1 border rounded border-gray-400" type="password" />
          </div>
          <button className="bg-blue-600 text-white rounded px-3 py-1 m-2">Login</button>
        </form>
        <p>Have a account ? <Link className="text-blue-600" to={"/login"}>Login</Link></p>
      </div>
    </div>
  );
}