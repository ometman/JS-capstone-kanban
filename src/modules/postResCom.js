import * as commentDetails from './commentInterface.js';

const commentPost = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HrIKPRrYjrxS00NlIVCD/comments/';

const postCommentData = (imgId) => {
  let count = 0;
  const theForm = commentDetails.commentForm;
  theForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    count += 1;
    if (count === imgId + 1) {
      //    const itemid = String(imgId);

      const nameInput = document.getElementById('username');
      const commentInput = document.getElementById('text-area');
      const { id } = ev.target;
      const commentPayload = {
        item_id: id,
        username: nameInput.value,
        comment: commentInput.value,
      };
      await fetch(`${commentPost}`, {
        method: 'POST',
        body: JSON.stringify(commentPayload),
      });
      theForm.reset();
    }
  });
};

export default postCommentData;