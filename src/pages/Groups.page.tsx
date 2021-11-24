import { useEffect } from "react";

import { queryChangedAction } from "../actions/groups.action";

import Input from "../components/Input/Input";
import {
  groupsLoadingSelector,
  groupIdSelector,
  groupQuerySelector,
  groupsSelector,
} from "../selectors/groups.selectors";
import { useAppSelector } from "../store";

import React from "react";

import { Link } from "react-router-dom";

import { ImSpinner2 } from "react-icons/im";
import { useDispatch } from "react-redux";

interface Props {
  className?: string;
}

const GroupsPage: React.FC<Props> = ({ className }) => {
  const query = useAppSelector(groupQuerySelector);
  const group = useAppSelector(groupsSelector);
  const isLoading = useAppSelector(groupsLoadingSelector);
  const selectedGroupId = useAppSelector(groupIdSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryChangedAction(""));
  }, [selectedGroupId]); //eslint-disable-line  react-hooks/exhaustive-deps

  let rowColour: string;

  return (
    <div className={`${className}  w-full `}>
      <div className="bg-gray-200 p-4  mx-2 rounded-lg w-full  max-w-3xl ">
        <div className="bg-white rounded-lg h-full p-8 m-4">
          <div className="flex  bg-white  ">
            <Input
              theme="indigo"
              placeholder="search"
              value={query}
              type="text"
              onChange={(event) => {
                dispatch(queryChangedAction(event.target.value));
              }}
              className="w-full mr-2"
            />
            {isLoading && <ImSpinner2 className="animate-spin w-10 h-10 " />}
          </div>
          <div className="m-4 ">
            {group!.map((profile, index) => {
              if (index % 2 === 0) {
                rowColour = "bg-gray-200";
              } else {
                rowColour = "bg-gray-400";
              }
              return (
                <div
                  key={profile.id}
                  className={
                    `flex  border rounded-lg mt-2 h-24 md;h-20 ` + rowColour
                  }
                >
                  <img
                    src={profile.group_image_url}
                    onError={(e: any) => {
                      e.target.onerror = null;
                      e.target.src = "/avatar.jpg";
                    }}
                    className="w-12 h-10 mr-2  mt-2  ml-2 rounded-full"
                    alt=" "
                  />
                  <Link to={`/groups/${profile.id}`}>
                    <p className="font-medium mt-2 ">{profile.name}</p>
                    <p className="text-sm  text-gray-500">
                      {profile.description}
                    </p>
                  </Link>
                </div>
              );
            })}
            {query !== "" && !isLoading && group.length === 0 && (
              <div className="w-40 h-40 bg-red-500 text-white rounded-xl shadow-lg m-2 p-3">
                Sorry! Groups not found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
GroupsPage.defaultProps = {};

export default React.memo(GroupsPage);
