import AuthForm from "../../../features/auth/ui/AuthForm/AuthForm";
import CreateTask from "../../../shared/popup/CreateTask";
import NewCard from "../../../shared/popup/NewCard";
import PopupExit from "../../../shared/popup/PopupExit";
import Header from "../../../widgets/header/ui/Header";
import Main from "../../../widgets/main/Main/Main";

export default function MainPage() {
  return (
    <div className="wrapper">
      <AuthForm />
      <PopupExit />
      <NewCard />
      <CreateTask />
      <Header />
      <Main />
    </div>
  );
}
