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
        divImg.append(img)
    
        const div = document.createElement("div");
        div.classList.add("about-us-p");
        div.classList.add("three");

        const h3 = document.createElement("h3");
        h3.innerText = officer.position;
        div.append(h3);

        const h4 = document.createElement("h4");
        h4.innerText = officer.name;
        div.append(h4);

        const ul = document.createElement("ul");
        div.append(ul);
        ul.append(liList("Major", officer.major));
        ul.append(liList("Year", officer.year));
        ul.append(liList("Home town", officer.home-town));
       // ul.append(liList("Favorite Event", officer.favorite-event));




        if(officer._id%2 == 0){
            section.append(div);
            section.append(divImg);
        }
        else{
            section.append(divImg);
            section.append(div); 
        }

    });
};

const liList = (description, item) =>{
   const li = document.createElement("li");
   li.innerHTML = `${description}: ${item}`;

   return li;
}

showAboutUs();
