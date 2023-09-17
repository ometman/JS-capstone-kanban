export const comItemImage = document.createElement('img');
comItemImage.className = 'itemimage';
comItemImage.setAttribute('src', '');
comItemImage.alt = 'image of the selected item';

const idNumber = document.createElement('span');
idNumber.className = 'id-number';

const des = document.createElement('div');
des.className = 'title';
const price = document.createElement('div');
price.className = 'prices';
const descriptionLabel = document.createElement('div');
descriptionLabel.className = 'descriptionlabel, label';
descriptionLabel.innerHTML = 'Description :';
const count = document.createElement('span');
count.className = 'count';
count.id = 'comment-count';
count.innerHTML = 0;
const comTitlecontainer = document.createElement('div');
comTitlecontainer.className = 'comTitlecontainer'; // maintain classname
const priceLabel = document.createElement('div');
priceLabel.className = 'pricelabel, label';
priceLabel.innerHTML = 'Price :';
const container = document.createElement('div');
container.className = 'container';
container.append(descriptionLabel, des, priceLabel, price);

export const itemIdContainer = document.createElement('div');
itemIdContainer.className = 'close-btn-container';

export const closeBtn = document.createElement('p');
closeBtn.className = 'close-btn-container';

// create reservation title
export const comTitle = document.createElement('h2');
comTitle.innerHTML = 'Comments';
comTitle.className = 'reserve-data-heading';
// create reservation list container

// create ul to host reversation list
export const comList = document.createElement('ul');
comList.className = 'reservations';
// map reservations here
comList.innerHTML = '';
export const comListContainer = document.createElement('div');
comListContainer.className = 'reserve-list-container';

// create reservation form title
export const comFormInstruction = document.createElement('h3');
comFormInstruction.className = 'reserve-form-title';
comFormInstruction.innerText = 'Add a comment';

// create comment id
const commentId = document.createElement('span');
commentId.className = 'commentNumber';

// create username input
export const userName = document.createElement('input');
userName.className = 'username';
userName.id = 'comment-username';
userName.type = 'text';
userName.value = '';
userName.placeholder = 'Your name';
userName.maxLength = '20';
userName.required = true;

// create text area
export const textarea = document.createElement('TEXTAREA');
textarea.className = 'textarea';
textarea.id = 'textarea';
textarea.placeholder = 'Write Comment';
textarea.value = '';
textarea.maxLength = '150';
textarea.required = true;

// create comment submit btn????????
export const submit = document.createElement('button');
submit.className = 'submit';
submit.id = 'submit';
submit.type = 'submit';
submit.innerText = 'comment';

// create reservation form
export const comForm = document.createElement('form');
comForm.className = 'comment-form';
comForm.appendChild(userName);
comForm.appendChild(textarea);
comForm.appendChild(submit);

// add modal elements

export const comModal = document.querySelector('.comment-modal');
comTitlecontainer.append(comTitle, count);
comTitlecontainer.append(comTitle, commentId);
comListContainer.append(comList);
comModal.appendChild(closeBtn);
comModal.appendChild(comItemImage);
comModal.append(commentId);
comModal.append(container);
comModal.append(comTitlecontainer);
comModal.appendChild(comListContainer);
comModal.appendChild(comFormInstruction);
comModal.appendChild(comForm);
