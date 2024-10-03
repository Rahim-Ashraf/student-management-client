import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home"
import Login from "../components/Login/Login";
import AddStudents from "../components/AddStudents/AddStudents";
import ManageStudents from "../components/ManageStudents/ManageStudents";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        // errorElement: <Error></Error>,
        children: [
            {
                path: "/add-students",
                element: <AddStudents></AddStudents>
            },
            {
                path: "/manage-students",
                element: <ManageStudents></ManageStudents>
            },
        ],
    },
    {
        path: "/login",
        element: <Login></Login>
    }
]);
export default router;