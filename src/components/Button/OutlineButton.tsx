import React, { ButtonHTMLAttributes } from "react";
import {FC, memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: string;
  children:string;
  themeClasses:string;
}

const OutlineButton: FC<Props> = ({ className,theme,themeClasses,children, ...rest }) => {
    if(theme==="indigo"){
        themeClasses="hover:bg-indigoish border-indigoish text-indigoish ";
    }else if(theme==="gray"){
        themeClasses="hover:bg-grayish border-grayish text-grayish ";
    }else if(theme==="blue"){
        themeClasses="hover:bg-blueish border-blueish text-blueish ";
    }else if(theme==="green"){
        themeClasses="hover:bg-greenish border-greenish text-greenish ";
    }else if(theme==="yellow"){
        themeClasses="hover:bg-yellowish  border-yellowish text-yellowish ";
    }
    return (
        <button
      {...rest}
      className={
        "  rounded-md  px-5 py-1.75  text-sm border duration-200  hover:shadow-xl ease-in-out hover:text-white hover:transform " +
        themeClasses! +
        className
      }
    >
      {children}
    </button>
    );
};
    
OutlineButton.defaultProps = {
theme:"indigo"
}    

    
export default memo(OutlineButton);