// alert("hello"); Alerts aren't really used but are used for testing
// console.log("hello person"); Can see on developer tools console


//functions - version 1 where we learned arrow functions
//do stuff when button clicked
document.getElementById("btn-click-me").onclick= () => {
    console.log("WOW");
    document.getElementById("result").innerHTML="Hi Victoria";
}; //anynomous function for when you are not going to be using it again

document.getElementById("btn-color").onclick = () =>{
    const messageP=document.getElementById("message");
    messageP.innerHTML="Goodbye";
    messageP.classList.toggle("sad");
}

//happy scrip
document.getElementById("btn-happy").onclick = () =>{
    const displayP=document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("happy");
    displayP.innerHTML="Good Times";
};


//sad script
document.getElementById("btn-sad").onclick = () =>{
    const displayP=document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("sad");
    displayP.innerHTML="Bad Times";
};

//clear
document.getElementById("btn-clear").onclick = () =>{
    document.getElementById("display").classList.add("hidden");

};




//key down
document.getElementById("txt-emotion").onkeyup = (event) =>{
    //const emotion = document.getElementById("txt-emotion").value;
    //const emotion = event.currentTarget.value;
    //console.log(emotion);
    document.getElementById("emotion-message").innerHTML = 
    "YOu are feeling " + event.currentTarget.value;

}



