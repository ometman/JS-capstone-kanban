import axios from 'axios';

const likesurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7XHN1cztlylv04wIMZij/likes';

export const sendLikesData = async (itemId) => {
  console.log(itemId);
  const { data } = await axios.post(likesurl, itemId);
  console.log(data);
};

// const sendLikesData = async (gameData) => {
//     console.log(gameData);
//   await axios(likesurl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({gameData}),
//   });

//   console.log('success')
// };

export default sendLikesData;
