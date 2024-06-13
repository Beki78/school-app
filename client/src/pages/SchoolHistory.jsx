import React from 'react'
import NavBar from '../components/NavBar'
import Photot from "../assets/complab.jpg"
import Footer from '@/components/Footer';

const SchoolHistory = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-[#f1f7ff]">
        <div className="p-12 px-5 md:px-32 mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl text-center py-7 pt-20 font-[Dangrek] text-[#003B73]">
            More About Kidane Mehret School
          </h1>
          <hr className="border-t-[1px] rounded-lg mx-28 border-[#BFD7ED]" />

          <div className="flex flex-col items-center mt-16 lg:flex-row gap-10 text-start px-4 md:px-1">
            <img src={Photot} alt="kms logo" className="w-96 object-cover" />
            <p className="font-[poppins] text-sm  md:text-md ">
              Kidane Meheret School KMS was founded by the Franciscan Sisters of
              the Heart of Jesus on November 1st 1957. It is a school of the
              Ethiopian Catholic Church and located in Kebena, Addis Ababa. The
              school's aim is to provide a well-rounded academic and moral
              education to Ethiopian children, so that they may develop as good
              and responsible citizens through the learning process. The school
              community strives to fulfill its goals of promoting and
              encouraging the academic, values and peace education of children
              and youth, without any distinction as to religious affiliation,
              sex, culture or background. KMS is a non-profitmaking institution
              that caters for children ranging from 6 years grade 1 up to 16
              grade 10. It is co-educational, with an approximate ratio of
              50/50. The school gives scholarships to 10% of its students who
              are orphans, disabled or are from needy families. For the past 50
              years, KMS has served first as a pre-school, then an elementary
              and junior high school. In 1999, the first grade 9 students
              entered the senior high school and graduated in June 2001.
            </p>
          </div>
        </div>
      </div>

      <div className="  pt-20">
        <div className="flex gap-5 md:gap-7 p-10  px-20 lg:px-60">
          <h1 className="text-3xl text-[#003B73]">Mission</h1>
          <p className="font-[poppins] text-sm text-[#003B73]">
            ach year, many from LCCS secure positions in prestigious
            universities worldwide, including renowned institutions like
            Harvard, MIT, Yale, Stanford, and Cambridge, among others.
          </p>
        </div>
        <hr className="border-t-[1px] border-[#003B73] mt-4 mb-10 mx-20" />
        <div className="flex gap-5 md:gap-10 p-10  px-20 lg:px-60">
          <h1 className="text-3xl  text-[#003B73]">Vision</h1>
          <p className="font-[poppins] text-sm  text-[#003B73]">
            ach year, many from LCCS secure positions in prestigious
            universities worldwide, including renowned institutions like
            Harvard, MIT, Yale, Stanford, and Cambridge, among others.
          </p>
        </div>
        <hr className="border-t-[1px] border-[#003B73] mt-4 mb-10 mx-20" />

        <div className="flex gap-5 md:gap-7 p-10  px-20 lg:px-60">
          <h1 className="text-3xl text-[#003B73]">Core Values</h1>
          <p className="font-[poppins] text-sm text-[#003B73]">
            ach year, many from LCCS secure positions in prestigious
            universities worldwide, including renowned institutions like
            Harvard, MIT, Yale, Stanford, and Cambridge, among others.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SchoolHistory
