import type { InputFormProps } from "../../../../types/type";
import Input from "./Input";
import Label from "./Label";

function InputForm({ id, label, type, placeholder }: InputFormProps) {
  return (
    <>
      <Label htmlfor={id}>{label}</Label>
      <Input type={type} placeholder={placeholder} id={id} />
    </>
  );
}

export default InputForm;
