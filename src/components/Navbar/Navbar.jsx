import { NavLink } from "react-router-dom";
import { MdGroupAdd } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";


export default function Navbar() {
    const { logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }

    return (
        <div className="col-span-1">
            <NavLink to="/add-students"
                className={({ isActive }) =>
                    isActive ? "flex gap-2 items-center mb-2 px-4 py-2 bg-red-500 text-white rounded font-semibold" : "flex gap-2 items-center mb-2 px-4 py-2 rounded"
                }>
                <MdGroupAdd /> <span>Add Studen</span>
            </NavLink>
            <NavLink to="/manage-students" className={({ isActive }) =>
                isActive ? "flex gap-2 items-center mb-2 px-4 py-2 bg-red-500 text-white rounded font-semibold" : "flex gap-2 items-center mb-2 px-4 py-2 rounded"
            }>
                <MdOutlineManageAccounts /> <span>Manage Student</span>
            </NavLink>
            <button onClick={handleLogOut} className="flex gap-2 items-center px-4 py-2 rounded">
                <MdLogout /> <span>Logout</span>
            </button>
        </div>
    )
}
