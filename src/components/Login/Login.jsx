import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";


export default function Login() {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Loged In Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/");
      })
      .catch(error => {
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login failed"
        });

      })

  }

  return (
    <div className="p-8 rounded-lg max-w-screen-xl mx-auto flex justify-between items-center bg-red-50 my-4">
      <div>
        <button onClick={handleGoogleLogin} className="flex gap-8 items-center py-2 px-8 border-2 bg-white border-red-500 rounded-lg">
          <span className="font-bold text-red-500 text-2xl">Login with</span>
          <FcGoogle className="text-6xl" />
        </button>
      </div>
      <div>
        <span className="font-bold text-2xl">Go to </span><Link to="/" className="p-4 rounded bg-red-500 text-white font-semibold"> Home Page</Link>
      </div>
    </div>
  )
}
