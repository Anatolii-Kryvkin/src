

function create(id, firstName, lastName, age)  {
    let person = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    return person
}

function del(id) {
    localStorage.removeItem(id)
    return "delete data line"
}

module.exports.func = {
    create: create,
    del: del
}