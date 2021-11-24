
import { CSSProperties } from "react";
import { HtmlHTMLAttributes } from "react";
import {FC, memo } from "react";

interface Props extends HtmlHTMLAttributes<HTMLImageElement>{
className:string;
src:string;
style:CSSProperties;

}

const Avatar: FC<Props> = ({className,src,style}) => {
    return (
        <img src={src} style={style} alt="avatar " className={"object-cover w-10 rounded-full h-10 "+ className} />
            
        
    );
};
    
Avatar.defaultProps = {

}    

    
export default memo(Avatar);