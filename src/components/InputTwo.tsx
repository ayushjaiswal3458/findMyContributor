import React from "react";
import { InputHTMLAttributes } from "react";
import {FC, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    touched?:boolean;
    error?:string;
    className?:string;

}

const InputTwo: FC<Props> = ({className,id,touched,error,...rest}) => {
    return (
        <div >
            <div>
            <label htmlFor={id} className="text-gray-600 " >
                {rest.placeholder}*
            </label>
            </div>
        <input id={id} {...rest} className={`rounded-lg border border-gray-400 h-11 w-32 p-2 ${className}` } >
        </input>
        {touched && <div className="text-red-500">{error}</div>}
        </div>
    );
};
    
InputTwo.defaultProps = {

}    

    
export default memo(InputTwo);