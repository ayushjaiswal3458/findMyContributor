
import {FC, memo } from "react";

import { Link } from "react-router-dom";
import { useAppSelector } from "../store";


interface Props{
    className?:string;
}

const Sidebar: FC<Props> = ({className}) => {
    const isSidebar = useAppSelector((state) => state.sidebar.isSidebarOpen );
    
    return (
        <div className={`${className} ${isSidebar && " -translate-x-48 transform duration-1000"}  ${!isSidebar && "translate-x-0 transform duration-1000"} `}>
        <div className={`h-full w-48 pr-5 flex flex-col   bg-gray-200  ` }>
        <button className=" mt-6 rounded-lg hover:bg-indigoish hover:text-white " ><Link to ="/dashboard" >Dashboard</Link></button>
            <button className=" mt-6 block rounded-lg hover:bg-indigoish hover:text-white " ><Link to ="/groups" >groups</Link></button>
            <button className=" mt-6 block rounded-lg hover:bg-indigoish hover:text-white " ><Link to ="/people" >Users</Link></button>
            
        </div>
        </div>
    );
};
    
Sidebar.defaultProps = {

}    

    
export default memo(Sidebar);