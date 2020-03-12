// const { func } = require('./data.js');

const id = document.getElementById('id');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const age = document.getElementById('age');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const createBtn = document.getElementById('create');
const localStorageRadio = document.getElementById('local-storage');
const indexedDbRadio = document.getElementById('indexdb');
const updateBtn = document.getElementById('update');
const deleteBtn = document.getElementById('del');
const dell = document.querySelector('.del');
const people = [];




function createNewUser(){
  const person = {
      source: document.querySelector('.del').firstElementChild,
      id : document.getElementById('id').value,
      firstName: document.getElementById('first-name').value,
      lastName: document.getElementById('last-name').value,
      age: document.getElementById('age').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value 
  }
  console.log(person)
  people.push(person);
  console.log(people);
  const key = id.value; 
  localStorage.setItem(key, person.source.innerHTML);
  return person;
}

function create() {
  if (id.value === '' || firstName.value === '' || lastName.value === '' || age.value === '' || email.value === '' || phone.value === '') {
    alert('Enter all data!');
  } else {
    let comparison = true;
    for (let j = 0; j < people.length; j++) {
      if (id.value === people[j].id) {
        comparison = false;
      }
    }

    if (comparison) {
      const newTable = document.createElement('div');
      newTable.className = 'newtable';
      dell.appendChild(newTable);

      const newId = document.createElement('div');
      newId.className = 'row-new-table';
      newId.innerHTML = document.getElementById('id').value;
      newTable.appendChild(newId);

      const newFirstName = document.createElement('div');
      newFirstName.className = 'row-new-table';
      newFirstName.innerHTML = document.getElementById('first-name').value;
      newTable.appendChild(newFirstName);

      const newLastName = document.createElement('div');
      newLastName.className = 'row-new-table';
      newLastName.innerHTML = document.getElementById('last-name').value;
      newTable.appendChild(newLastName);

      const newAge = document.createElement('div');
      newAge.className = 'row-new-table';
      newAge.innerHTML = document.getElementById('age').value;
      newTable.appendChild(newAge);

      const newEmail = document.createElement('div');
      newEmail.className = 'row-new-table';
      newEmail.innerHTML = document.getElementById('email').value;
      newTable.appendChild(newEmail);

      const newPhone = document.createElement('div');
      newPhone.className = 'row-new-table';
      newPhone.innerHTML = document.getElementById('phone').value;
      newTable.appendChild(newPhone);
      createNewUser()
    } else {
      alert('ID busy! Enter a new ID');
    }
  }
  clear();
}

function update() {
  const key = id.value;
  if (id.value === '') {
    alert('Not found, enter ID!');
  } else {
    let equal = false;
    for (let i = 0;  i < people.length; i++ ) {
      if (id.value === people[i].id) {
        people[i].source.children[1].innerText = firstName.value;
        people[i].source.children[2].innerText = lastName.value;
        people[i].source.children[3].innerText = age.value;
        people[i].source.children[4].innerText = email.value;
        people[i].source.children[5].innerText = phone.value;
        localStorage.setItem(key, JSON.stringify(people[i].source.innerHTML));
        equal = true;
      }
    }
    if (!equal) {
      alert('Sorry, this ID not found!');
    }
  }
  clear();
}

function del() {
  const key = id.value;
  if (id.value === '') {
    alert('Not found, enter ID!');
  } else {
    let equal = false;
    for (let i = 0; i < people.length; i++) {
      if (id.value === people[i].id) {
        dell.removeChild(people[i].source);
        people.splice(i, 1);
        localStorage.removeItem(key);
        equal = true;
      }
    }
    if (!equal) {
      alert('Sorry, this ID not found!');
    }
  }
  clear();
}

function local() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const newTable = document.createElement('div');
      newTable.className = 'newtable';
      newTable.innerHTML = localStorage.getItem(key);
      dell.appendChild(newTable);

      const person = new Object();
      person.source = newTable;
      person.id = key;
      person.firstName = key;
      person.lastName = key;
      person.age = key;
      person.email = key;
      person.phone = key;
      people.push(person);
      console.log(people)
  }
}

// func();

// const addStickyNote = (db, message) => {
//   // Запустим транзакцию базы данных и получите хранилище объектов Notes
//   let tx = db.transaction(['notes'], 'readwrite');
//   let store = tx.objectStore('notes');
//   // Добаляем заметку в хранилище объектов
//   let note = {text: message, };
//   store.add(note);
//   // Ожидаем завершения транзакции базы данных
//   tx.oncomplete = () => {
//     console.log('stored note!')
//   }
//   tx.onerror = (event) => {
//     alert('error storing note ' + event.target.errorCode);
//   }
// }

function indexDb() {
//   let db;
//   let dbReq = indexedDB.open('myDB', 1);
//   dbReq.onupgradeneeded = (event) => {
//     // Зададим переменной db ссылку на базу данных
//     db = event.target.result;
//     // Создадим хранилище объектов с именем notes.
//     let notes = db.createObjectStore('notes', {autoIncrement: true});
//   }
//   dbReq.onsuccess = (event) => {
//     db = event.target.result;

//     addStickyNote(db, people[0].source.innerHTML);
//   }
//   dbReq.onerror = (event) => {
//     alert('error opening database ' + event.target.errorCode);
//   }


  //   var request = indexedDB.open("People");
  // var db; 
  // var dani = [ { id : '1', firstName='Anatolii', lastName="Kryvkin", age='23' }, 
  // { id : '2', firstName='Astolii', lastName="Krdsvkin", age='2d3' } ]   
  // request.onupgradeneeded = function() {
  // // The database did not previously exist, so create object stores and indexes.
  // db = request.result;
  // var store = db.createObjectStore("persons", {keyPath: "isbn"});
  // var titleIndex = store.createIndex("firstName", "firstName");
  // var authorIndex = store.createIndex("lastNmae", "lastName");
 
  // // Populate with initial data.
  // // var PLtak = transaction.objectStore('Tak');
  // // for (let i in dani ) {
  // //   PLtak.put([i])
//   // // }
};
 
// request.onsuccess = function() {
//   db = request.result;
// };


function clear() {
  (document.getElementById('id').value = ''), (document.getElementById('first-name').value = '');
  (document.getElementById('last-name').value = ''), (document.getElementById('age').value = '');
  (document.getElementById('email').value = ''), (document.getElementById('phone').value = '');
}

createBtn.addEventListener('click', create);
updateBtn.addEventListener('click', update);
deleteBtn.addEventListener('click', del);
localStorageRadio.addEventListener('click', local);
indexedDbRadio.addEventListener('click', indexDb);