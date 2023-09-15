import getLikesData from './getLikesData.js';

const getLikes = (theEl) => {
  theEl.forEach((el, elId) => {
    const eid = (elId + 1).toString();
    getLikesData().then((res) => {
      const itemID = res.find((item) => item.item_id === eid);
      el.textContent = itemID.likes;
    });
  });
};

export default getLikes;