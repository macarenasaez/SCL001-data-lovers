
const rickData = window.RICKANDMORTY.results;

let container = document.getElementById("root");
document.getElementById("rickanDmorty").addEventListener("change",() => {

  let speciesFilter = document.getElementById ("rickanDmorty").value;
const results = filterData(rickData,speciesFilter);

//console.log(results);

const createCards = (results) => {
  let characters = "";
  results.forEach(element => {
    const cards = `
  
    <div class="flip-card">
  <div class="flip-card-inner">
  
   <div class="flip-card-front">
     <img id="img-card" src=${element.image} alt="Imagen">
     <h4>${element.name}</h4> 
    </div>
  
    <div class="flip-card-back">
  
    <p>${element.status}</p>
    <p>${element.species}</p>
    <p>${element.type}</p>
    <p>${element.gender}<p>
  </div>
  
  </div>
  </div>`
  characters += cards;

  });
  container.innerHTML= characters;

  }
  createCards(results);

});




//ordenar de la a-z
/*const selectOrder= document.getElementById("order");
selectOrder.addEventListener("change",()=>{

  const seletSort = selectOrder.options[order.seletSort].value;
  let results = window.sort.sortBy(rickData,seletSort);

  document.getElementById("root").innerHTML="";
  const order=results.forEach((element)=>{
element.innerHTML =`
<div class="flip-card">
<div class="flip-card-inner">

 <div class="flip-card-front">
   <img id="img-card" src=${element.image} alt="Imagen">
   <h4>${element.name}</h4> 
  </div>

  <div class="flip-card-back">

  <p>${element.status}</p>
  <p>${element.species}</p>
  <p>${element.type}</p>
  <p>${element.gender}<p>
</div>

</div>
</div>`
  })
return order;
});*/

   