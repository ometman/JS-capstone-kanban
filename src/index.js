import './index.css';
import getProducts from './modules/getProducts.js';
import itemPopup from './modules/itemPopup.js';
import closePopup from './modules/closePopUp.js';
import Logo from './logo/logo.jpg';
import getResFormData, { getCommentsFormData } from './modules/getResFormData.js';
import commentPopup from './modules/commentPopup.js';
import getResFormData from './modules/getResFormData.js';
import productCount from './modules/productCount.js';

const store = document.querySelector('.counter');


const logo = document.querySelector('.logo');
logo.innerHTML = '<div class="oke">O K E</div>';

// Items Interface
const itemsContainer = async () => {
  const theProducts = await getProducts();
  const productsList = document.getElementById('products-list');
  productsList.innerHTML = '';
  
  const getAllProduts = async () => {
    for (let i = 0; i < theProducts.length; i += 1) {
      const itemId = i + 1;
      productsList.insertAdjacentHTML(
        'beforeend',
        `
        <li class="store-items">
        <img class="store-items-img" src="${theProducts[i].image}"/>
        <div class="title-like"><h2 class="itemid">Item ${itemId} </h2>
        </div>
        <button id =${i.itemId} comment-btn class="comment-btn">Comments</button>
        <button id ="reserve-btn" class="reserve-btn">Reservations</button>
        </li>`,
      );

      itemPopup();
      commentPopup();
      // await getResdataApi(itemId);
    }
  };

  return getAllProduts();
};

// display items
itemsContainer();
closePopup();
productCount();
const count = await productCount();
store.innerHTML = count;
// getData();

const form = document.querySelector('.reserve-form');
form.addEventListener('submit', getResFormData);

const commentForm = document.querySelector('.comment-form');
commentForm.addEventListener('submit', getCommentsFormData);
