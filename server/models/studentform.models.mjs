import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    studentFirstName: {
      type: String,
      required: true,
    },
    studentLastName: {
      type: String,
      required: true,
    },
    guardianFirstName: {
      type: String,
      required: true,
    },
    guardianLastName: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    gradeOfAdmission: {
      type: String,
      enum: [
        "G-1",
        "G-2",
        "G-3",
        "G-4",
        "G-5",
        "G-6",
        "G-7",
        "G-8",
        "G-9",
        "G-10",
        "G-11",
        "G-12",
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model("Form", formSchema);
export default Form;
