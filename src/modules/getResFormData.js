import sendRestData from './sendRestData.js';

const getResFormData = async () => {
  const username = document.querySelector('.username');
  const id = document.querySelector('.itemnumber');

  const startDate = document.querySelector('.startdate');
  const enddate = document.querySelector('.enddate');

  if (startDate.value === '' || enddate.value === '' || username.value === '') {
    return;
  }

  const item_id = id.innerHTML;

  const obj = {
    date_end: startDate.value,
    date_start: enddate.value,
    username: username.value,
    item_id,
  };

  await sendRestData(obj);

  startDate.value = '';
  enddate.value = '';
  username.value = '';
};

export default getResFormData;
