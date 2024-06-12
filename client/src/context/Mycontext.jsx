import React, { Children, createContext, useState } from "react";
const MyProvider = createContext();

const Mycontext = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [guardianFirstName, setGuardianFirstName] = useState("");
  const [guardianLastName, setGuardianLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setGuardianFirstName("");
    setGuardianLastName("");
    setPhoneNo("");
    setBirthDate("");
    setGender("");
    setGrade("")
    console.log(grade);
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
        }}
      >
        {children}
      </MyProvider.Provider>
    </>
  );
};

export { Mycontext, MyProvider };
