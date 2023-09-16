import {
  getLikesData,
  sendLikesData,
} from './likesFetch.js';
import likesData from './likesDataStore.js';

export default class TheLikes {
  likesStoredData = JSON.parse(localStorage.getItem('likesData'))

  postLike = async (pid) => {
    let newlike = {};
    const item = (pid).toString();
    newlike = {
      item_id: item,
    };
    await sendLikesData(newlike);
    getLikesData().then((res) => {
      likesData(res);
    });
  }

    getLikes = async () => {
      const likedValues = await getLikesData()
        .then((res) => {
          likesData(res);
          return res;
        });
      return likedValues;
    };

    likesUpdate = async (eId) => {
      const likeS = this.likesStoredData;
      getLikesData().then((res) => {
        res.forEach((item) => {
          likeS.forEach((like) => {
            const ApiItem = res.find((item) => Number(item.item_id) === Number(eId));
            const localItem = likeS.find((item) => Number(item.item_id) === Number(eId));
            if (ApiItem.item_id === localItem.item_id) {
              like.likes = item.likes;
            }
          });
        });
      });
    };

    getNewLike = async (itemId) => {
      await this.postLike(itemId);
      await this.getLikes();
      await this.likesUpdate(itemId);
    };

  productsCount = async () => this.productsArray.length;
}