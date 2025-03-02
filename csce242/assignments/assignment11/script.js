class Pizza{
    constructor(type, topping, sauce, cheese, price, picture){
        this.type = type;
        this.topping = topping;
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
        this.picture = picture;
    }
    get item(){
        const pizzaSection = document.createElement("section");
        pizzaSection.classList.add("pizza-menu");

        const header = document.createElement("h3");
        header.innerText = this.type;
        pizzaSection.appendChild(header);

        const img = document.createElement("img");
        img.src = "images/" + this.picture;
        pizzaSection.appendChild(img);

        pizzaSection.onclick = () =>{pizzaDetails(this)}; //////when a pizza is clicked

        return pizzaSection;
    }
}

const pizzaDetails = (pizza) =>{   /// getting the data to put in the pizzaPopup
    const modal = document.getElementById("pizza-modal");
    modal.innerHTML = "";

    const listSection = document.createElement("section");
    listSection.classList.add("list-section");
    modal.append(listSection);

    const imgSection = document.createElement("section");
    imgSection.classList.add("img-section");
    modal.append(imgSection);

    
    const infoList = document.createElement("ul");
    listSection.appendChild(infoList);

    const h3 = document.createElement("h3");
    h3.innerText = pizza.type;
    infoList.appendChild(h3);
  
    infoList.append(liItem(`Topping: ${pizza.topping}`));
    infoList.append(liItem(`Sauce: ${pizza.sauce}`));
    infoList.append(liItem(`Cheese: ${pizza.cheese}`));
    infoList.append(liItem(`Price: $${pizza.price}`));

    const img = document.createElement("img");
    img.src = "images/" + pizza.picture;
    imgSection.append(img);

};
const liItem = (info) =>{
    const li = document.createElement("li");
    li.innerText = info;
    return li;
};



const createPizzaList = () =>{
    let pizzaList = document.getElementById("pizza-list");
    let pizzas = [];

    pizzas.push(new Pizza ("Cheese", "None", "Marinara", "Mozzerella", "8.99", "cheese.png"))
    pizzas.push(new Pizza ("Olive", "Olives", "Marinara", "Mozzerella", "9.99", "olive-pizza.png"))
    pizzas.push(new Pizza ("Margarita", "Tomatoes, Basil", "Marinara", "Mozzerella", "9.99", "margarita.png"))
    pizzas.push(new Pizza ("Tomato", "Tomatoes", "Pesto", "Parmasean", "10.99", "tomato.png"))
    pizzas.push(new Pizza ("Veggie", "Olives, Peppers", "Marinara", "Mozzerella", "12.99", "veggie.png"))

    for(let i in pizzas){
        pizzaList.append(pizzas[i].item);
    }

};

window.onload = () => createPizzaList();




