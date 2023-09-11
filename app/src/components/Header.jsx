import React from "react";
import logo from "../images/Untitled.png";

export default function Header() {
  return (
    <div>
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={logo} alt="Logo" style={{ width: "20%", height: "50%" }} />
          <nav className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
            <ul>
              <a href="">Account</a>
            </ul>
            <ul>
              <a href="">Search</a>
            </ul>
            <ul>
              <a href="">Cart</a>
            </ul>
          </nav>
      </div>
    </div>
  );
}
