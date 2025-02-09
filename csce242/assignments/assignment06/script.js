
//Say Hello//////////////////////////////////
document.getElementById("btn-hello").onclick = () => {
    const displayP = document.getElementById("display-hello");
    const display = document.createElement("p");
    displayP.append("hello", display);
    
};
//////////////////// Image Change ////////////////////////////
document.getElementById("image-change").onclick = () => {
    const displayI1 = document.getElementById("img1");
    const displayI2 = document.getElementById("img2");
    displayI1.classList.toggle("hidden");
    displayI2.classList.toggle("hidden");
};
////////////////////   Pick a Color   /////////////////////////////
////////////  Pick a Color   ////////////////////
/*addEventListener("input", (event) => {
    const colorPicker = document.querySelector("input");
    const colorOutput = document.querySelector("label");
    colorOutput.innerText = colorPicker.value;
    navigator.clipboard.writeText(colorPicker.value);
    document.getElementById("color-picker").style.background("#000000");

});*/
