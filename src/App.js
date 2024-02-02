import Wrapper from "./components/Wrapper";
import Home from "./routes/home/home.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import { UserProvider } from "./contexts/user.context";
import { ProductContextProvider } from "./contexts/product.context";
import Shop from "./components/shop/shop.component";
import { CartContextProvider } from "./contexts/cart.context";

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
        {
          path: "/shop",
          element: <Shop />,
        },
      ],
    },
  ]);

  return (
    <UserProvider>
      <ProductContextProvider>
        <CartContextProvider>
        <RouterProvider router={router} />
        </CartContextProvider>
      </ProductContextProvider>
    </UserProvider>
  );
}

export default App;
