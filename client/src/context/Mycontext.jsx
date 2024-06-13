import React, { Children, createContext, useState } from "react";
const MyProvider = createContext();
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mycontext = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [guardianFirstName, setGuardianFirstName] = useState("");
  const [guardianLastName, setGuardianLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");
  const [age, setAge] = useState("");

  const [students, setStudents] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const calculatedAge = calculateAge(birthDate);
    axios
      .post("http://localhost:3000/form", {
        studentFirstName: firstName,
        studentLastName: lastName,
        guardianFirstName: guardianFirstName,
        guardianLastName: guardianLastName,
        phoneNo: phoneNo,
        age: calculatedAge,
        gender: gender,
        gradeOfAdmission: grade,
      })
      .then((res) => {
        toast.success("Form Submitted!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    setFirstName("");
    setLastName("");
    setGuardianFirstName("");
    setGuardianLastName("");
    setPhoneNo("");
    setBirthDate("");
    setGender("");
    setGrade("");
  };

  const fetchForm = () => {
    axios
      .get("http://localhost:3000/form")
      .then((res) => {
        const student = res.data;
        setStudents(student);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const dob = new Date(birthDate);
    let age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <>
      <MyProvider.Provider
        value={{
          firstName,
          setFirstName,
          onSubmitHandler,
          lastName,
          setLastName,
          guardianFirstName,
          setGuardianFirstName,
          guardianLastName,
          setGuardianLastName,
          phoneNo,
          setPhoneNo,
          birthDate,
          setBirthDate,
          gender,
          setGender,
          grade,
          setGrade,
          fetchForm,
          students,
          age,
          setAge,
        }}
      >
        {children}
      </MyProvider.Provider>
    </>
  );
};

export { Mycontext, MyProvider };
