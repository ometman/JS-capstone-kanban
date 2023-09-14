import * as infoInterface from './rescomInterface.js';
import { postResData } from './postResCom.js';
import { getResData } from './getResCom.js';
import getData from './getData.js';
import getResdataApi from './getResdataApi.js';
import { result } from 'lodash';

const itemPopup = () => {
  const reserveBtn = document.querySelectorAll('.reserve-btn');
  //const blurBg = document.querySelectorAll('.blur');
  const reservations = document.querySelector('.reservations');
  console.log(reservations);
  const price = document.querySelector('.price');
  const title = document.querySelector('.description');
  const image = document.querySelector('.item-image');
  const reservationContainer = document.querySelector('.reservation-container');
  const span = document.querySelector('.itemnumber');
  const counter = document.querySelector('.count');

  reserveBtn.forEach((btn, btnIndex) => {
    btn.addEventListener('click', async () => {
      reservationContainer.classList.add('show');
      // if (btnIndex + 1 === imgId) {
      //   // blurBg.forEach((ele) => {
      //   //   ele.className = 'blur-bg';
      //   // });
      //   //infoInterface.resItemImage.src = theimg;
      //   //postResData(imgId);
      //   //getResData(imgId);
      // }
      const data = await getData(btnIndex + 1);
      //console.log('dataa', data.id);
      span.innerHTML = `${data.id}`;

      image.src = `${data.image}`;
      price.innerHTML = `${data.price} $`;
      title.innerHTML = `${data.title}`;
      // const resData = await getResdataApi(btnIndex + 1);
      // console.log('resDate', resData);
      //getResFormDataApi();

      const response = await getResdataApi(btnIndex + 1);
      const results = response.data
        .map(
          (element) =>
            `<li>${element.date_start} to ${element.date_end} from ${element.username}</li>`
        )
        .join(' ');
      reservations.innerHTML = results;
      counter.innerHTML = response.data.length;
    });

    //getResdataApi(btnIndex + 1);
  });
};

export default itemPopup;
