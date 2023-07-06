let personajesAleatorios = [];
for (let index = 0; index < 8; index++) {
  personajesAleatorios.push( Math.floor(Math.random() * 826));
}

async function fetchData() {
    try {
    //   const response = await fetch('https://api.example.com/data');
    //ejemplo= 1,344,434,2,3,55,66,12
    const response = await fetch( `https://rickandmortyapi.com/api/character/${personajesAleatorios.join(",")}`);
    //const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=4&lon=72&appid='atmos'");
    
      const data = await response.json();
      return data;
    } catch (error) {
      throw 'Error al obtener los datos';
    }
  }




  async function displayData() {
    try {
      const tableBody = document.getElementById('table-body');
      const data = await fetchData();
      let fila = data.map((elemento)=>{        
        return `
        <tr class="text-center">
          <th scope="row">${elemento.name}</th>
          <td>${elemento.status}</td>
          <td>${elemento.species}</td>
          <td>${elemento.gender}</td>
          <td>${elemento.origin.name}</td>
        </tr>
          `
        });

      tableBody.innerHTML+= fila.join('');
      displayCards();
    } catch (error) {
      console.error(error);
    }
  }


async function displayCards(){
    try{
      const cardsContainer = document.getElementById('cards-container');
      const data = await fetchData();
      let card = data.map((elemento)=>{
      let recortarNombre= elemento.name.trim().split(" ");
      (recortarNombre.length >2)? recortarNombre.pop() : elemento;
      return`      
      <div class="col-xxl-4 col-lg-6 col-9">
        <div class="card mb-3" >
          <div class="row g-0">
            <div class="col-sm-4 d-flex">
              <img src="${elemento.image}" class="img-fluid card-img"  alt="${elemento.name} caracter ">
            </div>
            <div class="col-sm-8 ">
              <div class="card-body text-light bg-dark rounded-end">
                <h3 class="card-title fw-bold m-0">${recortarNombre.join(' ')}</h3>
                <ul>
                  <li><h6 class="fw-normal">${elemento.status} </h6></li>
                </ul>          
                <p class="card-text mt-4 "><span class="text-gray">Last known location:</span><br>${elemento.origin.name}</tr></p>
                <p class="card-text mt-4 "><span class="text-gray">First seen in:</span><br>${elemento.location.name}</tr></p>
              </div>
            </div>
          </div>
        </div>
      </div>`
    });
    cardsContainer.innerHTML= card.join('');

  }
  catch (error) {
    console.error(error);
  }
}
  displayData();
  