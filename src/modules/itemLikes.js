import sendLikesData from './sendRestData.js';
// import getLikesData from './getResdataApi.js'

const itemLikes = async (theId, likeBtns) => {
  // const countEl = document.getElementById('likes-count');
  // const likesCount = await getLikesData();
  let likes = {};
  likeBtns.forEach((btn, btnId) => {
    btn.addEventListener('click', () => {
      if (btnId + 1 === theId) {
        console.log(theId);
        const item = theId;
        likes = {
          item_id: item,
        };
        console.log(likes);
        sendLikesData(likes);
        // countEl.textContent = likesCount;
      }
    });
  });
};

export default itemLikes;