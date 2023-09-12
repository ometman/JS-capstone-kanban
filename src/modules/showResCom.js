export const showRes = (resdata) => {
  const resListContainer = document.querySelector('.reserve-list-container');
  resdata.forEach((res, resIndex) => {
    const resList = document.createElement('p');
    res.className = 'reserve-list-content';
    resList.innerHTML = `
    ${resdata[resIndex].date_start} - ${resdata[resIndex].date_end} by ${resdata[resIndex].username}`;
    resListContainer.appendChild(resList);
  });
};
