import './index.css';
import getProducts from './modules/getProducts.js';
import itemPopup from './modules/itemPopup';
import closePopup from './modules/closePopUp';

// Items Interface
const itemsContainer = async () => {
  const theProducts = await getProducts();
  const productsList = document.getElementById('products-list');
  productsList.innerHTML = '';
  const getAllProduts = () => {
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
        </li>`
      );

      itemPopup(i + 1, theProducts[i].image);
    }

    // const button = document.querySelectorAll('.reserve-btn');
    // for (let btn of button) {
    //   btn.addEventListener('click', (e) => {
    //     const card = e.target.parentNode;
    //     console.log(card);
    //   });
    // }
  };

  return getAllProduts();
};

// display items
itemsContainer();
closePopup();
