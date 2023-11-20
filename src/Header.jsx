import "./.Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="#">
          <p className="logo">PLANT</p>
        </a>
      </div>
      <div className="header__nav">
        <input type="checkbox" id="burger"/>
        <label htmlFor="burger"></label>
        <nav>
          <ul className="nav__list">
            <li className="nav__element">
              <a className="nav__link" href="#aboutUs">ABOUT US</a>
            </li>
            <li className="nav__element">
              <a className="nav__link" href="#events">EVENTS</a>
            </li>
            <li className="nav__element">
              <a className="nav__link" href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
      
    </div>
  );
}
export default Header;
