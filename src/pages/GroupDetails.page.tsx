import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOneGroup } from "../actions/groups.action";
import Alerts from "../components/Alerts.tsx/Alerts";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import {
  groupCreatorSelector,
  groupInvMemSelector,
  groupLoadingSelector,
  groupOneErrorSelector,
  groupParticipantsSelector,
  groupSelector,
  nextIdSelector,
  prevIdSelector,
} from "../selectors/groups.selectors";
import { useAppSelector } from "../store";

interface Props {}

const GroupDetailsPage: React.FC<Props> = (props) => {
  const group = useAppSelector(groupSelector);
  const groupId = +useParams<{ groupId: string }>().groupId;
  const groupCreator = useAppSelector(groupCreatorSelector);
  const groupParticipants = useAppSelector(groupParticipantsSelector);
  const groupInvMems = useAppSelector(groupInvMemSelector);

  const nextId = useAppSelector(nextIdSelector);
  const prevId = useAppSelector(prevIdSelector);
  const groupLoading = useAppSelector(groupLoadingSelector);
  const groupError = useAppSelector(groupOneErrorSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneGroup(groupId));
  }, [groupId]); //eslint-disable-line

  if (!group) {
    return <div>Loding...</div>;
  }
  if (groupError) {
    return (
      <div>
        <Alerts strong="" theme="blue" className="z-30 mt-20 ml-10 w-148.8985">
          {groupError}
        </Alerts>
      </div>
    );
  }

  return (
    <div className=" mt-13.45 w-full relative  rounded-lg   ">
      {groupLoading && (
        <Alerts
          strong="Group Loading "
          theme="green"
          className="absolute -top-10 z-10 w-96 left-28   "
        >
          Please wait...
        </Alerts>
      )}
      <div className="bg-gray-400 rounded-lg relative m-2 mx-auto  md:m-4 p-3 md:p-6 h-full w-full">
        <div className="rounded-lg relative shadow-lg flex  flex-col justify-center md:flex items-center hover:bg-indigoish hover:scale-104 transform  duration-500 bg-white m-4 py-4 px-10 max-w-4xl hover:text-white mx-auto ">
          <h1 className="text-xl  font-semibold whitespace-nowrap">
            Group information{" "}
          </h1>
          {group && (
            <div className="my-2 relative flex-col md:flex md:flex-row">
              <div className="justify-center flex md:flex md:justify-start">
              <img
                src={group.group_image_url}
                onError={(e: any) => {
                  e.target.onerror = null;
                  e.target.src = "/avatar.jpg";
                }}
                className="w-24 h-24 mr-4 rounded-full"
                alt=" "
              />
              </div>
              <div className="space-y-3 my-4 w-96 p-2 text-center sm:text-left  md:mt-0 ">
                <p>Group Id: {group && group.id}</p>
                <p>Group Name : {group && group.name}</p>
                <p>Group Description : {group && group.description}</p>
                <Link to={`/groups/${prevId}`}>
                  <button
                    onClick={() => dispatch(fetchOneGroup(prevId!))}
                    className="absolute md:top-4  top-16 sm:-left-10 left-4  hover:scale-110 transform duration-200 md:-left-12"
                  >
                    <GrFormPrevious className="p-2 rounded-full  text-black w-10 h-10 hover:bg-gray-400 bg-gray-200 shadow-2xl" />
                  </button>
                </Link>
                <Link to={`/groups/${nextId}`}>
                  <button
                    onClick={() => dispatch(fetchOneGroup(nextId!))}
                    className="absolute md:top-4 top-16  right-4 sm:-right-10 hover:scale-110 transform duration-200 md:-right-8 "
                  >
                    <GrFormNext className="p-2 rounded-full  text-black w-10 h-10  hover:bg-gray-400 bg-gray-200 shadow-2xl" />
                  </button>
                </Link>
              </div>
              <p className="absolute bg-green-300   p-2 rounded-lg text-center -bottom-12 inset-x-20 md:inset-x-40  ">
                Created By:{groupCreator && groupCreator.first_name}
              </p>
            </div>
          )}
        </div>
        <div className="p-8 rounded-lg bg-yellow-700 flex justify-between max-w-4xl mx-auto m-4 text-white ">
          <div>
            <div>
              <p className="mb-4">Participants </p>
              {groupParticipants &&
                groupParticipants.map((par) => (
                  <p
                    key={par && par.id}
                    className="p-2 bg-blue-500 text-white mt-2 rounded-lg "
                  >
                    {par && par.first_name}
                  </p>
                ))}
            </div>
          </div>
          <div>
            <div>
              <p className="mb-4">Invited Members</p>
              {groupInvMems &&
                groupInvMems.map((mem) => (
                  <p className="p-2 bg-blue-500 text-white rounded-lg mt-2 ">
                    {mem && mem.first_name}
                  </p>
                ))}
            </div>
          </div>
          {/*         
        { group && group.participants ? <div>group participants: { group.participants.map((par:any) => <p key={par && par.id}>{ par && par.first_name}</p>)}</div> : ""}
        { group && group.invitedMembers ? <div> invited Members : {group.invitedMembers.map((mem:any) => <p key = {mem &&  mem.id}>{mem && mem.first_name}</p>)}</div> : ""} */}
        </div>
      </div>
    </div>
  );
};
GroupDetailsPage.defaultProps = {};

export default React.memo(GroupDetailsPage);
