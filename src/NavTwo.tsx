
import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./store";




interface Props{
   
}

const NavTwo: React.FC<Props>=(props) => {
   
    const isSidebar = useAppSelector((state) => state.sidebar.isSidebarOpen );
    const dispatch = useDispatch();
    return (
        <div className="sticky py-2.5  bg-white h-14  shadow-lg  top-13.45 inset-x-0 z-10 ">
        <nav   onClick={() => dispatch({type:"sidebar/boolean",payload:!isSidebar}) }>
            <button>
                <IoReorderThreeOutline className="w-8 h-8 mr-6 ml-8 "  />
            </button>
        </nav>
        </div>
    );

};
NavTwo.defaultProps={
}

export default React.memo(NavTwo);
