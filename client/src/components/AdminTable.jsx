import React, { useContext, useEffect } from "react";
import { MyProvider } from "@/context/Mycontext";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminTable = () => {
  const { fetchForm, students } = useContext(MyProvider);

  useEffect(
    () => {
      fetchForm();
    },
    { fetchForm }
  );
  return (
    <>
      <h1 className="text-5xl text-center py-7 pt-7 font-[Dangrek] text-[#003B73]">
        Admin Table
      </h1>
      <hr className="border-t-[1px] rounded-lg mx-28 mb-12 border-[#BFD7ED]" />
      <Table>
        <TableCaption>A list of student registration.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S-First Name</TableHead>
            <TableHead className="w-[100px]">S-Last Name</TableHead>
            <TableHead className="w-[100px]">G-First Name</TableHead>
            <TableHead className="w-[100px]">G-Last Name</TableHead>
            <TableHead className="w-[100px]">Phone</TableHead>
            <TableHead className="w-[100px]">Age</TableHead>
            <TableHead className="w-[100px]">Gender</TableHead>
            <TableHead className="w-[100px]">Grade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.length > 0 ? (
            students.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {data.studentFirstName}
                </TableCell>
                <TableCell>{data.studentLastName}</TableCell>
                <TableCell>{data.guardianFirstName}</TableCell>
                <TableCell>{data.guardianLastName}</TableCell>
                <TableCell>{data.phoneNo}</TableCell>
                <TableCell>{data.age}</TableCell>
                <TableCell>{data.gender}</TableCell>
                <TableCell>{data.gradeOfAdmission}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                No students found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default AdminTable;
