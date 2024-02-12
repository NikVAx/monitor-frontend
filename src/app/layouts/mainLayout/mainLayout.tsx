import { PropsWithChildren } from "react";
import s from "./mainLayout.module.css";
import { Sidebar } from "@/sections/sidebar";
import { Header } from "@/sections/header";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.sidebar}>
        <Sidebar />
      </div>
      <div className={s.body}>{children}</div>
    </div>
  );
}
