function Login() {
  return (
    <div className="container">
      <div className="row justify-content-center m-4">
        <div className="col-md-5">
          <div className="card shadow-sm">
            <div className="card-body">
                <h3 className="text-center">Society Login</h3>
                
                <form>
                    <div className="mt-4">
                        <input type="text" className="form-control" placeholder="Id Card Number" />
                    </div>
                    <div className="mt-4">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button className="btn btn-primary mt-4">Login</button>
                </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;