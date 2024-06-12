import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import Form from "./models/studentform.models.mjs"
dotenv.config()

const app = express()

app.use(express.json())

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
      birthDate,
      gender,
      gradeOfAdmission,
    } = req.body;
    if (
      !studentFirstName ||
      !studentLastName ||
      !guardianFirstName ||
      !guardianLastName ||
      !phoneNo ||
      !birthDate ||
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
       birthDate,
       gender,
       gradeOfAdmission,
     });
     res.status(201).json(student);

} catch (error) {
    res.status(500).json(error.message)
}    
})

app.get("/form" , async(req, res) => {
    try {
        const student = await Form.find({})
        res.status(200).json(student)
    } catch (error) {
    res.status(500).json(error.message)
        
    }
})

