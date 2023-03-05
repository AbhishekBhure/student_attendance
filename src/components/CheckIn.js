import React, { useState, useEffect } from "react";
import "./Checkin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scholar from "../images/scholar.png";
import table from "../images/table.png";

const CheckIn = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  const [checkoutRollNumber, setCheckoutRollNumber] = useState("");
  const [numCheckedIn, setNumCheckedIn] = useState(0);

  //function to enroll student
  function handleAddStudent(event) {
    event.preventDefault();

    if (rollNumber === "" || name === "") {
      alert("Please enter a roll number and name.");
      return;
    }

    const newStudent = {
      rollNumber: Number(rollNumber),
      name: name,
      checkIn: new Date(),
      checkOut: null,
    };

    alert("Enrolled");

    setStudents([...students, newStudent]);
    setRollNumber("");
    setName("");
  }

  //function to checkout student
  function handleCheckOut(event) {
    event.preventDefault();

    const updatedStudents = students.map((student) => {
      if (student.rollNumber === Number(checkoutRollNumber)) {
        return { ...student, checkOut: new Date() };
      } else {
        return student;
      }
    });

    setStudents(updatedStudents);

    const numCheckedIn = updatedStudents.filter(
      (student) => !student.checkOut
    ).length;
    setNumCheckedIn(numCheckedIn);
    setCheckoutRollNumber("");
  }

  useEffect(() => {
    const checkedInStudents = students.filter((student) => !student.checkOut);
    console.log(
      `There are ${checkedInStudents.length} students in school right now.`
    );
  }, [students]);
  return (
    <div className="main">
      <div className="container mx-auto px-4 ">
        <h1 className="text-3xl font-bold my-6 text-center">
          Student Attendance System
        </h1>

        <p className="text-xl font-bold text-center my-2">
          Enroll Yourself <FontAwesomeIcon icon="fa-solid fa-clipboard-list" />
        </p>

        <div className="mx-auto flex justify-center  px-4 ">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleAddStudent}
          >
            <label htmlFor="rollNumber" className="block font-bold mb-2">
              Roll Number:
            </label>
            <input
              type="number"
              id="rollNumber"
              name="rollNumber"
              value={rollNumber}
              onChange={(event) => setRollNumber(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />

            <label htmlFor="name" className="block font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded block hover:bg-sky-700 my-2"
            >
              Check In
              <FontAwesomeIcon
                icon="fa-solid fa-check"
                style={{ marginLeft: "4px" }}
              />
            </button>
            <p className="mt-2">
              There are currently{" "}
              {students.filter((student) => !student.checkOut).length} present
              in class right now
            </p>
          </form>
          <div className="img2">
            <img src={table} alt="scholar" />
          </div>
        </div>
        <hr />
        <br />

        <p className="text-xl font-bold text-center my-2">
          Enter Roll Number To Check Out{" "}
        </p>
        <div className="conatiner flex justify-center px-4 sm">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleCheckOut}
          >
            <label htmlFor="rollNumber" className="block font-bold mb-2">
              Roll Number:
            </label>
            <input
              type="number"
              id="rollNumber"
              name="rollNumber"
              value={checkoutRollNumber}
              onChange={(event) => setCheckoutRollNumber(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded block hover:bg-green-700 my-2"
            >
              Check Out
              <FontAwesomeIcon
                icon="fa-solid fa-arrow-right-from-bracket"
                style={{ marginLeft: "6px" }}
              />
            </button>
            <p className="mt-2">
              There are currently {numCheckedIn} students checked in.
            </p>
          </form>
        </div>
        <h2 className="text-xl font-bold  mb-2">Checked In Students</h2>
        <table className="border border-gray-400 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 w-32">Roll Number</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Check In</th>
              <th className="border px-4 py-2">Check Out</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.rollNumber}>
                <td className="border px-4 py-2">{student.rollNumber}</td>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">
                  {student.checkIn.toLocaleString()}
                </td>
                <td className="border px-4 py-2">
                  {student.checkOut ? student.checkOut.toLocaleString() : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="img3">
          <img src={scholar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
