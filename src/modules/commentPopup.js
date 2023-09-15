import * as comInterface from './commentInterface.js';
import getData from './getData.js';

const commentPopup = async () => {
  const commentBtn = document.querySelectorAll('.comment-btn');
  const commentContainer = document.querySelector('.comment-container');
  const image = document.querySelector('.itemimage');

  const price = document.querySelector('.prices');
  const comments = comInterface.comList;
  const title = document.querySelector('.title');

  const span = document.querySelector('.idnumber');

  commentBtn.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      console.log('comments', index);
      commentContainer.classList.add('showcomment');

      const results = await getData(index + 1);

      span.innerHTML = `${results.id}`;

      image.src = `${results.image}`;
      price.innerHTML = `${results.price} $`;
      title.innerHTML = `${results.title}`;
    });
  });
};

export default commentPopup;
