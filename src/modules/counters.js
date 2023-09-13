import * as infoInterface from './rescomInterface.js';

export const comCounter = (comdata) => {
    const resHeading = infoInterface.resTitle;
    resHeading.innerText = `Comments (${comdata.length})`;
  };