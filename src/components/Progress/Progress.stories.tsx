
import "../../index.css";
import Progress from "./Progress";


const ProgressBar = {
    title:'Progress bar',
    component:Progress,
    argTypes:{
        theme:{
            control: { type:"select"}
        },
        counter: {
            control: {
                type: 'range', min: 4, max: 100, step: 4
            },
        },

    }
    


};

export const main = (args:any) => (<Progress {...args}></Progress>);

main.args={
    
    counter:0,
    className:""
};

export default ProgressBar;