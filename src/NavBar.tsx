import React from "react";
import {FC, memo } from "react";

import UserProfileDropdown from "./UserProfileDropdown";


interface Props{
    className?:string;
    
}

const Nav: FC<Props> = ({className}) => {
    var ClassNames = require('classnames');
    return (
        <nav className={ClassNames("bg-navColor justify-between  fixed  h-13.45 p-1 flex inset-x-0  z-20" , className)}>
            <div className="flex items-center py-px pl-7">
            <img src="/navLogo.svg" alt="" className="w-8.75   h-8.75 " />
            <h2 className="pl-1 text-2xl font-semibold text-white">findMyContributor</h2>
            </div>
            <UserProfileDropdown  className="relative py-2 ml-4 mr-5" />
        </nav>
    );
};
    
Nav.defaultProps = {

}    

    
export default memo(Nav);