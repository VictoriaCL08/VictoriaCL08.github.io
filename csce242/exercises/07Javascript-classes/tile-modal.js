document.querySelectorAll(".gallery section").forEach((tile)=>{
    tile.onclick = () =>{
        const label = tile.querySelector("h4").innerHTML;
        const imgsrc = tile.querySelector("img").src;
        console.log(label);    
    }


});