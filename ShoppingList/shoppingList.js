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
    newListItem.className = "list-group-item text-start";
    newListItem.textContent = newItemInput;

    //append the new item to the list 
    document.getElementById("itemContainerList").appendChild(newListItem);
}