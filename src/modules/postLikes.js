import sendLikesData from './sendLikesData.js';
import getLikesData from './getLikesData.js';

const postLikes = async (theId, likeBtns) => {
  let likes = {};
  likeBtns.forEach((btn, btnId) => {
    btn.addEventListener('click', async () => {
      if (btnId + 1 === theId) {
        const item = theId.toString();
        likes = {
          item_id: item,
        };
        await sendLikesData(likes);
      }
      const eid = (btnId + 1).toString();
      getLikesData().then((res) => {
        const itemID = res.find((item) => item.item_id === eid);
        btn.insertAdjacentHTML('afterbegin', itemID.likes);
      });
    });
  });
};

export default postLikes;