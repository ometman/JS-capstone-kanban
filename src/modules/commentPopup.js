import * as comInterface from './commentInterface.js';
import getData, { getCommentData } from './getData.js';
import getCommentCount from './commentCount.js';

const commentPopup = async () => {
  const commentBtn = document.querySelectorAll('.comment-btn');
  const commentContainer = document.querySelector('.comment-container');
  const image = document.querySelector('.itemimage');
  const count = document.getElementById('comment-count');

  const price = document.querySelector('.prices');
  const comments = comInterface.comList;
  const title = document.querySelector('.title');

  const commentId = document.querySelector('.commentNumber');

  commentBtn.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      commentContainer.classList.add('showcomment');

      const results = await getData(index + 1);
      const comment = await getCommentData(index + 1);
      count.innerHTML = getCommentCount(comment);
      commentId.innerHTML = `${results.id}`;

      image.src = `${results.image}`;
      price.innerHTML = `${results.price} $`;
      title.innerHTML = `${results.title}`;
      while (comments.firstChild) {
        comments.removeChild(comments.firstChild);
      }
      comment.forEach((com) => {
        if (typeof (com.comment) === 'string') {
          const commentDiv = document.createElement('li'); // Create a new <div> element
          commentDiv.classList.add('comment-display');
          commentDiv.textContent = `${com.comment} by ${com.username}`; // Set the text content of the <div> to the comment
          comments.appendChild(commentDiv); // Append the <div> to the comments container
        }
      });
    });
  });
};

export default commentPopup;
