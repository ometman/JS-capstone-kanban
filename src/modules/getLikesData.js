const getLikesurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/votSVyM8b966LHhFVfLV/likes';

const getLikesData = async () => {
  const response = await fetch(getLikesurl);
  const feedback = await response.json();
  return feedback;
};

export default getLikesData;