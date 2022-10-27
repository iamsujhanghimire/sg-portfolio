import "./navbar.scss";
import { useState, useEffect } from "react";
import { Document,Page } from "react-pdf";

export default function Navbar() {

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
          {/* <a href="#experience" className="navElements exp">
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
          </a> */}
          <a href="#construction" className="navElements const">
            &lt;<span className="navTitle">page under construction</span>
            <span className="slash">/</span>&gt;
          </a>
          <a
            href="documents/SujhanGhimire22.pdf"
            download="SujhanGhimire22.pdf"
          >
            <button className="navElements resume">Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
