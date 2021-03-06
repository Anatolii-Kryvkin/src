const { List } = require('../../../List/List');

function AList(array) {
  this.defaultArray = array;
  this.arr = [];
  this.init();
}

AList.prototype = Object.create(List.prototype);
AList.prototype.constructor = AList;

AList.prototype.init = function() {
  let index = 0;

  while (this.defaultArray[index]) {
    this.arr[index] = this.defaultArray[index];
    index++;
  }
};

AList.prototype.size = function() {
  let index = 0;

  while (this.arr[index]) {
    index++;
  }

  return index;
};

AList.prototype.addStart = function(elem) {
  const newArr = [];
  for (let i = 0; i < this.size(); i++) {
    newArr[i + 1] = this.arr[i];
  }
  newArr[0] = elem;
  return (this.arr = newArr);
};

AList.prototype.addEnd = function(elem) {
  const newArr = [];
  for (let i = 0; i < this.size(); i++) {
    newArr[i] = this.arr[i];
    newArr[i + 1] = elem;
  }
  return (this.arr = newArr);
};

AList.prototype.delStart = function() {
  const newArr = [];
  const delArr = this.arr[0];
  for (let i = 0; i < this.size() - 1; i++) {
    newArr[i] = this.arr[i + 1];
  }
  this.arr = newArr;
  return delArr;
};

AList.prototype.delEnd = function() {
  const newArr = [];
  const delArr = this.arr[this.size() - 1];
  for (let i = 0; i < this.size() - 1; i++) {
    newArr[i] = this.arr[i];
  }
  this.arr = newArr;
  return delArr;
};

AList.prototype.delPos = function(position) {
  const newArr = [];
  const delArr = this.arr[position];
  for (let i = 0; i < this.size(); i++) {
    newArr[i] = this.arr[i];

    this.arr = newArr;
  }
  return delArr;
};

AList.prototype.get = function(position) {
  if (position >= 0 && position <= this.size() - 1) {
    return this.arr[position];
  }
};

AList.prototype.set = function(elem, position) {
  const newArr = [];
  for (let i = 0; i < this.size(); i++) {
    newArr[i] = this.arr[i];
    newArr[position] = elem;
  }
  return (this.arr = newArr);
};

AList.prototype.toString = function() {
  const newArr = [];
  let str = '';
  for (let i = 0; i < this.size(); i++) {
    str += this.arr[i];
    newArr[i] = this.arr[i];
  }
  return str;
};

AList.prototype.clear = function() {
  this.init();
  return this.defaultArray;
};

AList.prototype.min = function() {
  let min = this.arr[0];
  for (let i = 0; i < this.size(); i++) {
    if (this.arr[i] < min) {
      min = this.arr[i];
    }
  }
  return min;
};

AList.prototype.max = function() {
  let max = this.arr[0];
  for (let i = 0; i < this.size(); i++) {
    if (this.arr[i] > max) {
      max = this.arr[i];
    }
  }
  return max;
};

AList.prototype.sort = function() {
  for (let j = 0; j < this.size(); j++) {
    for (let i = 0; i < this.size(); i++) {
      if (this.arr[i] > this.arr[i + 1]) {
        const newArr = this.arr[i];
        this.arr[i] = this.arr[i + 1];
        this.arr[i + 1] = newArr;
      }
    }
  }
  return this.arr;
};

AList.prototype.maxIndex = function() {
  let max = 0;
  for (let i = 1; i < this.size(); i++) {
    if (this.arr[i] > this.arr[max]) {
      max = i;
    }
  }
  return max;
};

AList.prototype.minIndex = function() {
  let min = 0;
  for (let i = 1; i < this.size(); i++) {
    if (this.arr[i] < this.arr[min]) {
      min = i;
    }
  }
  return min;
};

AList.prototype.reverse = function() {
  const newArr = [];
  for (let i = 0; i < this.size(); i++) {
    newArr[i] = this.arr[i];
  }

  for (let i = 0, j = this.size() - 1; i < this.size(); j--, i++) {
    this.arr[i] = newArr[j];
  }

  return this.arr;
};

AList.prototype.halfReverse = function() {
  const half = this.size() / 2;
  const newArr = [];
  for (let i = 0; i < this.size(); i++) {
    newArr[i] = this.arr[i];
  }

  for (let i = 0, j = half - 1; i < half; j--, i++) {
    this.arr[i] = newArr[j];
  }

  for (let i = half, j = this.size() - 1; i < this.size(); j--, i++) {
    this.arr[i] = newArr[j];
  }

  return this.arr;
};

AList.prototype.addPos = function(position, elem) {
  const newArr = [];
  for (let i = this.size() - 1; i > position; i--) {
    this.arr[i + 1] = this.arr[i];
  }
  this.arr[position] = elem;
  return this.arr;
};

module.exports.AList = AList;
