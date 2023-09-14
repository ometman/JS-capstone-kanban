export const resItemImage = document.createElement("img");
resItemImage.className = "item-image";
resItemImage.alt = "image of the selected item";

const des = document.createElement("div");
des.className = "description";
des.innerHTML = ``;
const price = document.createElement("div");
price.className = "price";
price.innerHTML = ``;
const container = document.createElement("div");
container.className = "container";
container.append(des, price);
//container.appendChild(price);

export const itemIdContainer = document.createElement("div");
itemIdContainer.className = "close-btn-container";

export const closeBtn = document.createElement("p");
closeBtn.className = "close-btn-container";
closeBtn.style.width = "50px";
closeBtn.style.height = "50px";

// create comment title
export const commentTitle = document.createElement("h2");
commentTitle.id = "comment-data-heading";


// create comment price
export const commentPrice = document.createElement("h6");
commentPrice.id = "comment-data-price";

// create comment description
export const commentDescription = document.createElement("p");
commentDescription.id = "comment-data-description";



// create comments
export const comments = document.createElement("p");
comments.id = "comment-data";

// create username input
export const userInput = document.createElement("input");
userInput.className = "username";
userInput.id = "comment-username";
userInput.type = "text";
userInput.value = "";
userInput.placeholder = "Your name";
userInput.maxLength = "20";
userInput.required = true;

// comment input
export const commentInput = document.createElement("input");
commentInput.className = "comment-input";
commentInput.id = "comment-input";
commentInput.type = "text";
commentInput.value = "";
commentInput.required = true;


// create submit btn
export const submitBtn = document.createElement("button");
submitBtn.className = "submit";
submitBtn.id = "submit-comment";
submitBtn.type = "submit";
submitBtn.innerText = "Add Comment";

// create comment form
export const commentForm = document.createElement("form");
commentForm.className = "comment-form";
commentForm.appendChild(userInput);
commentForm.appendChild(commentInput);
commentForm.appendChild(submitBtn);

// add modal elements
export const commentModal = document.querySelector(".comment-modal");

commentModal.appendChild(closeBtn);
commentModal.appendChild(resItemImage);
commentModal.append(container);
commentModal.appendChild(commentTitle);
commentModal.appendChild(commentPrice);
commentModal.appendChild(commentDescription);
commentModal.appendChild(commentForm);
commentModal.appendChild(comments);
