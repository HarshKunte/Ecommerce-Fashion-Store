import Wrapper from "./components/Wrapper";
import Home from "./routes/home/home.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider, ProductContextProvider } from "./contexts/categories.context";
import Shop from "./components/shop/shop.component";
import { CartContextProvider } from "./contexts/cart.context";
import Checkout from "./routes/checkout-page/checkout.component";

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
          path: "/shop/*",
          element: <Shop />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);

  return (
    <UserProvider>
      <CategoriesProvider>
        <CartContextProvider>
        <RouterProvider router={router} />
        </CartContextProvider>
      </CategoriesProvider>
    </UserProvider>
  );
}

export default App;
