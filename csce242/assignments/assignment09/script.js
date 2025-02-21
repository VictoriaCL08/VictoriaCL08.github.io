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

let pos = 70;
let updateCount;
document.getElementById("btn-climb").onclick = (event) => {
    
    clearInterval(updateCount);

    
    updateCount = setInterval(()=>{
        if(pos<=400){
            pos+=30;
        }
        else{
            pos = 70;
            clearInterval(updateCount);
        }
        document.getElementById("left").style.setProperty("--pos", pos+"px");
        document.getElementById("right").style.setProperty("--pos", pos+"px");
        document.getElementById("right").classList.toggle("hidden");
        document.getElementById("left").classList.toggle("hidden");
    }, 750);
    


};