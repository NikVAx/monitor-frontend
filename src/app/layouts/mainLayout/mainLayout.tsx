import { PropsWithChildren } from "react";
import s from "./mainLayout.module.css";
import { Sidebar } from "@/sections/sidebar";


export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className={s.container}>
      <div className={s.header}></div>
      <div className={s.sidebar}>
        <Sidebar/>       
      </div>
      <div className={s.body}>{children}</div>
    </div>
  );
}
