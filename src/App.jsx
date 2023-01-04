import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => (
  <>
    <h1>Zano Min React App</h1>
    <RouterProvider router={router} />
  </>
);

export default App;
