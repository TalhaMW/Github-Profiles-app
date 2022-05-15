import React from "react"
import {ImLocation2} from "react-icons/im"
import {BsBuilding} from "react-icons/bs"
import {CgWebsite} from "react-icons/cg"
import {FiTwitter} from "react-icons/fi"


const UserMoreInfoCard = ({infoTitle,infoStat})=>{
    if(!infoStat){
        infoStat="NA"
    }
    let icon = null;
    switch(infoTitle){
        case "location":
            icon=<ImLocation2 className="user-more-info-card"/>
            break
        case "company":
            icon=<BsBuilding className="user-more-info-card"/>
        case "website":
            icon=<CgWebsite className="user-more-info-card"/>
            break
        case "twitter":
            icon=<FiTwitter className="user-more-info-card"/>
            break
        default:
            icon=null;
    }
    return(
    <div className="flex flex-col items-center justify-center pb-4 card-box mt-2 px-6 sm:px-12 sm:shadow-sm">
    <span className=" pr-4 pb-2 pt-4">
    {icon}
    {/* <ImLocation2 className="text-3xl md:text-4xl font-semibold text-pink-700"/> */}
    </span>
    <span className="text-lg text-slate-200 font-semibold">{infoStat}</span>
  </div>
)
}

export default UserMoreInfoCard