//toggleing the nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

//Classes 
class Dog {
    constructor(title, breed, color, age, size, pic){
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }
    get item() {
        const dogSection = document.createElement("section");
        dogSection.classList.add("dog");

        const heading = document.createElement("h3");
        heading.innerText = this.title;
        dogSection.appendChild(heading);

        const infoList = document.createElement("ul");
        dogSection.appendChild(infoList);

        infoList.append(this.listItem(this.breed));
        infoList.append(this.listItem(this.color));
        infoList.append(this.listItem(`Age: ${this.age}`));
        infoList.append(this.listItem(this.size));

        dogSection.appendChild(this.picture(this.pic));

        return dogSection;
    }

    listItem(info) {
        const liItem = document.createElement("li");
        liItem.innerText = info;
        return liItem;
    }

    picture(pic){
        const picItem = document.createElement("img");
        picItem.src = "images/" + pic;
        return picItem;
    }
}

window.onload = () => {
    let dogs = [];
    let doglist = document.getElementById("dog-list");

    dogs.push(new Dog("Pepper", "chiwinnie", "black", 2, "small", "dog.png"));

    dogs.push(new Dog("Keira", "Chihuahua", "white", 10, "small", "dog.png"));
    dogs.push(new Dog("Diego", "Boxer-Pitt mix", "brown", 8, "Medium", "dog.png"));
    dogs.push(new Dog("Wasabi", "Lab-pit mix", "cream", 1, "medium", "dog.png"));

    for(let i in dogs){
          doglist.append(dogs[i].item);
    }
  
};