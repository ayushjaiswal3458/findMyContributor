import { createContext } from "react";
import { User } from "./models/User";



interface UserContextData {
    user? : User;
    setUser: (u : User ) => void;
}

const UserContext = createContext<UserContextData>({
    user:undefined,
    setUser:() => {}
})

export default UserContext;