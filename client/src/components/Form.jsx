import React, { useContext } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { MyProvider } from "../context/Mycontext";

const Form = () => {
  const {
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
    setGrade
  } = useContext(MyProvider);
  return (
    <>
      <h1 className="text-5xl text-center py-7 pt-20 font-[Dangrek] text-[#003B73]">
        Form
      </h1>
      <hr className="border-t-[1px] rounded-lg mx-28 border-[#BFD7ED]" />

      <form className="px-64 mx-auto" onSubmit={onSubmitHandler}>
        <div className="space-y-12 bg-[#fafbfb] my-12 p-6 shadow-lg shadow-[#BFD7ED]">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Student personal Information
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Student first name<span className="text-red-500 ml-1">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Student last name<span className="text-red-500 ml-1">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Guardian first name
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="guardian-namefirst-name"
                    id="guardian-name"
                    autoComplete="given-name"
                    required
                    value={guardianLastName}
                    onChange={(e) => setGuardianLastName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Guardian last name<span className="text-red-500 ml-1">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="guardian-family-name"
                    id="guardian-family-name"
                    autoComplete="guardian-family-name"
                    required
                    value={guardianFirstName}
                    onChange={(e) => setGuardianFirstName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone number<span className="text-red-500 ml-1">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="phone-no"
                    name="phone-no"
                    type="number"
                    autoComplete="phone-no"
                    required
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <br />
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Student date of birth
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    required
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <fieldset className="sm:col-span-2 ">
                {/*sm:col-start-1*/}
                <legend className="text-sm font-semibold text-center text-gray-900">
                  Student gender<span className="text-red-500 ml-1">*</span>
                </legend>
                <div className="mt-3 flex gap-7 justify-center">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      required
                      value="Male"
                      checked={gender === "Male"}
                      onChange={(e) => setGender(e.target.value)}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-everything"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      required
                      value="Female"
                      checked={gender === "Female"}
                      onChange={(e) => setGender(e.target.value)}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Grade of admission<span className="text-red-500 ml-1">*</span>
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    required
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="" disabled>
                      Select grade
                    </option>
                    <option value="G-1">G-1</option>
                    <option value="G-2">G-2</option>
                    <option value="G-3">G-3</option>
                    <option value="G-4">G-4</option>
                    <option value="G-5">G-5</option>
                    <option value="G-6">G-6</option>
                    <option value="G-7">G-7</option>
                    <option value="G-8">G-8</option>
                    <option value="G-9">G-9</option>
                    <option value="G-10">G-10</option>
                    <option value="G-11">G-11</option>
                    <option value="G-12">G-12</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  Upload your previous grade result
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 4MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold text-white px-4 py-2 bg-red-600 hover:bg-red-500 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
