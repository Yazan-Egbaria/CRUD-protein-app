import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Proteins,
  ProteinPage,
  AddProtein,
  RootLayout,
} from "../config/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "proteins",
        element: <Proteins />,
      },
      {
        path: "proteins/:proteinId",
        element: <ProteinPage />,
      },
      {
        path: "addprotein",
        element: <AddProtein />,
      },
    ],
  },
]);
