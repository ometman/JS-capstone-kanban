import * as resInterface from './rescomInterface.js';
import { getReserveData } from './getResCom.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y9LdLW1Io3OiUKMxCNVo/reservations/';

export const postReserveData = (imgId) => {
  const theForm = resInterface.resForm;
  theForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const itemId = String(imgId);
    const userName = resInterface.userInput.value;
    const dateStart = resInterface.startDate.value;
    const dateEnd = resInterface.endDate.value;
    const resInput = {
      // eslint-disable-next-line quote-props
      'item_id': itemId,
      // eslint-disable-next-line quote-props
      'username': userName,
      // eslint-disable-next-line quote-props
      'date_start': dateStart,
      // eslint-disable-next-line quote-props
      'date_end': dateEnd,
    };
    // console.log(resInput);
    const postData = await fetch(`${url}`, {
      method: 'POST',
      body: JSON.stringify(resInput),
    });
    // console.log(resInput);
    const theResponse = postData.json();
    console.log(theResponse);
    getReserveData(imgId);
    theForm.reset();
  });
};

export default postReserveData;
