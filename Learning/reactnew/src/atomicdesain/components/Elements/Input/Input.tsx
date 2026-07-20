import type { InputProps } from "../../../../types/type";

const Input = ({
  type = "text",
  placeholder = "input",
  id = "",
}: InputProps) => {
  return (
    <input
      id={`${id}`}
      type={`${type}`}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700"
      placeholder={`${placeholder}`}
    />
  );
};

export default Input;
