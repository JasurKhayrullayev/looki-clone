import { createBrowserRouter } from "react-router-dom";
// import RootLayOut from "./layouts/RootLayOuts";
import Login from "./components/Login/Login";
import Hero from "./components/Hero/Hero"
import Brand from "./components/Brand/Brand"
export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: (
      <h1>
        Error
      </h1>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Hero/>
        <Brand/>
      </>
    ),
  },
//   {
//     path: "/login",
//     element: (
//       <>
//         <Login />
//       </>
//     ),
//   },
]);