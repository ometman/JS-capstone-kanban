const postLikesurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/votSVyM8b966LHhFVfLV/likes'; // group votSVyM8b966LHhFVfLV  // personal 7XHN1cztlylv04wIMZij

export const sendLikesData = async (likeData) => {
  try {
    await fetch(postLikesurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(likeData),
    });
  } catch (error) {
    error.message = 'Something went wrong';
  }
};
export default sendLikesData;
