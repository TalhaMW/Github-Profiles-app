import React from "react"
import { FaLinkedin } from "react-icons/fa";
import {FaGithub} from "react-icons/fa"
import { FaFacebook } from "react-icons/fa";
const About = ()=>(
    <div>
    <div>
        <div className="leading-tight title text-5xl text-slate-200 font-semibold pb-4">
        Github Profiles
        </div>
        <div className="content ">
            <p className="text-slate-200 font-semibold pb-2">Github Profiles is a React app for searching Github Profiles and checking out the details.</p>
            <span className="text-slate-500 font-semibold text-xl pr-2">Version</span><span className="text-white font-semibold">1.0.0</span>
            <div>
            <span className="text-slate-500 font-semibold text-xl pr-2">App By:</span><span className="text-white font-semibold">Talha Muneer</span>
            </div>
        </div>
    </div>
   <div className="pt-12 flex">
   <a href="#" target="_blsnk" className="mr-2 p text-4xl text-white">
   <FaLinkedin/>
   </a>
   <a href="#" target="_blank" className="mr-2 text-4xl text-black bg-white rounded-full">
       <FaGithub/>
   </a>
   <a href="#" target="_blank" className="text-4xl text-blue-700 bg-slate-50 rounded-full">
       <FaFacebook/>
   </a>
   </div>
    </div>
)
export default About;