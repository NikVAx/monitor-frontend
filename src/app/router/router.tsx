import { DevFillerPage, LoginPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "@/pages/mainPage/mainPage";

export const router = createBrowserRouter([
  {
    element: <MainPage />,
    children: [{ path: "/", element: <DevFillerPage /> }],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
