const getSemesterSched = async() => {
    const url = "https://victoriacl08.github.io/csce242/json/semester-events.json";

    try{
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log(error);
    }
};

const showSemesterSched = async() =>{
    const section = document.getElementById("semester-schedule");
    const schedule = await getSemesterSched();
    schedule.forEach((event)=>{
        const div = document.createElement("div");
        div.classList.add("event");
        
        const h3 = document.createElement("h3");
        h3.innerHTML = event.event_name;
        div.append(h3);

        const p = document.createElement("p");
        p.innerHTML = event.event_date;
        div.append(p);

        const img = document.createElement("img");
        img.classList.add("img-sched");
        img.src = event.event_img;
        div.append(img);

        section.append(div);
    });
};

showSemesterSched();