import axios from "axios";
import AnimatedHeading from "../../components/AnimatedHeading";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { useState } from "react";
import { BASE_URL } from "../../utils/url";

const Certifications = () => {
  const [studentID, setStudentID] = useState("");
  const [error, setError] = useState<string | null >(null);
  const [certificate, setCertificate] = useState<string | null >(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStudentID(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!studentID) {
      setError("StudentID cannot be empty");
    } else {
      setError(null);
      await axios
        .get(`${BASE_URL}/student/certificates/${studentID}`)
        .then((res) => {
          if(res.status === 200) {
            setCertificate(res.data.certificateUrl);
            setError(null)
          }
        })
        .catch((err) => {
           setError(err.response.data.message)
           setCertificate(null)
        });
    }
  };

  return (
    <Container>
      <div className="flex flex-col gap-5">
        <AnimatedHeading>Certifications</AnimatedHeading>
        <h3 className="w-max mx-auto text-xl">Download Your Certificate</h3>

        <form
          className="min-w-[350px] mx-auto flex flex-col md:gap-10 gap-5"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="flex flex-col gap-2">
              Student ID
              <input
                value={studentID}
                onChange={handleInputChange}
                name="studentID"
                className="p-2 rounded-xl text-black"
                placeholder="TI748XXX6"
              />
            </label>
            {error && <span className="text-red-500">{error}</span>}
          </div>

          <Button variant="primary" size="small">
            Check Your Certificates
          </Button>
        </form>

        {certificate && (
          <div className="flex flex-col gap-3 justify-center items-center mt-10">
            <a className="px-4 py-2 rounded-xl bg-white hover:bg-inherit border shadow shadow-white border-white transition-colors duration-[250ms] ease-out text-black hover:cursor-pointer hover:text-white font-semibold" href={certificate}>
              Download Certificate
            </a>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Certifications;
