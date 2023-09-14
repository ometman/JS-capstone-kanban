import * as resInterface from './rescomInterface.js';
import * as commentDetails from './commentDetails.js';

const url =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HrIKPRrYjrxS00NlIVCD/reservations/';

  export const postResData = (imgId) => {
    let count = 0;
    const theForm = resInterface.resForm;
    theForm.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      count += 1;
      if (count === imgId + 1) {
        const itemid = String(imgId);
        const username = resInterface.userInput.value;
        const dateStart = resInterface.startDate.value;
        const dateEnd = resInterface.endDate.value;
        const resInput = {
          itemid,
          username,
          dateStart,
          dateEnd,
        };
        await fetch(`${url}`, {
          method: 'POST',
          body: JSON.stringify(resInput),
        });
        theForm.reset();
      }
    });
  };


 const commentPost =  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HrIKPRrYjrxS00NlIVCD/comments/';
  
export const postCommentData = (imgId) => {
  let count = 0;
  const theForm = commentDetails.commentForm
  theForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    count += 1;
    if (count === imgId + 1) {
      const itemid = String(imgId);
      
  const nameInput = document.getElementById("comment-username");
  const commentInput = document.getElementById("comment-input");
      const commentPayload = {
        item_id: itemid,
          username: nameInput.value,
          comment: commentInput.value
      };
      await fetch(`${commentPost}`, {
        method: 'POST',
        body: JSON.stringify(commentPayload),
      });
      theForm.reset();
    }
  });
};
