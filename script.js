async function fetchData() {
    try {
    //   const response = await fetch('https://api.example.com/data');
    const response = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8');
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
      console.log(data);
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

      console.log(fila);
      
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
      return`      
      <div class="col-xxl-4 col-lg-6 col-12">
        <div class="card mb-3" >
          <div class="row g-0">
            <div class="col-sm-4 d-flex">
              <img src="${elemento.image} "class="img-fluid card-img" alt="MORTY">
            </div>
            <div class="col-8 ">
              <div class="card-body text-light bg-dark rounded-end">
                <h3 class="card-title fw-bold m-0">${elemento.name} </h3>
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
  