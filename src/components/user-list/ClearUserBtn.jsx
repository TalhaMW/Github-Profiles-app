import React from "react";
import { useContext } from "react";
import UserContext from "../../context/user-context";

const ClearUsersBtn = () => {
    const {clearUsers} = useContext(UserContext)
  return (
    <button
      onClick={clearUsers}
      className="bg-gray-600 cursor-pointer hover:bg-red-600 active:bg-red-600 text-white px-4 py-2 rounded-md mt-6 mb-10 transition-all ease-out duration-500 font-semibold"
    >
      Clear
    </button>
  );
};
export default ClearUsersBtn;
