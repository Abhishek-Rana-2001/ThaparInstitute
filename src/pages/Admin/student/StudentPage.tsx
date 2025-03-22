import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudent } from "../../../utils/shared/api";
import { useAdminContext } from "../../../context/AdminContext";
import UploadButton from "../../../components/UploadButton";
import axios from "axios";
import { BASE_URL } from "../../../utils/url";
import { X } from "lucide-react";

type studentCourse = {
  _id: string;
  courseId: string;
  certificateUrl?: string;
};

type StudentType = {
  _id: string;
  email: string;
  name: string;
  studentID: string;
  courses: studentCourse[];
};

const StudentPage = () => {
  const { studentID } = useParams();
  const [student, setStudent] = useState<StudentType | null>(null);
  const { courses } = useAdminContext();
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (studentID) {
      getStudent(studentID)
        .then((res) => {
          setStudent(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [studentID]);

  const uploadCertificate = async ({
    courseId,
    file,
  }: {
    courseId: string;
    file: File | null;
  }) => {
    if (file && courseId) {
      const formData = new FormData();
      formData.append("file", file);
      await axios
        .post(`${BASE_URL}/upload`, formData)
        .then((res) => {
          if (res.status === 200) {
            axios
              .post(`${BASE_URL}/student/${studentID}/${courseId}`, {
                certificateUrl: res.data.downloadUrl,
              })
              .then((res) => {
                if (res.status === 200) {
                  if (studentID) {
                    getStudent(studentID)
                      .then((res) => {
                        setStudent(res.data);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                }
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleDeleteCertificate = () => {};

  return (
    <div className="p-5 space-y-5">
      <h1 className="text-4xl font-bold">{student?.name}</h1>
      <p>{student?.email}</p>
      <p>{student?.studentID}</p>

      <h2 className="text-2xl font-semibold">Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Course ID</th>
            <th>Course Name</th>
          </tr>
        </thead>
        <tbody>
          {student?.courses?.map((course, index) => {
            // Use find to get the course that matches the courseId
            const matchedCourse = courses?.find(
              (courseIn) => courseIn._id === course.courseId
            );
            {
              console.log(course._id);
            }
            return (
              <tr key={index} className="p-2">
                <td className="p-4">{index + 1}</td>
                <td className="p-4">
                  {matchedCourse ? matchedCourse._id : "Course not found"}
                </td>
                <td className="p-4">
                  {matchedCourse ? matchedCourse.name : "Course not found"}
                </td>
                <td className="p-4">
                  {course.certificateUrl ? (
                    <span className="flex items-center gap-2">
                      <a
                        className="hover:text-sky-500 transition-colors duration-150 ease-in-out underline "
                        href={course.certificateUrl}
                      >
                        Download Certificate
                      </a>
                      <X
                        className="text hover:cursor-pointer hover:scale-110 transition-all duration-100 ease-in"
                        onClick={handleDeleteCertificate}
                      />{" "}
                    </span>
                  ) : (
                    <UploadButton
                      courseId={course._id}
                      uploadCertificate={uploadCertificate}
                      file={file}
                      setFile={setFile}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPage;
