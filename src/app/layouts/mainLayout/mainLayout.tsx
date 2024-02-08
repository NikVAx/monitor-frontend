import s from "./mainLayout.module.css"

function MainLayout() {
  return (
    <div className={s.container}>
      <div className={s.header}></div>
      <div className={s.sidebar}></div>
      <div className={s.body}></div>
    </div>
  );
}

export default MainLayout;
