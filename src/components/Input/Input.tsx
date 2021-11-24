import React, { InputHTMLAttributes } from "react";
import { FC, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
  theme: "indigo" | "gray" | "blue" | "green" | "yellow";
  themeClasses?:string;
}

const Input: FC<Props> = ({ error,themeClasses,theme, id,touched, className, ...rest }) => {
  if(theme==="indigo"){
    themeClasses="focus:border-indigoish ";
}else if(theme==="gray"){
    themeClasses="focus:border-grayish ";
}else if(theme==="blue"){
    themeClasses="focus:border-blueish ";
}else if(theme==="green"){
    themeClasses="focus:border-greenish ";
}else if(theme==="yellow"){
    themeClasses="focus:border-yellowish ";
}
  return (
    <>
      <div>
          <label htmlFor={id} className="sr-only">
              {id}
          </label>
        <input
        id={id}
          {...rest}
          className={
            " pb-2 pl-8 placeholder-gray-400 border-b-2 outline-none  " +
            themeClasses + " " + className
          }
        ></input>
        {touched && <div className="text-red-500">{error}</div>}
      </div>
    </>
  );
};

Input.defaultProps = {
  theme:"indigo"
};

export default memo(Input);
