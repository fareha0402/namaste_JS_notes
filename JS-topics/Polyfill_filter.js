let arr = [1, 2, 3, 4, 5, 6];
// filter even values
const filterdArr = arr.filter((item) => {
  if (item % 2 === 0) {
    return item;
  }
});
console.log(filterdArr);

// Pollyfil for Filter

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, arr)) {
      temp.push(this[i]);
    }
  }
  return temp
};

const newArr = arr.myFilter((i) => {
  if (i > 4) {
    return i;
  }
});
console.log(newArr)