import React from "react";

export default function Header() {
  return (
    <div>
        <hr 
            style={{
                height:'.5px',
                borderRadius: '1px',
                background: 'grey'
            }}>
        </hr>
        <nav
          className="header"
          style={{
            display: "flex",
            justifyContent: 'space-evenly'
          }}
        >
          <ul>
            <a href="">Men</a>
          </ul>
          <ul>
            <a href="">Women</a>
          </ul>
          <ul>
            <a href="">Accessories</a>
          </ul>
          <ul>
            <a href="">About</a>
          </ul>
        </nav>
        <hr 
            style={{
                height:'.5px',
                borderRadius: '1px',
                background: 'grey'
            }}>
        </hr>

    </div>
  );
}
