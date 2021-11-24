
import {FC, memo } from "react";

interface Props{

}

const NotFound: FC<Props> = (props) => {
    return (
        <div className="w-screen h-screen bg-red-400">
            Sorry page not not available.
        </div>
    );
};
    
NotFound.defaultProps = {

}    

    
export default memo(NotFound);