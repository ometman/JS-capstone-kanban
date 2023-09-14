import axios from 'axios';

const apiEndPoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/votSVyM8b966LHhFVfLV/reservations?item_id=';

const getResdataApi = async (itemId) => {
  const response = await axios.get(apiEndPoint + itemId);

  return response;
};

export default getResdataApi;
