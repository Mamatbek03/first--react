import React from "react";
import strelke from "../img/strelka.png";
const Header = () => {
  return (
    <div class="navbar">
      <span class="navbar__logo">
        team<span class="navbar__t.">.</span>flow
      </span>

      <ul class="navbar__list">
        <li class="navbar__item">
          <a href="#">Salamat</a> <img src={strelke} alt="" />{" "}
        </li>
        <li class="navbar__item">
          <a href="#"> Nursultan</a>
          <img src={strelke} alt="" />
        </li>
        <li class="navbar__item">
          <a href="#">Asan</a>
          <img src={strelke} alt="" />
        </li>
        <li class="navbar__item">
          <a href="#"> Aman</a>
          <img src={strelke} alt="" />
        </li>
      </ul>
      <div class="navbar__item_right">
        <a class="navbar__item_right_a" href="#">
          Log in
        </a>
        <span class="navbar__item_btn">Get started free</span>
      </div>
    </div>
  );
};

export default Header;
