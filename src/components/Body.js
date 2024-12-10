import React from "react";
import Browse from "./Browse";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Login from "./Login";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
