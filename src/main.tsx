import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/landingPage/LandingPage.tsx";
import { courseLoader } from "./pages/courses/Courses.tsx";
import ReactLenis from "lenis/react";
import { Login } from "./pages/authentication/Login.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import Certifications from "./pages/certifications/Certifications.tsx";
import { AdminContextProvider } from "./context/AdminContext.tsx";
import Contact from "./pages/contact/Contact.tsx";

const Courses = lazy(() => import("./pages/courses/Courses.tsx"));
const AdminDashboard = lazy(()=>import("./pages/Admin/AdminDashboard.tsx"))
const Student = lazy(()=>import("./pages/Admin//student/Student.tsx"))
const StudentPage = lazy(()=>import("./pages/Admin/student/StudentPage.tsx"))
const Course = lazy(()=>import("./pages/Admin/Course.tsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/courses",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Courses />
          </Suspense>
        ),
        loader: courseLoader,
      },
      {
        path: "/certifications",
        element: <Certifications />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <AdminDashboard />
            </Suspense>
          </ProtectedRoute>
        ),
        children: [
          {
            path: "students",
            element: <Student />,
          },
          {
            path: "students/:studentID",
            element: <StudentPage />,
          },
          {
            path: "courses",
            element: <Course />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis root>
      <AuthProvider>
        <AdminContextProvider>
          <RouterProvider router={router} />
        </AdminContextProvider>
      </AuthProvider>
    </ReactLenis>
  </StrictMode>
);
