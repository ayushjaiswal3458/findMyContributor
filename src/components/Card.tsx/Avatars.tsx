
import { FC, memo } from "react";

import Avatar from "./Avatar";

interface Props {
  profiles: string[];
  className?: string;
  
  
}

const Avatars: FC<Props> = ({ profiles, className }) => {
  const profilesArray = profiles;
  let extraProfiles: number;
  if (profilesArray.length > 4) {
    extraProfiles = profilesArray.length - 4;
  } else {
    extraProfiles = 0;
  }
  
  return (
    <div className={" " + className}>
      {/* <div className="flex justify-between ">
        <h6>Placed Order</h6>
        <p className="text-xs tracking-wider transition duration-300 ease-in-out transform bg-opacity-10 px-2.5 py-1.5 rounded-sm hover:-translate-y-1  bg-indigoish text-indigoish">
          IN PROGRESS
        </p>
      </div> */}
      <div className="relative flex mt-6 ">
        {profilesArray.map((child, index) => {
          const distance = index * 2;
          if (index < 4) {
            return (
              <Avatar src={child} className="absolute top-0 transition duration-300 ease-in-out transform border border-white shadow-lg hover:-translate-y-2" style={{left:distance+'rem'}} />
            );
          }
          if (index === (profilesArray.length-1)) {
            return (
              <span
                className={
                  "absolute left-32   text-indigoish bg-white mt-2 shadow-md rounded-full py-1 px-1.75  text-xs   "
                } 
              >
                +{extraProfiles} more
                
              </span>
              
            );
          }
          return 1;
        })}
        
      </div>
      
    </div>
  );
};

Avatars.defaultProps = {
    
};

export default memo(Avatars);
