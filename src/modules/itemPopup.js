import * as infoInterface from './rescomInterface.js';
import getData from './getData.js';
import getResdataApi from './getResdataApi.js';

const itemPopup = () => {
  const reserveBtn = document.querySelectorAll('.reserve-btn');
  // const reservations = document.querySelector('.reservations');
  const reservations = infoInterface.resList;
  const price = document.querySelector('.price');
  const title = document.querySelector('.description');
  const image = document.querySelector('.item-image');
  const reservationContainer = document.querySelector('.reservation-container');
  const span = document.querySelector('.itemnumber');
  const counter = document.querySelector('.count');

  reserveBtn.forEach((btn, btnIndex) => {
    btn.addEventListener('click', async () => {
      reservationContainer.classList.add('show');

      const data = await getData(btnIndex + 1);

      span.innerHTML = `${data.id}`;

      image.src = `${data.image}`;
      price.innerHTML = `${data.price} $`;
      title.innerHTML = `${data.title}`;

      const response = await getResdataApi(btnIndex + 1);
      const results = response.data
        .map(
          (element) => `<li>${element.date_start} to ${element.date_end} from ${element.username}</li>`,
        )
        .join(' ');
      reservations.innerHTML = results;
      counter.innerHTML = response.data.length;
    });
  });
};

export default itemPopup;
