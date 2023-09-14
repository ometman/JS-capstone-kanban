import * as infoInterface from "./rescomInterface.js";
import * as comInterface from "./commentDetails.js";
import { postResData, postCommentData } from "./postResCom.js";
import { getResData } from "./getResCom.js";
import getData, { getCommentData } from "./getData.js";

const itemPopup = (imgId, theimg) => {
  const reserveBtn = document.querySelectorAll(".reserve-btn");
  const blurBg = document.querySelectorAll(".blur");
  const price = document.querySelector(".price");
  const title = document.querySelector(".description");

  reserveBtn.forEach((btn, btnIndex) => {
    btn.addEventListener("click", async () => {
      infoInterface.itemModal.style.display = "flex";
      if (btnIndex + 1 === imgId) {
        blurBg.forEach((ele) => {
          ele.className = "blur-bg";
        });
        infoInterface.resItemImage.src = theimg;
        postResData(imgId);
        getResData(imgId);
      }
      const data = await getData(btnIndex + 1);

      console.log(data);
      price.innerHTML = `Price: ${data.price} $;`;
      title.innerHTML = `${data.title}`;
    });
  });
};

export const commentPopup = (imgId, theimg) => {
  const commentBtn = document.querySelectorAll(".comment-btn");
  const blurBg = document.querySelectorAll(".blur");
  const price = document.getElementById("comment-data-price");
  const title = document.getElementById("comment-data-heading");
  const description = document.getElementById("comment-data-description");
  const comments = document.getElementById("comment-data");

  commentBtn.forEach((btn, btnIndex) => {
    btn.addEventListener("click", async () => {
      comInterface.commentModal.style.display = "flex";
      if (btnIndex + 1 === imgId) {
        blurBg.forEach((ele) => {
          ele.className = "blur-bg";
        });
        comInterface.resItemImage.src = theimg;
        postCommentData(imgId);
        getResData(imgId);
      }
      const data = await getData(btnIndex + 1);
      const commentsResponse = await getCommentData(btnIndex + 1);

      price.innerHTML = `Price: $${data.price};`;
      title.innerHTML = data.title;
      description.innerHTML = data.description;

      commentsResponse.forEach((value, index) => {
        if (typeof value.comment === 'string') {
          const commentWrapper = document.createElement("div");
          commentWrapper.className = "comment-wrapper";
          comments.appendChild(commentWrapper);

          const dateLabel = document.createElement("label");
          dateLabel.className = "comment-date";
          commentWrapper.appendChild(dateLabel);
          dateLabel.innerHTML = value.creation_date;

          const commentLabel = document.createElement("label");
          commentLabel.className = "comment";
          commentWrapper.appendChild(commentLabel);
          commentLabel.innerHTML = value.comment;
        }
      });
    });
  });
};

export default itemPopup;
