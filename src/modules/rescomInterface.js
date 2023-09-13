// popup interface
// create item image container
export const resItemImage = document.createElement('img');
resItemImage.className = 'item-image';
resItemImage.alt = 'image of the selected item';

const des = document.createElement('div');
des.className = 'description';
const price = document.createElement('div');
price.className = 'price';
const descriptionLabel = document.createElement('div');
descriptionLabel.className = 'descriptionlabel, label';
descriptionLabel.innerHTML = `Description :`;
const count = document.createElement('span');
count.innerHTML = 0;
const priceLabel = document.createElement('div');
priceLabel.className = 'pricelabel, label';
priceLabel.innerHTML = `Price :`;
const container = document.createElement('div');
container.className = 'container';
container.append(descriptionLabel, des, priceLabel, price);

export const itemIdContainer = document.createElement('div');
itemIdContainer.className = 'close-btn-container';

export const closeBtn = document.createElement('p');
closeBtn.className = 'close-btn-container';

// create reservation title
export const resTitle = document.createElement('h2');
resTitle.innerHTML = `Reservations`;
resTitle.className = 'reserve-data-heading';
// create reservation list container
export const resListContainer = document.createElement('ul');
resListContainer.className = 'reserve-list-container';

// create reservation form title
export const resFormInstruction = document.createElement('h3');
resFormInstruction.className = 'reserve-form-title';
resFormInstruction.innerText = 'Add a reservation';

// create username input
export const userInput = document.createElement('input');
userInput.className = 'username';
userInput.id = 'username';
userInput.type = 'text';
userInput.value = '';
userInput.placeholder = 'Your name';
userInput.maxLength = '20';
userInput.required = true;

// create start date input
export const startDate = document.createElement('input');
startDate.className = 'startdate';
startDate.id = 'startdate';
startDate.type = 'date';
startDate.value = '';
startDate.required = true;

// create end date input
export const endDate = document.createElement('input');
endDate.className = 'enddate';
endDate.id = 'enddate';
endDate.type = 'date';
endDate.value = '';
endDate.required = true;

// create submit btn
export const submitBtn = document.createElement('button');
submitBtn.className = 'submit';
submitBtn.id = 'submit';
submitBtn.type = 'submit';
submitBtn.innerText = 'Reserve';

// create reservation form
export const resForm = document.createElement('form');
resForm.className = 'reserve-form';
resForm.appendChild(userInput);
resForm.appendChild(startDate);
resForm.appendChild(endDate);
resForm.appendChild(submitBtn);

// add modal elements

export const itemModal = document.querySelector('.reserve-modal');
itemModal.appendChild(closeBtn);
itemModal.appendChild(resItemImage);
itemModal.append(container);
itemModal.append(count);
itemModal.appendChild(resTitle);
itemModal.appendChild(resListContainer);
itemModal.appendChild(resFormInstruction);
itemModal.appendChild(resForm);
