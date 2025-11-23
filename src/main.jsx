import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import Homepage from "./pages/Homepage.jsx";
import Tasklists from "./pages/Tasklists.jsx";
import Taskdetails from "./pages/Taskdetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },            
      { path: "/all-task", element: <Tasklists /> },     
      { path: "/all-task/:id", element: <Taskdetails /> } 
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
