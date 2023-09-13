import * as infoInterface from './rescomInterface.js';
import { postResData } from './postResCom.js';
import { getResData } from './getRescom.js';

const itemPopup = async (imgId, theimg) => {
  const reserveBtn = document.querySelectorAll('.reserve-btn');
  const commentBtn = document.querySelectorAll('.comment-btn');
  const blurBg = document.querySelectorAll('.blur');

  reserveBtn.forEach((btn, btnIndex) => {
    btn.addEventListener('click', () => {
      infoInterface.itemModal.style.display = 'flex';
      if (btnIndex + 1 === imgId) {
        blurBg.forEach((ele) => {
          ele.className = 'blur-bg';
        });
        infoInterface.resItemImage.src = theimg;
        postResData(imgId);
        getResData(imgId);
      }
    });
  });

  commentBtn.forEach((btn, btnIndex) => {
    btn.addEventListener('click', () => {
      infoInterface.itemModal.style.display = 'flex';
      if (btnIndex + 1 === imgId) {
        blurBg.forEach((ele) => {
          ele.className = 'blur-bg';
        });
        infoInterface.resItemImage.src = theimg;
        postResData(imgId);
        getResData(imgId);
      }
    });
  });
};

export default itemPopup;
