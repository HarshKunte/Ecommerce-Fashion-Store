import Wrapper from "./components/Wrapper";
import Home from "./routes/home/home.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Wrapper />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/auth",
          element: <Authentication />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
