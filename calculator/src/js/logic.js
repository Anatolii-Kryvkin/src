function add(element1, element2) {
  return element1 + element2;
}

function sub(element1, element2) {
  return element1 - element2;
}

function mult(element1, element2) {
  return element1 * element2;
}

function div(element1, element2) {
  if (element2 === 0) {
    const error = 'Error';
    return error;
  }
  return element1 / element2;
}

module.exports.add = add;
module.exports.mult = mult;
module.exports.sub = sub;
module.exports.div = div;
