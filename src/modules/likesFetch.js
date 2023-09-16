const getLikesurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/votSVyM8b966LHhFVfLV/likes';
const postLikesurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/votSVyM8b966LHhFVfLV/likes'; // group votSVyM8b966LHhFVfLV  // personal 7XHN1cztlylv04wIMZij

const getLikesData = async () => {
  const response = await fetch(getLikesurl, {
    method: 'GET',
  });
  const likesResponse = await response.text();
  if (likesResponse && likesResponse !== '') {
    return JSON.parse(likesResponse);
  }
  return likesResponse;
};

const sendLikesData = async (likeData) => {
  await fetch(postLikesurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(likeData),
  });
};
export { sendLikesData, getLikesData };
