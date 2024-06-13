import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import Form from "./models/studentform.models.mjs"
import cors from "cors"
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_URI)
.then(()=>{
    app.listen(process.env.PORt, ()=> {
    console.log("sever is running", 3000);
})
console.log("DB is connected");
})
.catch((error) => {
    console.log(error.message);
})


app.post("/form", async(req, res) => {
try {
    const {
      studentFirstName,
      studentLastName,
      guardianFirstName,
      guardianLastName,
      phoneNo,
      age,
      gender,
      gradeOfAdmission,
    } = req.body;
    if (
      !studentFirstName ||
      !studentLastName ||
      !guardianFirstName ||
      !guardianLastName ||
      !phoneNo ||
      !age ||
      !gender ||
      !gradeOfAdmission
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }
     const student = await Form.create({
       studentFirstName,
       studentLastName,
       guardianFirstName,
       guardianLastName,
       phoneNo,
       age,
       gender,
       gradeOfAdmission,
     });
     res.status(201).json(student);

} catch (error) {
    res.status(500).json(error.message)
}    
}) 

app.get("/form", async (req, res) => {
  try {
    const students = await Form.find({}).sort({ createdAt: -1 }); // -1 for descending order
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

