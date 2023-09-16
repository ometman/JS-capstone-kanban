import axios from 'axios';

const getData = async (id) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HrIKPRrYjrxS00NlIVCD/comments?item_id=';

export const getCommentData = async (id) => {
  const { data } = await axios.get(`${url}${id}`);
  return data;
};

export default getData;
