import { createBrowserRouter } from "react-router-dom";
import { Home, Shoes, Shoe, AddShoe, RootLayout } from "../config/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
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
    ],
  },
]);
