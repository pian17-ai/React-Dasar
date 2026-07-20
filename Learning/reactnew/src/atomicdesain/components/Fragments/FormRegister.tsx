import { Button } from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <div className="mb-6">
        <InputForm
          id="username"
          label="Username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="mb-6">
        <InputForm
          id="email"
          label="Email"
          type="text"
          placeholder="user@example.com"
        />
      </div>
      <div className="mb-6">
        <InputForm
          id="password"
          label="password"
          type="text"
          placeholder="******"
        />
      </div>
      <Button className="bg-slate-800">Register</Button>
    </form>
  );
};

export default FormRegister;