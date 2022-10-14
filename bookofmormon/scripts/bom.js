const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
//button.addEventListener('click', () => {
button.addEventListener('click', function() {
    const value = input.value;
    input.value = '';
        
    const liElement = document.createElement('li');
    //const newSpan = document.createElement('span');
    const deleteButton = document.createElement('button');
        
    //newLi.appendChild(newSpan);
    liElement.textContent = value;
    //newLi.appendChild(newButton);
    deleteButton.textContent = '\u2715';
    liElement.appendChild(deleteButton);
    list.appendChild(liElement);
        
    deleteButton.addEventListener('click', () => {
        list.removeChild(liElement);
    })
        
    input.focus();
        
});