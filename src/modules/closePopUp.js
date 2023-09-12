import * as infoInterface from './rescomInterface.js';

const closePopup = async () => {
  const closeModalBtn = infoInterface.closeBtn;
  const blurBg = document.querySelectorAll('.blur');
  closeModalBtn.innerHTML = '<a href="#"><p class="close-btn">&times</p></a>';
  closeModalBtn.addEventListener('click', () => {
    infoInterface.itemModal.style.display = 'none';
    blurBg.forEach((ele) => {
      ele.classList.remove('blur-bg');
    });
  });
};

export default closePopup;
