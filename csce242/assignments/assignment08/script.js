//Exercise 1 vs exercise 2
document.getElementById("exercise1").onclick = () => {
    document.getElementById("travel-section").classList.remove("hidden");
    document.getElementById("picture-chooser").classList.add("hidden");
}
document.getElementById("exercise2").onclick = () => {
    document.getElementById("travel-section").classList.add("hidden");
    document.getElementById("picture-chooser").classList.remove("hidden");
}


////toggle menu
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
    document.getElementById("triangle-up").classList.toggle("hidden");
    document.getElementById("triangle-down").classList.toggle("hidden");
};

/// Transportation page
document.getElementById("transportation-mode").onkeyup = (event) =>{
    const travelType = event.currentTarget.value.toLowerCase().trim();
    document.getElementById("bike").classList.add("hidden");
    document.getElementById("scooter").classList.add("hidden");
    document.getElementById("car").classList.add("hidden");
    if(travelType == "bike"){
        document.getElementById("bike").classList.remove("hidden");
    }
    else if (travelType == "scooter"){
        document.getElementById("scooter").classList.remove("hidden");   
    }
    else if (travelType == "car"){
        document.getElementById("car").classList.remove("hidden");   
    }
};

///  Color Chooser
document.getElementById("btn-red").onclick = () =>{
    document.getElementById("heart").style.setProperty("--heart-color", "red");
};
document.getElementById("btn-green").onclick = () =>{
    document.getElementById("heart").style.setProperty("--heart-color", "green");
};
document.getElementById("btn-blue").onclick = () =>{
    document.getElementById("heart").style.setProperty("--heart-color", "blue");
};
    