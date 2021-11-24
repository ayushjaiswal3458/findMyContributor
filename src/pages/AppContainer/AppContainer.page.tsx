
import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

import DashboardPage from "../Dashboard.page";
import LecturePage from "../Lecture.page";

import RecordingPage from "../Recording.page";
import ProfilePage from "../Profile.page";
import GroupsPage from "../Groups.page";
import GroupsDetailsPage from "../GroupDetails.page";
import UsersPage from "../Users.page";
import UserDetailsPage from "../UserDetails.page";
import { useAppSelector } from "../../store";


interface Props {
  
}

const AppContainer: FC<Props> = () => {
  const isSidebar = useAppSelector((state) => state.sidebar.isSidebarOpen );
  return (
    <div className={`flex h-screen  ${isSidebar && "-translate-x-48 transform duration-1000"} ${!isSidebar && "translate-x-0 transform duration-1000"} `}>
      
      <Sidebar className="mt-13.45" />
      
      <Switch>
      
        <Route path="/recording">
          <RecordingPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage className="mt-13.45 "  />
        </Route>
        <Route path="/batch/:batchNumber/lecture/:lectureNumber">
            <LecturePage />
        </Route>
        <Route path="/profile">
            <ProfilePage  />
          </Route>
          <Route path = "/groups" exact>
            <GroupsPage className="mt-13.45 " />
          </Route>
          <Route path = "/people" exact>
            <UsersPage className="mt-13.45 " />
          </Route>
          <Route path = "/people/:id" exact>
            <UserDetailsPage className="mt-13.45 " />
          </Route>

          
          <Route path ="/groups/:groupId" exact>
            <GroupsDetailsPage />
          </Route>
      </Switch>
    </div>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
