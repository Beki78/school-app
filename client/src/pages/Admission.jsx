import React from 'react'
import NavBar from "../components/NavBar";
import Form from '../components/Form';
import Footer from '../components/Footer';


const images = [
  "https://media.istockphoto.com/id/675073328/vector/admission-concept-on-keyboard-button-3d-rendering.jpg?s=612x612&w=0&k=20&c=rsDToN9NseYiS5WEw48w6J_Ll4eWafgbeBwgml5Q254=",
];

const Admission = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h1 className="text-5xl text-center py-7 pt-20 font-[Dangrek] text-[#003B73]">
          Admission
        </h1>
        <hr className="border-t-[1px] rounded-lg mx-28 border-[#BFD7ED]" />

        <div className="flex gap-5 items-center  mx-auto px-48 mt-16">
          <p className=" leading-6">
            Lideta Catholic Cathedral School (LCCS) stands as one of Ethiopia’s
            most esteemed educational institutions. At LCCS, we uphold the
            conviction that every individual merits an environment that fosters
            growth, encourages potential, and is nurturing at its core. Our
            diverse community of students and staff, from various religious
            backgrounds, collectively embrace and uphold essential human values.
            We deeply respect the intrinsic worth of every individual. LCCS
            consistently delivers unparalleled educational quality, a testament
            to which is the remarkable success of our students. Each year, many
            from LCCS secure positions in prestigious universities worldwide,
            including renowned institutions like Harvard, MIT, Yale, Stanford,
            and Cambridge, among others.
          </p>
          <img src={images} className="w-[400px] " alt="" />
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
}

export default Admission
