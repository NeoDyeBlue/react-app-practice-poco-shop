import yellowLogo from "../images/logo/poco-isologo-alone-black.png";

function Navigation() {
  return (
    <nav className="l-app__nav">
      <div className="c-nav">
        <div className="c-logo">
          <img className="c-logo__image" src={yellowLogo} alt="" />
        </div>
        <div className="c-nav__menu-button">
          {/* <i className="fa fa-bars c-nav__menu-icon"></i> */}
          <span class="material-icons-sharp c-nav__menu-icon">menu</span>
        </div>
        <ul className="c-nav__list">
          <li className="c-nav__item">Home</li>
          <li className="c-nav__item c-nav__item--active">Shop</li>
          <li className="c-nav__item">Community</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
