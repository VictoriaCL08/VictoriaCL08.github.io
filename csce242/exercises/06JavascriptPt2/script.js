//do stuff when button clicked
document.getElementById("btn-click-me").onclick = () => {
    console.log("WOW!");
    document.getElementById("result").innerHTML="Hi Portia";
};

//change color
document.getElementById("btn-color").onclick = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Good bye";
    messageP.classList.toggle("sad");

}

//happy script
document.getElementById("btn-happy").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("happy");
    displayP.innerHTML = "Good Times";
};

//sad script
document.getElementById("btn-sad").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("sad");
    displayP.innerHTML = "Sad TImes";
};

document.getElementById("btn-clear").onclick = () => {
    document.getElementById("display").classList.add("hidden");
};

//key down
document.getElementById("txt-emotion").onkeyup = (event) => {
    //const emotion = document.getElementById("txt-emotion").value;
    document.getElementById("emotional-message").innerHTML = 
    "You are feeling " + event.currentTarget.value;
}

//toggleing the nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

//color message
document.getElementById("btn-choose-color").onclick = () => {
    //document.getElementById("color-message").classList.add("You chose " + event.currentTarget.value); this is not ight
    const color = document.getElementById("txt-color").value.toLowerCase().trim();
    let mood = "";

    if(color == "blue"){
        mood ="sad";
    }
    else if(color == "yellow"){
        mood="happy";
    }
    else {
        mood="annoyed";
    }
    document.getElementById("color-message").innerHTML = 
        `You chose ${color}, you are feeling ${mood},`; //use backtick (button above tab) to be able to add var in text instead of concatanating

     
}