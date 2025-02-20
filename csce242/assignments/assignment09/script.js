document.getElementById("btn-stairs").onclick = () => {
    const drawStair = document.getElementById("stairs");
    drawStair.classList.remove("hidden");
    drawStair.replaceChildren();

    for(let i = 0; i< 10; i++){
        const hr = document.createElement("hr");
        drawStair.append(hr);
    }
    document.getElementById("btn-climb").classList.remove("hidden");
    document.getElementById("left").classList.remove("hidden");
    document.getElementById("right").classList.add("hidden");
}; 
document.getElementById("btn-climb").onclick = () => {
    document.getElementById("right").classList.toggle("hidden");
    document.getElementById("left").classList.toggle("hidden");
};