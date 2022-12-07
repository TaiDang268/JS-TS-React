const validateArr = (arr) => {
  if (Array.isArray(arr)) return true;

  throw new Error("Invalid array");
};

const swapRandomPlaceElement = (arr) => {
  validateArr(arr);

  const randomIndex1 = getRandomNumber(0, arr.length - 1);
  let randomIndex2 = getRandomNumber(0, arr.length - 1);

  do {
    randomIndex2 = getRandomNumber(0, arr.length - 1);
  } while (randomIndex1 === randomIndex2);

  [arr[randomIndex1], arr[randomIndex2]] = [
    arr[randomIndex2],
    arr[randomIndex1],
  ];

  return arr;
};
