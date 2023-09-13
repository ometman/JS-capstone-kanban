import * as resInterface from './rescomInterface.js';

export const showReserveData = (resdata) => {
  resdata.forEach((res, resIndex) => {
    const resCount = resdata.length;
    resInterface.resTitle.innerText = `Reservations (${resCount})`;
    const resList = document.createElement('li');
    resList.className = 'reserve-list-content';
    resList.innerHTML = `
    ${resdata[resIndex].date_start} - ${resdata[resIndex].date_end} by ${resdata[resIndex].username}`;
    resInterface.resListContainer.appendChild(resList);
  });
};

export default showReserveData;
