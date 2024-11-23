import { createBrowserRouter } from "react-router-dom";
import { Home, Proteins, Protein, AddProtein, RootLayout } from "../config/pages";

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
        path: "/proteins",
        element: <Proteins />,
      },
      {
        path: "/protein/:proteinId",
        element: <Protein />,
      },
      {
        path: "/addprotein",
        element: <AddProtein />,
      },
    ],
  },
]);
