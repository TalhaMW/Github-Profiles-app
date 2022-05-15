import React,{} from "react";
import { Link } from "react-router-dom";

const User = ({ img_src,login }) => {

  return (
    <div className="flex items-center border-b-2 border-slate-900 border-opacity-10 py-4 px-2">
      <div className="w-20 mr-4 rounded-full overflow-hidden mb-2">
        <img src={img_src} alt="" />
      </div>
      <div className="ml-4">
      <div className="font-semibold text-lg text-emerald-500 mb-6 md:mb-4">
        {login}
      </div>
      <Link className=" bg-slate-900 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-500 ease-in-out sm:hover:bg-slate-700" to={`/user/${login}`} >
      Visit Profile
      </Link>
      </div>
    </div>
  );
};

export default User;
