import { showRes, showCom } from './showResCom.js';
import { comCounter } from './counters.js';

const url =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HrIKPRrYjrxS00NlIVCD/reservations?item_id=';

export const getResData = async (imgId) => {
  let resultData;
  try {
    const response = await fetch(url + imgId);
    resultData = await response.json();
    showRes(resultData);
    // countRes(resultData);
  } catch (error) {
    error.message = 'No reservations Available';
  }
};

const url2 =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HrIKPRrYjrxS00NlIVCD/comments?item_id=';

export const getComData = async (imgId) => {
  let resultData;
  try {
    const response = await fetch(url2 + imgId);
    resultData = await response.json();
    showCom(resultData);
    // countRes(resultData);
    comCounter(resultData.length);
    console.log(resultData.length)
  } catch (error) {
    error.message = 'No comments available';
  }
};

