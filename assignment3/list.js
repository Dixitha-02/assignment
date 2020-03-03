const addButton= document.querySelector(addButton);
var inputValue = document.querySelector(inputValue);
const container = document.querySelector(container);

class item{
    constructor(itemName)
    {
        this.createDiv(itemName);
    }
    createDiv(itemName)
    {
        let input = document.getElementsById("input");
        input.value = itemName;
        input.disable = true;
        input.classList.add('item_input');
        input.type= "text";

        let itemBox = document.createElement('div');
        item.classList.add('item');
        
        let editBox =document.createElement('button');
        editBox.classList.add('editbutton');

        let removeBox =document.createElement('button');
        removeBox.classList.add('removebutton');

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
    }
}