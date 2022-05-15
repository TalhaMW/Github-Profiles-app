import React from "react";

const Loading = ({ loadingMsg }) => (
  <div className="flex justify-center items-center pt-16">
    <div className="w-16 h-16 md:w-20 md:h-20 border-8 border-slate-200 rounded-full border-t-gray-900 border-b-gray-900 animate-spin"></div>
  </div>
);
export default Loading;
