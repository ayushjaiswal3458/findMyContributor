import React from "react";
import {
  Switch,
  Route,
  // Link,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
// import Avatar from "./components/Avatar/Avatar";
// import AppContainerPage from "./pages/AppContainer.page";
// import AuthPage from "./pages/Auth.page";
import NotFoundPage from "./pages/NotFound.page";

import { Suspense } from "react";
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthPageLazy from "./pages/Auth/Auth.lazy.page";

import { useEffect } from "react";
import { LS_AUTH_TOKEN } from "./api/base";

import Nav from "./NavBar";




import NavTwo from "./NavTwo";
import { useAppSelector } from "./store";

import { ImSpinner2 } from "react-icons/im";

import { meSelector } from "./selectors/auth.selectors";
import { useDispatch } from "react-redux";
import {  userFetchAction } from "./actions/auth.action";


// import DashboardPage from "./pages/Dashboard.page";
// import LoginPage from "./pages/Login.page";
// import RecordingsPage from "./pages/Recordings.page";
// import SignupPage from "./pages/Signup.page";

// const AppContainerPageLazy=React.lazy(()=>import("./pages/AppContainer/AppContainer.page"));

// const AuthPageLazy=lazy(()=>import("./pages/Auth/Auth.page"));

interface Props {}

const App: React.FC<Props> = (props) => {
  
  const token = localStorage.getItem(LS_AUTH_TOKEN);
 
  const user = useAppSelector(meSelector);
  const dispatch = useDispatch();



  useEffect(() => {
    if (!token) {
      return;
    }

    dispatch(userFetchAction());
  },[]); // eslint-disable-line react-hooks/exhaustive-deps
 
  if (token && !user) {
    return (<div className="bg-indigoish relative flex flex-col justify-center items-center h-screen">
     <ImSpinner2 className="animate-spin absolute text-white w-10 h-10 " />
     <ImSpinner2 className="animate-spin absolute text-white w-14 h-14 " />
     <ImSpinner2 className="animate-spin  absolute text-white w-20 h-20" />
     <ImSpinner2 className="animate-spin  absolute text-white w-24 h-24" />
     <ImSpinner2 className="animate-spin  absolute text-white w-32 h-32" />
     <ImSpinner2 className="animate-spin  absolute text-white w-36 h-36" />
    </div>);
  }
 
  return (
    <>
    
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup"]}>
            {user ? (
              <Redirect to="/dashboard" />
            ) : (
              <Suspense
                fallback={
                  <div className="text-red-500">Loading Auth page....</div>
                }
              >
                {" "}
                <AuthPageLazy  />
              </Suspense>
            )}
          </Route>
          <Route
            path={[
              "/dashboard",
              "/recordings",
              "/profile",
              "/groups",
              "/people",
              "/people/:id",
              "/groups/:groupId",
              "/batch/:batchNumber/lecture/:lectureNumber",
            ]} exact
          >
            <Nav  />
            <NavTwo />
            <Suspense
              fallback={
                <div className="text-red-500">
                  Loading APP CONTAINER PAGE...
                </div>
              }
            >
              {user ? (
                <AppContainerPageLazy  />
              ) : (
                <Redirect to="/login" />
              )}
            </Suspense>
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </>
  );
};
App.defaultProps = {};

export default React.memo(App);
