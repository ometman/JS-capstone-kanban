import * as infoInterface from './rescomInterface.js';
import { getReserveData } from './getResCom.js';
import { postReserveData } from './postResCom.js';

const itemPopup = async (imgId, theimg) => {
  const reserveBtn = document.querySelectorAll('.reserve-btn');
  const blurBg = document.querySelectorAll('.blur');

  reserveBtn.forEach((btn, btnIndex) => {
    btn.addEventListener('click', () => {
      infoInterface.itemModal.style.display = 'flex';
      if (btnIndex + 1 === imgId) {
        blurBg.forEach((ele) => {
          ele.className = 'blur-bg';
        });
        infoInterface.resItemImage.src = theimg;
        getReserveData(imgId);
        postReserveData(imgId);
      }
    });
  });
};

export default itemPopup;
