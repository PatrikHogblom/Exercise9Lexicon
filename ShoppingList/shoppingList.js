document.getElementById("inputWare-btn").addEventListener('click', addItem);

function addItem()
{
    //get value from input
    let newItemInput = document.getElementById("inputWare").value.trim();

    //if imput is empty, dont add anything
    if (newItemInput ==="") 
    {
        alert("Please enter a value before adding");
        return;
    }

    //create a new list item
    let newListItem = document.createElement("li");
    newListItem.className = "list-group-item";

    //create a span for the text 
    let textspan = document.createElement("span");
    textspan.className = "float-start";
    textspan.textContent = newItemInput;

    //add bought button to the list
    let boughtButton = document.createElement("button");
    boughtButton.className = "btn btn-success btn-sm float-end";
    boughtButton.textContent = "Bought";

    boughtButton.onclick = function(){
        newListItem.classList.add("list-group-item-success");
        textspan.classList.add("text-decoration-line-through");
        boughtButton.remove();

        //add undo button
        //add the undo button
        let undoButton = document.createElement("button");
        undoButton.className = "btn btn-warning btn-sm float-end";
        undoButton.textContent = "Undo";

        undoButton.onclick = function(){
            newListItem.classList.remove("list-group-item-success");
            textspan.classList.remove("text-decoration-line-through");
            undoButton.remove();
            newListItem.appendChild(boughtButton);
        }
        newListItem.appendChild(undoButton);
    }
    
    //add delete button to the list
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm float-end";
    deleteButton.textContent = "X";

    deleteButton.onclick = function(){
        this.parentNode.remove();
    }
    
    newListItem.appendChild(textspan);
    newListItem.appendChild(deleteButton);
    newListItem.appendChild(boughtButton);


    //append the new item to the list 
    document.getElementById("itemContainerList").appendChild(newListItem);
}