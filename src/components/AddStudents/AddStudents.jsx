import axios from 'axios';
import Swal from "sweetalert2";

export default function AddStudents() {
    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const middleName = form.middleName.value;
        const lastName = form.lastName.value;
        const studentClass = form.class.value;
        const division = form.division.value;
        const roll = form.roll.value;
        const address1 = form.address1.value;
        const address2 = form.address2.value;
        const landmark = form.landmark.value;
        const city = form.city.value;
        const pinCode = form.pinCode.value;

        const data = {
            firstName,
            middleName,
            lastName,
            studentClass,
            division,
            roll,
            address1,
            address2,
            landmark,
            city,
            pinCode,
        }
        axios.post("https://students-management-system-server.vercel.app/students", data)
            .then(res => {
                if (res.data.acknowledged == true) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Student data saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                form.firstName.value = "";
                form.middleName.value = "";
                form.lastName.value = "";
                form.roll.value = "";
                form.address1.value = "";
                form.address2.value = "";
                form.landmark.value = "";
                form.city.value = "";
                form.pinCode.value = "";
            })


    }

    return (
        <div>
            <h4>Add Student</h4>
            <form onSubmit={handleFormSubmit} className="grid grid-cols-6 gap-4">
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
                <input type="submit" value="Add Student"  className="col-span-2 px-4 py-2 bg-red-500 rounded text-white font-bold cursor-pointer" />

            </form>
        </div>
    )
}
