
import { useEffect } from "react";
import {FC, memo } from "react";
import Auth from "../shield.webp";

interface Props{

}

const AuthHero: FC<Props> = (props) => {
    
    useEffect(() => {
        
    })
    return (
        <div className="hidden w-1/2 h-screen Auth:inline bg-AuthHero ">
            <img src={Auth} alt="shield" className="object-cover mx-auto my-24 h-96 w-96" />
            
        </div>
    );
};
    
AuthHero.defaultProps = {

}    

    
export default memo(AuthHero);