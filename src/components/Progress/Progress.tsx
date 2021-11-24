import React from "react";
import {FC, memo } from "react";

interface Props{
className:string;

theme: "indigo" | "gray" | "blue" | "green" | "yellow";
counter:number;

}

const Progress: FC<Props> = ({className,counter,theme}) => {
    const percent= ((counter/85.5)*100).toFixed();

    let themeClasses = " ";
    if(theme==="indigo"){
        themeClasses=" bg-indigoish  ";
    }else if(theme==="gray"){
        themeClasses=" bg-grayish ";
    }else if(theme==="blue"){
        themeClasses=" bg-blueish ";
    }else if(theme==="green"){
        themeClasses=" bg-greenish ";
    }else if(theme=== "yellow"){
        themeClasses=" bg-yellowish  ";
    }
    return (
        <div>
        
        <div className={"rounded-full  bg-gray-100 w-85.5 h-3 " + className }>
        <div className={"absolute right-4 bottom-2 text-indigoish "}>{percent}%</div>
            <div className={" h-3 rounded-full w-" + counter + " " + themeClasses } ></div>
        </div>
        
        </div>
    );
};
    
Progress.defaultProps = {
    theme:'indigo'
}    

    
export default memo(Progress);