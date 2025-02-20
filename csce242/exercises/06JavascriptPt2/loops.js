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
};
//Looping through numbers and display a count
let count = 0;
let updateCount;

document.querySelector("#btn-count").onclick = (event) => {
    if(event.currentTarget.innerHTML.toLowerCase() == "start"){
        event.currentTarget.innerHTML = "Stop";

        updateCount = setInterval(()=>{
            count++;
            document.querySelector("#count-display").innerHTML = count;
        }, 500); //declaring a function as first parameter and timing in second function
    }
    else{
        event.currentTarget.innerHTML = "Start";

        clearInterval(updateCount);
    }
};
document.querySelector("#btn-reset").onclick = () => {
    count = 0;
    clearInterval(updateCount);
    document.querySelector("#btn-count").innerHTML = "Start";
    document.querySelector("#count-display").innerHTML = "";
};


//Arrays
document.querySelector("#btn-show-toys").onclick = (event) =>{
    const toys= ["ball", "car", "doll", "legos"];
    event.currentTarget.disabled = true; //can only click this button once
    //two ways to go through loop
    //first way - not as good
    /*for (let i=0; i<toys.length; i++){
        console.log(toys[i]);
    }*/

    //better way
    const ul = document.createElement("ul");
    document.getElementById("display-toys").append(ul);

    toys.forEach((toy, i)=>{
        console.log(`${i+1}. ${toy}`);
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = `${i+1}. ${toy}`;
    }); //for each accepts a function

};

//associative array
document.getElementById("btn-show-toy-desc").onclick = () => {
    const toys = [];
    toys["ball"] = "$4.99";
    toys["car"] = "$24.00";
    toys["doll"] = "43.43";
    toys["legos"] = "67.43";

    const section = document.getElementById("display-toy-descs");

    for(let toy in toys){
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = `${toy}: ${toys[toy]}`;
        p.onclick = () =>{
            document.getElementById("toy-message").innerHTML = `best ${toy} ever. ${toys[toy]}`;
        }
    }

};