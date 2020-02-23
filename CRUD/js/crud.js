let id = document.getElementById('id'),
    firstName = document.getElementById('first-name'),
    lastName = document.getElementById('last-name'),
    age = document.getElementById('age'),
    createBtn = document.getElementById('create'),
    readBtn = document.getElementById('read'),
    updateBtn = document.getElementById('update'),
    deleteBtn = document.getElementById('del'),
    people = [];

    createBtn.addEventListener('click', create);
    readBtn.addEventListener('click', read);
    updateBtn.addEventListener('click', update);
    deleteBtn.addEventListener('click', del);


    function create() {
        
       if (id.value === '' ||
          firstName.value === '' ||
          lastName.value === '' ||
          age.value === '') {
            alert('Enter all data!')
       
        } else { 
                    let newTable = document.createElement('div');
                        newTable.className = "newtable";
                        document.body.append(newTable);

                    let newId = document.createElement('div');               // ID
                        newId.className = "row-new-table";
                        newId.innerHTML = document.getElementById('id').value;
                        newTable.append(newId);
                        
                        people.unshift(id.value);
                        console.log(people); 

                    let newFirstName = document.createElement('div');
                        newFirstName.className = "row-new-table";
                        newFirstName.innerHTML = document.getElementById('first-name').value;
                        newTable.append(newFirstName);

                    let newLastName = document.createElement('div');
                        newLastName.className = "row-new-table";
                        newLastName.innerHTML = document.getElementById('last-name').value;
                        newTable.append(newLastName);
                            
                    let newAge = document.createElement('div');
                        newAge.className = "row-new-table";
                        newAge.innerHTML = document.getElementById('age').value;
                        newTable.append(newAge);
                        
                    }
    
       document.getElementById("id").value = "";
       document.getElementById("first-name").value = "";
       document.getElementById("last-name").value = "";
       document.getElementById("age").value = "";
    }   


    function read() {
        console.log('Читать')
    };

    function update() {
        console.log('Обновить')
    };

    function del() {
        if (id.value === '') {
            alert('Not found, enter ID!')
        } else {
            for(let i=0; i<people.length; i++) {
                if(id.value == people[i]) {
                    console.log("Одинаковые")
                    var olddata=document.getElementById("newtable");
                        document.getElementById("newtable").removeChild(olddata);
                } else {
                    alert('Sorry, this ID not found!')
                }
            }
        } 
        
    };

    // function del() {
    //     for(let i=0; i<people.length; ++i) {
    //         if(id.value == people[i]) {
    //         alert("Одинаковые ID")
    //          }
        
    //     }
    
    // }


   