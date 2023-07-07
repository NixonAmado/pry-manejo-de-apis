let searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click',buscador)



async function apiData(ciudad="madrid"){
    try{
        //269e8281da209a979a17de078716d0e6
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=269e8281da209a979a17de078716d0e6`);
        const data = await response.json();
        return data
    }
    catch(error){
        throw("Ha ocurrido un error " + error);
        
    }
}

apiData();


async function buscador(){
    let iptForm1 = document.getElementById('form1-ipt');
    try{
        mostrarData(await apiData(iptForm1.value));
    }catch(error){
        console.error("ciudad no encontrada")
    }
}


 function mostrarData(objeto){
    card = objeto.map((elemento)=>{
        `
        <div class="row card mb-3 card-bg" style="max-width: 510px; width: 90vw;">
        <div class="card-header border-0">
        <h2 class="card-title m-0">lat: ${elemento.name}</h2>
        <h5>lat: ${elemento.coord.lat} lon: ${elemento.coord.lon}</h5>
        </div>
        <div class="card-body p-0 d-flex">
        <a class="ripple d-flex" href="#!">
        <img
          alt="example"
          class="img-fluid rounded"
          src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
          
          />
        </a>
        
        <div class="card-pills w-100 mx-4 d-flex flex-column">  
            <p class="fw-light d-flex justify-content-between">Maxima<span class="fs-1 ">${elemento.name.temp_min}º</span></p>
            <p class="fw-light d-flex justify-content-between">Minima<span class="fs-2 ">${elemento.name.temp_max}º</span></p>
            <p class="fw-light d-flex justify-content-between">Humedad<span class="fs-3 ">1%</span></p>
            
         </div>
        </div>
        </div>
        `



    })

}

