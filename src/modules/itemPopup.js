import * as infoInterface from './rescomInterface.js';
import { getReserveData } from './getResCom.js';
import { postReserveData } from './postResCom.js';

const itemPopup = async (imgId, theimg, objDetails) => {
  const reserveBtn = document.querySelectorAll('.reserve-btn');
  const blurBg1 = document.querySelectorAll('.blur');
  const blurBg2 = document.getElementById('products-list');

  reserveBtn.forEach((btn, btnIndex) => {
    btn.addEventListener('click', () => {
      infoInterface.itemModal.style.display = 'flex';
      if (btnIndex + 1 === imgId) {
        blurBg1.forEach((ele) => {
          ele.className = 'blur-bg';
          blurBg2.classList.add('blur-bg');
        });
        infoInterface.resItemImage.src = theimg;
        infoInterface.itemTitle.innerText = `Item ${imgId}`;
        infoInterface.itemDetails.innerHTML = `
        <ul class="item-price-category">
        <li class="item-category">Category: ${objDetails.category}</li>
        <li class="item-price">Price: ${objDetails.price}</li>
        </ul>
        <p class="item-description">Description: ${objDetails.description}</p>`;
        getReserveData(imgId);
        postReserveData(imgId);
      }
    });
  });
};

export default itemPopup;
