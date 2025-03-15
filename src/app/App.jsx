import CreateTask from "../shared/popup/CreateTask";
import NewCard from "../shared/popup/NewCard";
import PopupExit from "../shared/popup/PopupExit";
import Header from "../widgets/header/ui/Header";
import Main from "../widgets/main/Main/Main";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <PopupExit />
      <NewCard />
      <CreateTask />
      <Header />
      <Main />
    </div>
  );
}

export default App;
