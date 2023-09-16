import './index.css';
import getProducts from './modules/getProducts.js';
import itemPopup from './modules/itemPopup.js';
import closePopup from './modules/closePopUp.js';
import getResFormData, { getCommentsFormData } from './modules/getResFormData.js';

import commentPopup from './modules/commentPopup.js';

import TheLikes from './modules/showLikes.js';

import productCount from './modules/productCount.js';

const store = document.querySelector('.counter');

const logo = document.querySelector('.logo');
logo.innerHTML = '<div class="oke">O K E</div>';

// Items Interface
const itemsContainer = async () => {
  const likes = await new TheLikes().likesStoredData;
  const theProducts = await getProducts();

  const productsList = document.getElementById('products-list');
  productsList.innerHTML = '';
  const getAllProducts = async () => {
    for (let i = 0; i < theProducts.length; i += 1) {
      const itemId = i + 1;
      productsList.insertAdjacentHTML(
        'beforeend',
        `
        <li class="store-items">
        <img class="store-items-img" src="${theProducts[i].image}"/>
        <div class="title-like"><h2 class="itemid">Item ${itemId} </h2>
        <i id="${i}" class="fa fa-heart likebtn" aria-hidden="true"></i>
        <p class="likes-count">${likes[i].likes}</p>
        </div>
        <button id ="comment-btn" class="comment-btn">Comments</button>
        <button id ="reserve-btn" class="reserve-btn">Reservations</button>
        </li>`,
      );
      commentPopup();
      itemPopup();
    }
  };
  return getAllProducts();
};

// display items
itemsContainer();
closePopup();

document.addEventListener(('click'), async (e) => {
  const newLike = new TheLikes();
  if (e.target.classList.contains('likebtn')) {
    await newLike.getNewLike(e.target.id);
    await itemsContainer();
  }
});
productCount();
const count = await productCount();
store.innerHTML = count;
// getData();

const form = document.querySelector('.reserve-form');
const commentForm = document.querySelector('.comment-form');
commentForm.addEventListener('submit', getCommentsFormData);
form.addEventListener('submit', getResFormData);