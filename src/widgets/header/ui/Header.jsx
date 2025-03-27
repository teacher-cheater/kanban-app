import HeaderNav from "./HeaderNav";

export default function Header({ setIsAuth }) {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    setIsAuth(false);
    navigate("/sign-in");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <HeaderNav handleLogout={handleLogout} />
        </div>
      </div>
    </header>
  );
}
