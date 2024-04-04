/*En första implementation*/
BisBoshFunc(100);

function BisBoshFunc(number)
{
    for (let i = 1; i < number; i++) 
    {
        if(i % 3 === 0 && i % 4 === 0)
        {
            console.log( i + ": Bish-Bosh" );
            continue;
        }
        if (i % 3 === 0) //check if divisble by 3
        {
            console.log( i + ": Bish" );
            continue;
        }
        if (i % 4 === 0) //check if divisble by 4
        {
            console.log( i + ": Bosh" );
            continue;
        }
        console.log(i);
    }
}

/*En andra implementation*/
document.getElementById("printBishBoshBtn").addEventListener('click', BishBosh2);

function BishBosh2(){
    //console.log("btn clicked");
    let bishInt = parseInt(document.getElementById("InputBishDiv").value);
    let boshInt = parseInt(document.getElementById("inputBoshDiv").value);
    let totNumbers = parseInt(document.getElementById("inputTotNumbers").value);

    let warningMessage = "";
    let isValidToRun = true;

    //check so we have numeric inputs
    if(!(isNumber(bishInt) && isNumber(boshInt) && isNumber(totNumbers)))
    {
        warningMessage = "Make sure that your inputs are filled and numeric beefore you click the button\n";
        isValidToRun = false;
        alert(warningMessage);
    }
    else
    {
        if(bishInt < 0 || boshInt < 0 || totNumbers < 0)
        {
            warningMessage += "Please don't have negative numbers in the input!";
            isValidToRun = false;
            alert(warningMessage);
        }
    }

    if(isValidToRun === true)
    {
        const printBishBoshText = document.querySelector("#printBishBoshText");
        printBishBoshText.innerHTML = ""; 

        for (let i = 1; i < totNumbers; i++) 
        {
            if(i % bishInt === 0 && i % boshInt === 0)
            {
                console.log( i + ": Bish-Bosh" );
                printBishBoshText.innerHTML += i + ": Bish-Bosh</br>"; 
                continue;
            }
            if (i % bishInt === 0) //check if divisble by 3
            {
                console.log( i + ": Bish" );
                printBishBoshText.innerHTML += i + ": Bish</br>"; 
                continue;
            }
            if (i % boshInt === 0) //check if divisble by 4
            {
                console.log( i + ": Bosh" );
                printBishBoshText.innerHTML += i + ": Bosh</br>"; 
                continue;
            }
            printBishBoshText.innerHTML += i +":</br>";
            console.log(i);
        }
    }
}

function isNumber(input) 
{
    if(!isNaN(input)){
        //console.log('It is a number')
        return true;
    }
    else 
    {
        //console.log('It is not a number')
        return false;
    }
}



