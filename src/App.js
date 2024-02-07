import Wrapper from "./components/Wrapper";
import Home from "./routes/home/home.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./components/shop/shop.component";
import Checkout from "./routes/checkout-page/checkout.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { createUserDocFromAuth, onAuthStateChangeListener } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";

function App() {

  const dispatch = useDispatch()

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

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user)=>{
        if (user){
            createUserDocFromAuth(user)
        }
        const res = setCurrentUser(user)
        console.log(res);
        dispatch(res)
    })
    return () => {
        unsubscribe()
    };
  }, [dispatch]);

  return (
        <RouterProvider router={router} />
  );
}

export default App;
