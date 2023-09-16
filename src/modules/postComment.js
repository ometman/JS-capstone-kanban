import axios from 'axios';

const apiEndPoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HrIKPRrYjrxS00NlIVCD/comments/';

const sendCommentData = async (obj) => {
  await axios.post(apiEndPoint, obj);
};

export default sendCommentData;