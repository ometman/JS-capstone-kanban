import * as infoInterface from './rescomInterface.js';
import { postResData } from './postResCom.js';
import { getResData } from './getResCom.js';
import getData from './getData.js';

const itemPopup = (imgId, theimg) => {
  const reserveBtn = document.querySelectorAll('.reserve-btn');
  const blurBg = document.querySelectorAll('.blur');
  const price = document.querySelector('.price');
  const title = document.querySelector('.description');
  const reservationContainer = document.querySelector('.reservation-container');

  reserveBtn.forEach((btn, btnIndex) => {
    btn.addEventListener('click', async () => {
      reservationContainer.classList.add('show');
      if (btnIndex + 1 === imgId) {
        // blurBg.forEach((ele) => {
        //   ele.className = 'blur-bg';
        // });
        infoInterface.resItemImage.src = theimg;
        postResData(imgId);
        getResData(imgId);
      }
      const data = await getData(btnIndex + 1);
      price.innerHTML = `${data.price} $`;
      title.innerHTML = `${data.title}`;
    });
  });
};

export default itemPopup;
