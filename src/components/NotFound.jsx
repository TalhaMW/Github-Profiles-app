import React from "react"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

const NotFound = ()=>(
    <div>
        <div className="flex flex-col items-center">
        <span className="text-4xl sm:text-6xl text-slate-200 font-bold">Oops!</span>
        <span className="text-3xl sm:text-6xl text-slate-200 font-bold">404-Page Not Found</span>
        </div>
        <Link to="/" className="flex justify-center mt-12">
        <button className="btn btn-primary text-2xl sm:text-3xl text-center"><FaHome/><span className="pl-4 text-xl sm:text-3xl">Home</span></button>
        </Link>
    </div>
)
export default NotFound