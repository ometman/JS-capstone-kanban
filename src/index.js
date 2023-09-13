import './index.css';
import getProducts from './modules/getItems.js';
import itemPopup from './modules/itemPopup.js';
import closeItemPopup from './modules/closePopUp.js';

// Items Interface
const itemsContainer = async () => {
  const theProducts = await getProducts();
  const productsList = document.getElementById('products-list');
  productsList.innerHTML = '';
  const allProducts = () => {
    for (let i = 0; i < theProducts.length; i += 1) {
      const itemId = i + 1;
      productsList.insertAdjacentHTML(
        'beforeend',
        `
        <li class="store-items">
        <img class="store-items-img" src="${theProducts[i].image}"/>
        <div class="title-like"><h2 class="itemid">Item ${itemId} </h2>
        </div>
        <button id ="comment-btn" class="comment-btn">Comments</button>
        <button id ="reserve-btn" class="reserve-btn">Reservations</button>
        </li>`,
      );
      itemPopup(i + 1, theProducts[i].image);
    }
  };

  return allProducts();
};

itemsContainer();
closeItemPopup();
