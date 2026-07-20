import { Button } from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
        <form action="">
          <div className="mb-6">
            <InputForm
              label="Email"
              id="email"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <InputForm
              label="password"
              id="password"
              type="password"
              placeholder="******"
            />
          </div>
          <Button className="bg-slate-800">Login</Button>
        </form>
    )
}

export default FormLogin;