import React from "react";
import g27 from "../img/Group 27.png";
import g28 from "../img/Group 28.png";
import g29 from "../img/Group 29.png";
import g30 from "../img/Group 30.png";
import vector from "../img/Vector.png";
import layer from "../img/Layer 2.png";
import store from "../img/app store.png";

const Footer = () => (
  <div class="flooter">
    <div class="flooter__start">
      <ul class="flooter__list">
        <li class="flooter__item1">Company</li>
        <li class="flooter__item">About us</li>
        <li class="flooter__item">Blog</li>
        <li class="flooter__item">Careers</li>
        <li class="flooter__item">Contact us</li>
        <img src={vector} alt="" class="flooter__item_img2" />
      </ul>
      <ul class="flooter__list">
        <li class="flooter__item1">Support</li>
        <li class="flooter__item">Help Center</li>
        <li class="flooter__item">Safety Center</li>
        <li class="flooter__item">Community</li>
        <img src={vector} alt="" class="flooter__item_img2" />
      </ul>
      <ul class="flooter__list">
        <li class="flooter__item1">Legal</li>
        <li class="flooter__item">Cookies Policy</li>
        <li class="flooter__item">Privacy Policy</li>
        <li class="flooter__item">Terms of Service</li>
        <img src={vector} alt="" class="flooter__item_img2" />
      </ul>
      <ul class="flooter__list">
        <li class="flooter__item1">Install App</li>
        <li class="flooter__item_img1">
          <img src={layer} alt="" />
        </li>
        <li class="flooter__item_img1">
          <img src={store} alt="" />
        </li>
      </ul>
    </div>
    <div class="flooter__center">
      {/* </div> */}
      <div class="flooter__end">
        <p class="flooter__end_left">© 2020 - All rights reserved</p>
        <div class="flooter__end_reigth">
          <img src={g28} alt="" class="flooter__end_img" />
          <img src={g27} alt="" class="flooter__end_img" />
          <img src={g29} alt="" class="flooter__end_img" />
          <img src={g30} alt="" class="flooter__end_img" />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
