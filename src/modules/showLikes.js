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
  }

    getLikes = async () => {
      const likedValues = await getLikesData()
        .then((res) => {
          res.sort((task1, task2) => task1.item_id - task2.item_id);
          likesData(res);
          return res;
        });
      return likedValues;
    };

    getNewLike = async (itemId) => {
      await this.postLike(itemId);
      await this.getLikes();
      // await this.likesUpdate(itemId);
    };

  productsCount = async () => this.productsArray.length;
}