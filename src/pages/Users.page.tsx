import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPeople } from "../actions/Users.actions";

import { usersSelector } from "../selectors/users.selectors";
import { useAppSelector } from "../store";

interface Props {
  className?: string;
}

const UsersPage: React.FC<Props> = ({ className }) => {
  const users = useAppSelector(usersSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeople());
  }, []);//eslint-disable-line  react-hooks/exhaustive-deps
  if (!users) {
    return <div className="bg-500 w-full h-full z-30">loading</div>;
  }
  return (
    <div className={`${className} p-8 w-full`}>
        <div className="grid md:grid-cols-4 sm:grid-cols-2  w-full grid-cols-1 gap-1 md:gap-4">
      {users &&
        users.map((user) => {
          return (
            <div className="w-36 bg-indigoish flex flex-col shadow-2xl items-center justify-center space-y-4 rounded-lg h-36 ">
              <div>
                <img
                  src={user.profile_pic_url}
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = "/avatar.jpg";
                  }}
                  className="w-20 h-20 shadow-2xl mr-2 rounded-full"
                  alt=" "
                />
              </div>
              <Link to={`/people/${user.id}`}>
                <p className="text-white">{user.first_name}</p>
              </Link>
            </div>
          );
        })}
        </div>
    </div>
  );
};
UsersPage.defaultProps = {};

export default React.memo(UsersPage);
