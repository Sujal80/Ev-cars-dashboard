// src/Header.js
import React from "react";
import "./App.css";

const Header = () => {
  return (
    <header className="navbar-expand-md">
      <div className="navbar">
        <div className="container-xl">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  {/* Download SVG icon from http://tabler-icons.io/i/home */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                </span>
                <span className="nav-link-title">Home</span>
              </a>
            </li>
          </ul>
          <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
            <form action="./" method="get" autoComplete="off" noValidate>
              <div className="input-icon">
                <span className="input-icon-addon">
                  {/* Download SVG icon from http://tabler-icons.io/i/search */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                </span>
                <input
                  type="text"
                  value=""
                  className="form-control"
                  placeholder="Search…"
                  aria-label="Search in website"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
