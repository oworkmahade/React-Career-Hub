import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import Appliedjobs from "./Components/AppliedJobs/AppliedJobs.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import JobDetails from "./Components/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        // data load for featured jobs using loader
        loader: () => fetch("/public/jobs.json"),
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/appliedjobs",
        element: <Appliedjobs></Appliedjobs>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      // dynamic route
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/jobs.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
