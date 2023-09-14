import * as infoInterface from './rescomInterface.js';

const closeItemPopup = async () => {
  const closeModalBtn = infoInterface.closeBtn;
  const blurBg = document.querySelectorAll('.blur');
  const blurBg2 = document.getElementById('products-list');

  closeModalBtn.innerHTML = '<a href="#"><p class="close-btn">&times</p></a>';
  closeModalBtn.addEventListener('click', () => {
    infoInterface.itemModal.style.display = 'none';
    blurBg.forEach((ele) => {
      ele.classList.remove('blur-bg');
      blurBg2.classList.remove('blur-bg');
    });
  });
};

export default closeItemPopup;
