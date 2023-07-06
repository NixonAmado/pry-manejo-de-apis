let searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click',buscador)



async function apiData(ciudad){
    try{
        //269e8281da209a979a17de078716d0e6
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=269e8281da209a979a17de078716d0e6`);
        const data = await response.json();
        console.log(data);
        return data
    }
    catch(error){
        throw("Ha ocurrido un error " + error);
        
    }
}

apiData();


function buscador(){
    let iptForm1 = document.getElementById('form1-ipt');
    apiData(iptForm1.value);
}


async function mostrarData(){
    data = await apiData();
}