import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Shoes, Shoe, AddShoe } from "./config/pages";
import RootLayout from "./components/RootLayout";

export default function App() {
  const router = createBrowserRouter([
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

  return <RouterProvider router={router} />;
}

// create navbar -V
// move the router to a new file in src/routes
// import the nav here in the app as well as the router
