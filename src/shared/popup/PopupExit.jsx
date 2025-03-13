import ModalExit from "./ModalExit";

export default function PopupExit() {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <ModalExit />
        </div>
      </div>
    </div>
  );
}
