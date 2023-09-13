import * as infoInterface from './rescomInterface.js';

export const showReserveData = (resdata) => {
  resdata.forEach((res, resIndex) => {
    const resCount = resdata.length;
    if (resCount >= 0) {
      infoInterface.popupTitle.textContent = 'Reservations';
    }
    const resList = document.createElement('li');
    resList.className = 'reserve-list-content';
    resList.innerHTML = `
    ${resdata[resIndex].date_start} - ${resdata[resIndex].date_end} by ${resdata[resIndex].username}`;
    infoInterface.resListContainer.appendChild(resList);
  });
};

export default showReserveData;
