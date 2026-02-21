export default function LoginPage() {

  return (
    <div className="">
      <div className="bg-white">
        <h1>Login Page</h1>
        <form onSubmit={""}>
          <div className="bg-slate-400">
            <label>email</label>
            <input name="email" onChange={""} className="border" type="text" />
          </div>
          <div className="bg-slate-400">
            <label>password</label>
            <input name="password" onChange={""} className="border" type="text" />
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
