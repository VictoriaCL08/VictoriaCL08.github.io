const getweeklySched = async() => {
    const url = "https://victoriacl08.github.io/csce242/json/weekly-sched.json";

    try{
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log(error);
    }
};

const showWeeklySched = async () =>{
    const schedule = await getweeklySched();
    const table = document.getElementById("table-sched");
    schedule.forEach((sched)=>{
        const tr = document.createElement("tr");
        
        const

        table.append(tr);
    });

};


showWeeklySched();