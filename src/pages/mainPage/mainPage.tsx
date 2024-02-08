import { MainLayout } from "@/app";
import { Outlet } from "react-router-dom";

export function MainPage() {
  return (
    <MainLayout>
        <Outlet/>
    </MainLayout>
  );
}