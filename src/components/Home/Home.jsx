import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import Navbar from "../Navbar/Navbar";
import { IoPersonOutline } from "react-icons/io5";

export default function Home() {
    const { user } = useContext(AuthContext);

    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex justify-between p-4">
                <Link to="/"><h2 className="font-bold text-2xl text-red-500">Dev Cluster</h2></Link>
                <div>
                    {
                        user ? <div className="flex gap-2 items-center py-2 px-4 border rounded-lg">
                        <IoPersonOutline className="text-2xl" />
                        <button className="text-2xl">
                            {user.email}
                        </button>
                        </div> : <Link to="/login"><button className="px-4 py-2 bg-red-500 rounded text-white">Login</button></Link>
                    }
                </div>
            </div>
            <div className="grid grid-cols-5 gap-2">
                <Navbar></Navbar>
                <div className="min-h-screen col-span-4"><Outlet></Outlet></div>
            </div>
        </div>
    )
}
