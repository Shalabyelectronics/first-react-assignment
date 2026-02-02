import "./App.css";
import Hero from "./components/Hero/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Protfolio from "./components/Portfolio/Protfolio";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  const route = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Hero /> },
        { path: "portfolio", element: <Protfolio /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
