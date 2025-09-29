import logo from '../assets/logo.png';
import Navbar from "./Navbar";
import '../styles/header.css'
function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo Librería" className="logo" />
        <h1 className="title">Librería Luciano Lollo</h1>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
