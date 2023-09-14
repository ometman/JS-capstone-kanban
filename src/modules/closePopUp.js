import * as infoInterface from "./rescomInterface.js";
import * as commentDetails from "./commentDetails.js";

const closePopup = async () => {
  const closeModalBtn = infoInterface.closeBtn;
  const closeCommentModalBtn = commentDetails.closeBtn;
  const blurBg = document.querySelectorAll(".blur");

  closeModalBtn.innerHTML = '<a href="#"><p class="close-btn">&times</p></a>';
  closeModalBtn.addEventListener("click", () => {
    infoInterface.itemModal.style.display = "none";
    blurBg.forEach((ele) => {
      ele.classList.remove("blur-bg");
    });
  });
  closeCommentModalBtn.innerHTML =
    '<a href="#"><p class="close-btn">&times</p></a>';
  closeCommentModalBtn.addEventListener("click", () => {
    commentDetails.commentModal.style.display = "none";
    blurBg.forEach((ele) => {
      ele.classList.remove("blur-bg");
    });
  });
};

export default closePopup;
