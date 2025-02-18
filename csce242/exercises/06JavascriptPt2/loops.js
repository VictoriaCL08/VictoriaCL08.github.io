document.getElementById("btn-display").onclick = () => {
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const errorDisplay = document.getElementById("error-num-order");
    const displayArea = document.getElementById("start-end-display");
    errorDisplay.innerHTML= " ";
    displayArea.innerHTML= " ";
    const favMessageP = document.getElementById("fav-message");
    favMessageP.innerHTML = " ";

    if(endNum < startNum) {
        errorDisplay.innerHTML = `Error, ${endNum} is greater than ${startNum}.`
        return;
    }
    
    for(let i=startNum; i<=endNum; i++){
       const li = document.createElement("li");
       li.innerHTML= i;
       console.log(li);
       displayArea.append(li);
       li.onclick = () => {
           favMessageP.innerHTML = `You clicked ${i}.`;
       }
    }
};

document.getElementById("btn-stairs").onclick = () => {
    const drawStair = document.getElementById("stairs");


    for(let i = 0; i< 10; i++){
        const hr = document.createElement("hr");
        drawStair.append(hr);
    }
}