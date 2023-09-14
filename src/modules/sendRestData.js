import axios from 'axios';

const apiEndPoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/votSVyM8b966LHhFVfLV/reservations/';

const sendRestData = async (obj) => {
  await axios.post(apiEndPoint, obj);
};

export default sendRestData;
