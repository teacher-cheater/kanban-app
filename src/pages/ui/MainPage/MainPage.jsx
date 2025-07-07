import { Outlet } from "react-router-dom";
import Header from "../../../widgets/header/ui/Header/Header";
import Main from "../../../widgets/main/Main/Main";
export default function MainPage() {
  return (
    <div className="wrapper">
      <Outlet />
      <Header />
      <Main />
    </div>
  );
}
