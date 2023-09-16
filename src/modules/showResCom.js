import * as infoInterface from './rescomInterface.js';

export const showRes = (resdata) => {
  resdata.forEach((res, resIndex) => {
    const resList = document.createElement('p');
    resList.className = 'reserve-list-content';
    resList.innerHTML = `
    ${resdata[resIndex].date_start} - ${resdata[resIndex].date_end} by ${resdata[resIndex].username}`;
    infoInterface.resListContainer.appendChild(resList);
  });
};

export default showRes;
