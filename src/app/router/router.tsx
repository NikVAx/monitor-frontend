import { DevelopmentPage, LoginPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "@/pages/mainPage/mainPage";
import PersistentDrawerLeft from "@/sections/persDrawer/persDrawer";

export const router = createBrowserRouter([
  {
    element: <MainPage />,
    children: [
      { path: "/", element: <DevelopmentPage /> },
    ],
  },
  {
    element: <PersistentDrawerLeft />,
    children: [
      { path: "/drawer", element: <DevelopmentPage /> },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
