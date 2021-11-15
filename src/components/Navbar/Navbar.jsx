import "./navbar.scss";
import { useState, useEffect } from "react";

export default function Navbar() {
  // const [show, setShow] = useState(true);
  // const controlNavbar = () => {
  //   if (window.scrollY > 100) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavbar);

  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar);
  //   };
  // }, []);

  return (
    <div className="nav navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#hero" className="logo">
            {" "}
            &lt;<h4>sujhan </h4>
            <span className="slash">/</span>&gt;
          </a>
        </div>
        <div className="right">
          <a href="#experience" className="navElements exp">
            &lt;<span className="navTitle">experience</span>
            <span className="slash">/</span>&gt;
          </a>
          <a href="#projects" className="navElements proj">
            &lt;<span className="navTitle">projects</span>
            <span className="slash">/</span>&gt;
          </a>
          <a href="#blogs" className="navElements blog">
            &lt;<span className="navTitle">blogs</span>
            <span className="slash">/</span>&gt;
          </a>
          <a href="#contact" className="navElements cont">
            &lt;<span className="navTitle">contact</span>
            <span className="slash">/</span>&gt;
          </a>
          <a
            href="http://www.linkedin.com/in/iamsujhanghimire"
            className="navElements resume"
          >
            view my resume
          </a>
        </div>
      </div>
    </div>
  );
}
