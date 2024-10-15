import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/landingPage/LandingPage.tsx";
import { courseLoader, Courses } from "./pages/courses/Courses.tsx";
import { Certifications } from "./pages/certifications/Certifications.tsx";
import ReactLenis from "lenis/react";
import { Login } from "./pages/authentication/Login.tsx";

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
        element:<Courses/>,
        loader:courseLoader
      },
      {
        path: "/certifications",
        element:<Certifications/>
      },
    ],
  },
  {
    path:"/login",
    element:<Login/>
  }
]);



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis root>
    <RouterProvider router={router} />
    </ReactLenis>
  </StrictMode>
);
