import "../../index.css";

import Avatars from "./Avatars";

const Avt = {
  title: "Avatars",
  component: Avatars,
  argTypes: {
    theme: {
      control: { type: "select" },
    }
  }
};

export const Avatar = (args: any) => <Avatars {...args}></Avatars>;

Avatar.args = {
  profiles:[],
  
  className: "",
};

export default Avt;
