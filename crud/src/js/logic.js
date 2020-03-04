function create(id, firstName, lastName, age) {
  const person = new Object();
  (id = newId), (firstName = newFirstName), (lastName = newLastName), (age = newAge);

  return person;
}

function del(id) {
  localStorage.removeItem(id);
  return 'delete data line';
}

module.exports.func = {
  create,
  del,
};
