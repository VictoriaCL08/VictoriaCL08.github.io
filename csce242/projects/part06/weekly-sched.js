const getweeklySched = async() => {
    const url = "https://api.openbrewerydb.org/breweries";

    try{
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log(error);
    }
};