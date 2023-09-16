// import * as resInterface from './rescomInterface.js';

// // const url =
// ('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/votSVyM8b966LHhFVfLV/reservations/');

// export const postResData = (imgId) => {
//   let count = 0;
//   const theForm = resInterface.resForm;
//   theForm.addEventListener('submit', async (ev) => {
//     ev.preventDefault();
//     count += 1;
//     if (count === imgId + 1) {
//       const itemid = String(imgId);
//       const username = resInterface.userInput.value;
//       const dateStart = resInterface.startDate.value;
//       const dateEnd = resInterface.endDate.value;
//       const resInput = {
//         itemid,
//         username,
//         dateStart,
//         dateEnd,
//       };
//       await fetch(`${url}`, {
//         method: 'POST',
//         body: JSON.stringify(resInput),
//       });
//       theForm.reset();
//     }
//   });
// };

const commentPost = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HrIKPRrYjrxS00NlIVCD/comments/';

export const postCommentData = (imgId) => {
  let count = 0;
  const theForm = commentDetails.commentForm;
  theForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    console.log(ev);
    count += 1;
    if (count === imgId + 1) {
      const itemid = String(imgId);

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
