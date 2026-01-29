import "./header.css";
import Icon from '../../assets/logo-icon.webp';
import Word from '../../assets/logo-word.webp';

const Header = () => {
  return (
    <header className="header">

        <a href="#home">
            <div className="logo" >
                <img className="icon" src={Icon} alt="" />
                <img className="word" src={Word} alt="" />
            </div>
        </a>
            

      <nav className="nav">
        <ul className="navList">
          <li><a className="navLink active" href="#home">Home</a></li>
          <li><a className="navLink" href="#about">About</a></li>
          <li><a className="navLink" href="#services">Services</a></li>
          <li><a className="navLink" href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="headerActions">
        <a className="btnPrimary" href="#book">Book Appointment</a>
      </div>
    </header>
  );
};

export default Header;
