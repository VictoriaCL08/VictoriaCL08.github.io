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

    officerList.forEach((officer)=>{
        console.log("hi");
    });
};

showAboutUs();
