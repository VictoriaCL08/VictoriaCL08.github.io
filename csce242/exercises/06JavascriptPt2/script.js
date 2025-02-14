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
        `You chose ${color}, you are feeling ${mood},`; //use backtick (button above tab) to be able to add var in text instead of concatanatin
     
};
////////////// ball
let pos = 0;
const changeCirclePos = (increment) => {
    pos+= increment;
    document.getElementById("circle").style.setProperty("top", pos + "px");
};

document.getElementById("btn-down").onclick = () =>{
    
    changeCirclePos(10);

};

document.getElementById("btn-up").onclick = () =>{
    changeCirclePos(-10);
};

document.getElementById("btn-pick-color").onchange = (event) =>{  //two different ways to do color picker
 
    const color = event.currentTarget.value;
    //document.getElementById("circle").style.setProperty("background", color);   //way number 1
    document.getElementById("circle").style.setProperty("--circle-color", color);

};


//////// Donation part and thermometer
const goal = 1000;
let donations=0;
document.getElementById("goal-display").innerHTML =  `Goal: $${goal}`;

document.getElementById("btn-add-donation").onclick = () =>{
    const donationAmt = document.getElementById("txt-donation").value;
    if (isNaN(donationAmt) || donationAmt<= 0 ){
        document.getElementById("donation-error").classList.remove("hidden");
        return;
    }
    document.getElementById("donation-error").classList.add("hidden");
    donations += donationAmt;
    donationPercent = donations / goal *100;
    document.getElementById("donation-message").innerHTML = `$${goal - donations} to go!`;
    document.getElementById("thermometer").style.setProperty("--donation-percent", donationPercent+ "%");

} ;
