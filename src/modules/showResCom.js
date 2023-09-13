import * as infoInterface from './rescomInterface.js';
 
export const showRes = (resdata) => {
  resdata.forEach((res, resIndex) => {
    const resList = document.createElement('li');
    resList.className = 'reserve-list-content';
    resList.innerHTML = `
    ${resdata[resIndex].date_start} - ${resdata[resIndex].date_end} by ${resdata[resIndex].username}`;
    infoInterface.resListContainer.appendChild(resList);
  });
};

export const showCom = (comdata) => {
  comdata.forEach((com, comIndex) => {
    const comList = document.createElement('li');
    comList.className = 'reserve-list-content';
    comList.innerHTML = `
    ${comdata[comIndex].date_start} - ${comdata[comIndex].date_end} by ${comdata[comIndex].username}`;
    infoInterface.comListContainer.appendChild(comList);
  });
};


