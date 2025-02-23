
const imageArray =[];

const img1 = document.createElement("img");
img1.src = "images/birthday.jpg";

const img2 = document.createElement("img");
img2.src="images/clown.jpg";

const img3 = document.createElement("img");
img3.src = "images/rain.jpg";

const img4 = document.createElement("img");
img4.src="images/read.jpg";

const img5 = document.createElement("img");
img5.src = "images/shovel.jpg";

const img6 = document.createElement("img");
img6.src="images/work.jpg";

 
imageArray["Happy Birthday"] = img1;
imageArray["Crazy Clown!"] = img2;
imageArray["It's Raining"] = img3;
imageArray["Quiet Time"] = img4;
imageArray["Working Hard"] = img5;
imageArray["Work from Home"] = img6;

const ul = document.createElement("ul");
document.getElementById("image-list").append(ul);

const p1 = document.createElement("p");
document.getElementById("popup").append(p1);

const p2 = document.createElement("p");
document.getElementById("popup").append(p2);

for(let img in imageArray){
    const li = document.createElement("li");
    ul.append(li);
    li.innerHTML = `${img}`;
    li.onclick = () => {
        p1.innerHTML ="";
        p2.innerHTML = "";
        document.getElementById("popup").classList.remove("hidden");
        p1.innerHTML = img;
        p2.append(imageArray[img]);
    };
};

document.getElementById("close").onclick = () =>{
    p1.innerHTML = "";
    p2.innerHTML = "";
    document.getElementById("popup").classList.add("hidden");
};



