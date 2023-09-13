import { showReserveData } from './showResCom.js';
// import the count

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y9LdLW1Io3OiUKMxCNVo/reservations?item_id=';

export const getReserveData = async (imgId) => {
  let resultData;
  try {
    const response = await fetch(url + imgId);
    resultData = await response.json();
    showReserveData(resultData);
    // put count here
  } catch (error) {
    error.message = 'Reservations unreached';
  }
};

export default getReserveData;