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
        
        tr.append(addCol(sched.date_id));
        tr.append(addCol(sched.route));
        tr.append(addCol(sched.mileage));
        tr.append(addCol(sched.track));
        tr.append(addCol(sched.effort));

        table.append(tr);
       
    });

};

const addCol = (col) =>{
    const td = document.createElement("td");
    td.innerText = col;
    return td;
}

showWeeklySched();