import React from "react";
import {IoAlertCircleOutline} from "react-icons/io5"


const UserNotFound = ()=>(

        <div className="flex items-center">
        <div className="text-2xl font-semibold mr-2">User Not Found</div>
        <IoAlertCircleOutline className="text-yellow-400 text-2xl"/>
        </div>
)

export default UserNotFound;