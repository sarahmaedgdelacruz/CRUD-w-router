import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage.jsx";
import Tasklists from "./pages/Tasklists.jsx";
import Taskdetails from "./pages/Taskdetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/",
    element: <Tasklists />,
    children: [
      {
        path: "id",
        element: <Taskdetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
