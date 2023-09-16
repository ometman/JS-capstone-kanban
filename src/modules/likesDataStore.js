const likesData = (likesdata) => {
  const theLikesArr = [];
  for (let i = 0; i <= 5; i += 1) {
    theLikesArr.push(likesdata[i]);
  }
  localStorage.setItem('likesData', JSON.stringify(theLikesArr));
  return theLikesArr;
};

export default likesData;