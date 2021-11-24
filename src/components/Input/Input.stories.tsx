import "../../index.css";
import Input from "../Input/Input";

const FormInput = {
  title: "Input",
  component: Input,
  argTypes: {
    theme: {
      control: { type: "select" },
    }
  }
};

export const Inputs = (args: any) => <Input {...args}></Input>;

Inputs.args = {
  placeholder: "Email address",
  touched:false,
  error:"",
  className: "",
};

export default FormInput;
