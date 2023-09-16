import sendRestData from './sendRestData.js';
import * as infoInterface from './rescomInterface.js';
import getResdataApi from './getResdataApi.js';

const getResFormData = async (e) => {
  e.preventDefault();
  const reservations = infoInterface.resList;
  const counter = document.querySelector('.count');
  const username = document.querySelector('.username');
  const id = document.querySelector('.itemnumber');

  const startDate = document.querySelector('.startdate');
  const enddate = document.querySelector('.enddate');

  if (startDate.value === '' || enddate.value === '' || username.value === '') {
    return;
  }

  const itemId = id.innerHTML;

  const obj = {
    date_end: startDate.value,
    date_start: enddate.value,
    username: username.value,
    item_id: itemId,
  };

  await sendRestData(obj);

  startDate.value = '';
  enddate.value = '';
  username.value = '';

  const response = await getResdataApi(itemId);
  const results = response.data
    .map(
      (element) =>
        `<li>${element.date_start} to ${element.date_end} from ${element.username}</li>`
    )
    .join(' ');
  reservations.innerHTML = results;
  counter.innerHTML = response.data.length;
};

export default getResFormData;
