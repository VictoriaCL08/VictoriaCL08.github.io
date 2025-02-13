
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
document.getElementById("color-picker").onclick = (event) => {
    const colorPicker = document.querySelector("input");
    document.getElementById("star").setAttribute("fill", colorPicker.value);

};
