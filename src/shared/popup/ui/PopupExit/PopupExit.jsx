import ModalExit from "../../ModalExit";

export default function PopupExit({handleClose}) {
  console.log(handleClose);
  
  return (
    // <div className="pop-exit">
    //   <div className="pop-exit__container">
    //     <div className="pop-exit__block">
    //       <div className="pop-exit__ttl">
    //         <h2>Выйти из аккаунта?</h2>
    //       </div>
    //       <ModalExit />
    //     </div>
    //   </div>
    // </div>
        <div className="pop-exit">
        <div className="pop-exit__container">
          <div className="pop-exit__block">
            <div className="pop-exit__ttl">
              <h2>Выйти из аккаунта?</h2>
            </div>
            <ModalExit handleClose={handleClose} />
          </div>
        </div>
      </div>
  );
}
