import sendRestData from './sendRestData.js';
import postComment from './postComment.js';
import * as comInterface from './commentInterface.js';

const getResFormData = async (e) => {
  e.preventDefault();
  const username = document.querySelector('.username');
  const id = document.querySelector('.itemnumber');

  const startDate = document.querySelector('.startdate');
  const enddate = document.querySelector('.enddate');

  if (startDate.value === '' || enddate.value === '' || username.value === '') {
    return;
  }

  const itemId = id.innerHTML;

  const obj = {
    date_end: startDate.value,
    date_start: enddate.value,
    username: username.value,
    item_id: itemId,
  };

  await sendRestData(obj);

  startDate.value = '';
  enddate.value = '';
  username.value = '';
};

export const getCommentsFormData = async (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('comment-username');
  const commentInput = document.getElementById('textarea');
  const commentId = document.querySelector('.commentNumber');
  const comments = comInterface.comList;

  if (nameInput.value === '' || commentInput.value === '') {
    return;
  }

  const itemId = commentId.innerHTML;

  const obj = {
    item_id: itemId,
    username: nameInput.value,
    comment: commentInput.value,
  };

  await postComment(obj);

  const commentDiv = document.createElement('li'); // Create a new <div> element
  commentDiv.classList.add('comment-display');
  commentDiv.textContent = `${commentInput.value} by ${nameInput.value}`; // Set the text content of the <div> to the comment
  comments.appendChild(commentDiv); // Append the <div> to the comments container
  nameInput.value = '';
  commentInput.value = '';
};

export default getResFormData;
