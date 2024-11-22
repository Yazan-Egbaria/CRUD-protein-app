import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Shoes, Shoe, AddShoe } from "./config/pages";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shoes",
      element: <Shoes />,
    },
    {
      path: "/shoe/:shoeId",
      element: <Shoe />,
    },
    {
      path: "/addShoe",
      element: <AddShoe />,
    },
  ]);

  return <RouterProvider router={router} />;
}
