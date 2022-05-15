import React, { useContext } from "react";
import UserContext from "../../context/user-context";
import Loading from "./Loading";
import ClearUsersBtn from "./ClearUserBtn";
import UserNotFound from "./UserNotFound";
import User from "./User";
import NotFound from "../NotFound";


const UserList = () => {
  const { users, loading, notFound, clearNotFoundMsg,error } =
    useContext(UserContext);

  if (loading) {
    return (
      <Loading loadingMsg="Loading Users..."/>
    );
  }
  if (notFound) {
    clearNotFoundMsg();
    return <UserNotFound />;
  }
  if(error){
    return <h1 className="text-2xl font-semibold">404 ERROR !</h1>
  }
  return (
    <>
      {users.length ? <ClearUsersBtn /> : null}
      <div className="users-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {users.map((user) => {
          return (
            <User
              key={user.id}
              img_src={user.avatar_url}
              login={user.login}
            />
          );
        })}
      </div>
    </>
  );
};
export default UserList;
