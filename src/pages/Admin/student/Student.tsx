import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/url";
import Button from "../../../components/Button";
import StudentForm from "../../../components/forms/StudentForm";
import { Outlet, useNavigate } from "react-router-dom";
import { useAdminContext } from "../../../context/AdminContext";
import { Plus } from "lucide-react";

type Student = {
  name: string;
  _id: string;
  email: string;
  studentID: string;
  courses: [
    {
      courseID: string;
      _id:string
    }
  ];
};

const Student = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const {courses, setCourses} = useAdminContext()

  const navigate = useNavigate()
  useEffect(() => {
    const fetchCourses = async () => {
      await axios
        .get(`${BASE_URL}/course`)
        .then((res) => {
          if (res.status === 200) {
            setCourses(res.data.courses);
          }
        })
        .catch((err) => console.log(err));
    };

    const fetchStudents = async () => {
      await axios
        .get(`${BASE_URL}/student`)
        .then((res) => {
          if (res.status === 200) {
            setStudents(res.data);
          }
        })
        .catch((err) => console.log(err));
    };

    fetchCourses();
    fetchStudents();
  }, []);


  const handleStudent = (studentID :String)=>{
      navigate(`/dashboard/students/${studentID}`)
  }

  return (
    <>
    <div className="flex gap-4 mt-20">
      <div className="">
        <h2 className="text-2xl font-bold mx-auto w-max">Students</h2>
        {students.length > 0 && (
          <table className="mx-auto ">
            <thead>
              <tr className="p-2" >
                <th className="font-bold pr-3 text-xl py-3">No.</th>
                <th className="font-bold pr-3 text-xl py-3">Student Name</th>
                <th className="font-bold pr-3 text-xl py-3">Student ID</th>
                
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => {
                return (
                  <tr key={index} className="hover:cursor-pointer hover:scale-105 " onClick={()=>{handleStudent(student.studentID)}}>
                    <td className="py-3">{index + 1}</td>
                    <td className="py-3">{student.name}</td>
                    <td className="py-3">{student.studentID}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className="flex-1">
      <div >
          <Button
            variant="primary"
            size="small"
            onClick={() => setFormOpen(!formOpen)}
          >
            Create Student
            <Plus />
          </Button>
        </div>
          {formOpen && (
            <StudentForm courses={courses} />
          )}
      </div>


    </div>
      <Outlet/>
     </>
  );
};

export default Student;
