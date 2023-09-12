import { showRes } from './showResCom.js';
// import { countRes, countCom } from './counters.js';

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

export default getResData;