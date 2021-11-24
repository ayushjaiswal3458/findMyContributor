import Button from "./Button";

import OutlineButton from "./OutlineButton";


 const Solid= {
    title: "Buttons",
    component: Button,
    argTypes: {
        theme: {
            control: {type: "select"}
        }
    }
};
 const Outline= {
    title: "Outline Button",
    component: OutlineButton,
    argTypes: {
        theme: {
            control: {type: "select"}
        }
    }
};

export const Solids = (args: any) => <Button {...args}></Button>;

export const Outlined = (args:any) => <OutlineButton {...args}></OutlineButton>;


Solids.args ={
    children: "Sign in",
    type:"submit",
    className:"",
}

Outlined.args = {
    children:"Sign in",
    type:"submit",
    className:""
}

export default Solid;