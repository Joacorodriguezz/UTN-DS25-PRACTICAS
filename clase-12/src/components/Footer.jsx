import '../styles/footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Librería Luciano Lollo</p>
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={20} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={20} />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
