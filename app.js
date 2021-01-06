const addToDoButton = document.querySelector('#addToDoButton');
const deleteToDoList = document.querySelector('#deleteToDoList');
const input = document.querySelector('input');
const toDoContainer = document.querySelector('#toDoContainer');

addToDoButton.addEventListener('click', function() {
    
    const newLi = document.createElement('li');
    newLi.innerText = input.value;
    toDoContainer.append(newLi);

    const deleteItemBtn = document.createElement('button');
    deleteItemBtn.innerText = 'x';
    newLi.append(deleteItemBtn);
    deleteItemBtn.addEventListener('click', function() {
        toDoContainer.removeChild(newLi);
    })

    input.value = ' ';

    deleteToDoList.addEventListener('click', function() {
        toDoContainer.removeChild(newLi);
    })
})