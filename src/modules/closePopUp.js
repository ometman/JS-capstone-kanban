const closePopup = () => {
  const reservationContainer = document.querySelector('.reservation-container');
  const closeButton = document.querySelector('.fa-x');
  closeButton.addEventListener('click', () => {
    console.log(reservationContainer);
    reservationContainer.classList.remove('show');
  });
};

export default closePopup;
