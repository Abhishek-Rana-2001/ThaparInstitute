// import AnimatedHeading from "../../components/AnimatedHeading";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Container from "../../components/Container";

const AdminDashboard = () => {
  const navigate = useNavigate();

  

  return (
    <Container>
      <div className="h-full">
        <div className="flex gap-4">
          <Button
            onClick={(e) => {
              e.preventDefault()
              navigate("/dashboard/students");
            }}
            size="large"
            variant="primary"
          >
            Students
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault()
              navigate("/dashboard/courses");
            }}
            size="large"
            variant="primary"
          >
            Courses
          </Button>
        </div>
        <div className="max-h-[60vh] overflow-hidden">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default AdminDashboard;
