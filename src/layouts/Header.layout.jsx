import image from "../assets/LOGO-removebg-preview.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header>
        <div>
          <img src={image} className="logo" />
        </div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/device1">ESP32</Link>
          </li>
          <li>
            <Link to="/device3">POSTMAN</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
