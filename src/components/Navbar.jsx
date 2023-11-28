import React from "react";
import logo from "../assets/images/blocket.jpg";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <a class="navbar-brand" href="#">
          <img src={logo} alt="Blocket logo" style={{ width: "120px" }} />
        </a>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Login
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Sign up
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
