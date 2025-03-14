const getAboutUs = async() => {
    const url = "https://victoriacl08.github.io/csce242/json/about-us.json";

    try{
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log(error);
    }
};

const showAboutUs = async() => {
    const officerList = await getAboutUs();
    const mainSection = document.getElementById("main-section");

    officerList.forEach((officer)=>{
        const section = document.createElement("section");
        section.classList.add("about-us");
        section.classList.add("columns");
        mainSection.append(section);        

        const divImg = document.createElement("div");
        divImg.classList.add("index-main-img");
        divImg.classList.add("two");
        const img = document.createElement("img");
        img.src = officer.img;
        section.append(divImg);
        divImg.append(img)
    
        const div = document.createElement("div");
        div.classList.add("about-us-p");
        div.classList.add("three");
        div.innerText = "hello";
        section.append(div);


    });
};

showAboutUs();
