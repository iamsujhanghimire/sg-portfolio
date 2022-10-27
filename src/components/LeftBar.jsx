import "./leftbar.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaCodepen,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Leftbar() {
  return (
    <div className="leftBar">
      <ul className="social">
        <li>
          <a
            href="http://www.github.com/iamsujhanghimire"
            target="_blank"
            className="github"
          >
            <FaGithub className="icon" />
          </a>
        </li>
        <li>
          <a
            href="http://www.instagram.com/iamsujhanghimire"
            target="_blank"
            className="ig"
          >
            <FaInstagram className="icon" />
          </a>
        </li>
        <li>
          <a
            href="http://www.facebook.com/iamsujhanghimire"
            target="_blank"
            className="fb"
          >
            <FaFacebookF className="icon" />
          </a>
        </li>
        <li>
          <a
            href="http://www.linkedin.com/in/iamsujhanghimire"
            className="linkedin"
            target="_blank"
          >
            <FaLinkedinIn className="icon" />
          </a>
        </li>
        {/* <li>
          <a
            href="http://www.codepen.io/iamsujhanghimire"
            target="_blank"
            className="codepen"
          >
            <FaCodepen className="icon" />
          </a>
        </li> */}
        <div className="vertline"></div>
      </ul>
    </div>
  );
}
