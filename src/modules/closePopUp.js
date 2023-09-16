const closePopup = () => {
  const reservationContainer = document.querySelector('.reservation-container');
  const commentContainer = document.querySelector('.comment-container');
  const closeButton = document.querySelector('.fa-x');
  const closeComment = document.querySelector('.closecomment');
  closeButton.addEventListener('click', () => {
    reservationContainer.classList.remove('show');
  });

  closeComment.addEventListener('click', () => {
    commentContainer.classList.remove('showcomment');
  });
};

export default closePopup;
