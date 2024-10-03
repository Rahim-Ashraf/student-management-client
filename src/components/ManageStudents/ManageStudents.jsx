import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './manageStudents.css'

export default function ManageStudents() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("https://students-management-system-server.vercel.app/students")
      .then(res => {
        setStudents(res.data)
      });
  }, []);

  const handleView = (id) => {

  }
  const handleEdit = (id) => {

  }
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:4000/students?id=${id}`)
          .then(res => {
            if (res.data.deletedCount >= 1) {
              Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "Student data has been deleted"
              });
            }
            axios.get("https://students-management-system-server.vercel.app/students")
              .then(res => {
                setStudents(res.data)
              });
          })
      }
    });


  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-red-500 text-white text-left">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Class</th>
            <th>Roll No.</th>
            <th>View / Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student, idx) => <tr key={student._id}>
              <th>{idx + 1}</th>
              <td>{`${student.firstName} ${student.firstName} ${student.lastName}`}</td>
              <td>{student.studentClass}</td>
              <td>{student.roll}</td>
              <td className="flex gap-4">

                <Popup
                  trigger={<button className="button"><MdOutlineRemoveRedEye className="text-3xl text-red-500" /></button>}
                  modal
                  nested
                >
                  {close => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header">{`${student.firstName} ${student.middleName} ${student.lastName}`}</div>
                      <div className="content">
                        <div className="flex justify-between p-4">
                          <div className="space-y-4 text-[1rem] font-semibold">
                            <h4>{student.studentClass}</h4>
                            <h4>Division: {student.division}</h4>
                            <h4>Roll: {student.roll}</h4>
                          </div>
                          <div className="space-y-4 text-[1rem] font-semibold">
                            <h4>Address 1:<br />{student.address1}</h4>
                            <h4>Address 2:<br />{student.address2}</h4>
                          </div>
                          <div className="space-y-4 text-[1rem] font-semibold">
                            <h4>Landmark: {student.landmark}</h4>
                            <h4>Cityt: {student.city}</h4>
                            <h4>Pin code: {student.pinCode}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>

                <Popup
                  trigger={<button className="button"><CiEdit className="text-3xl text-red-500" /></button>}
                  modal
                  nested
                >
                  {close => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header">{`${student.firstName} ${student.middleName} ${student.lastName}`}</div>
                      <div className="content">
                        <form onSubmit={() => handleEdit(student.id)} className="grid grid-cols-6 gap-4">
                          <input type="text" name="firstName" placeholder="First Name" required className="col-span-2 p-2 border rounded" />
                          <input type="text" name="middleName" placeholder="Middle Name" className="col-span-2 p-2 border rounded" />
                          <input type="text" name="lastName" placeholder="Last Name" required className="col-span-2 p-2 border rounded" />

                          <select name="class" defaultValue="Select Class" className="col-span-2 p-2 border rounded">
                            <option value="Select Class" disabled>Select Class</option>
                            <option value="Class 1">Class 1</option>
                            <option value="Class 2">Class 2</option>
                            <option value="Class 3">Class 3</option>
                            <option value="Class 4">Class 4</option>
                            <option value="Class 5">Class 5</option>
                            <option value="Class 6">Class 6</option>
                            <option value="Class 7">Class 7</option>
                            <option value="Class 8">Class 8</option>
                            <option value="Class 9">Class 9</option>
                            <option value="Class 10">Class 10</option>
                            <option value="Class 11">Class 11</option>
                            <option value="Class 12">Class 12</option>
                          </select>
                          <select name="division" defaultValue="Select Division" className="col-span-2 p-2 border rounded">
                            <option value="Select Division" disabled>Select Division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattogram">Chattogram</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Mymensingh">Mymensingh</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Barisal">Barisal</option>
                          </select>

                          <input type="number" name="roll" placeholder="Enter Roll Numver in Digits" required className="col-span-2 p-2 border rounded" />
                          <input type="text" name="address1" placeholder="Address Line 1" className="col-span-3 p-2 border rounded" />
                          <input type="text" name="address2" placeholder="Address Line 2" className="col-span-3 p-2 border rounded" />
                          <input type="text" name="landmark" placeholder="Landmark" className="col-span-2 p-2 border rounded" />
                          <input type="text" name="city" placeholder="City" className="col-span-2 p-2 border rounded" />
                          <input type="text" name="pinCode" placeholder="Pin Code" className="col-span-2 p-2 border rounded" />
                          <input type="submit" className="col-span-2 px-4 py-2 bg-red-500 rounded text-white font-bold cursor-pointer" />

                        </form>
                      </div>
                    </div>
                  )}
                </Popup>

                <button onClick={() => handleEdit(student._id)}><CiEdit className="text-3xl text-red-500" /></button>
                <button onClick={() => handleDelete(student._id)}><RiDeleteBin6Line className="text-3xl text-red-500" /></button>
              </td>

            </tr>)
          }

        </tbody>
      </table>
    </div>
  )
}
