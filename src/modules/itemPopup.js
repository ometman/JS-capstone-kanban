import * as infoInterface from './rescomInterface.js';
import { postResData } from './postResCom.js';
import { getResData } from './getResCom.js';

const itemPopup = (imgId, theimg) => {
  const reserveBtn = document.querySelectorAll('.reserve-btn');
  const blurBg = document.querySelectorAll('.blur');

  reserveBtn.forEach((btn, btnIndex) => {
    btn.addEventListener('click', () => {
      infoInterface.itemModal.style.display = 'flex';
      console.log('btn index', btnIndex);
      if (btnIndex + 1 === imgId) {
        blurBg.forEach((ele) => {
          ele.className = 'blur-bg';
        });
        infoInterface.resItemImage.src = theimg;
        postResData(imgId);
        getResData(imgId);
        console.log('image id', imgId);
      }
    });
  });
};

export default itemPopup;
