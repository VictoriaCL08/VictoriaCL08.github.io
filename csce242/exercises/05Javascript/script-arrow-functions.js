// alert("hello"); Alerts aren't really used but are used for testing
// console.log("hello person"); Can see on developer tools


//functions - version 1 where we learned arrow functions
const doStuff = () => {   //LHS of equals is variable declarations, parameters would go in parenthesis, RHs of arrow shows body of function
    console.log("doing stuff");
}

//do stuff when button clicked
document.getElementById("btn-click-me").onclick=doStuff; //parenthesis mean now