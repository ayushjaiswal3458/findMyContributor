
import "../../index.css";
import Alerts from "../Alerts.tsx/Alerts";

const Alert = {
    title:'Alert',
    component:Alerts,
    
};

export const Alertss = (args:any) => <Alerts {...args}></Alerts>;

Alertss.args={
    strong:"Primary!",
    children:"Lorem ipsum is sample text",
    theme:"indigo",
    className:"",
};

export default Alert;