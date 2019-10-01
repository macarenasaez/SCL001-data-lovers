/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window



function filterData (data,species){
  let filterResult = data.filter(element =>{
    return element.species.includes(species)
  })
  return filterResult
}
window.filterData = filterData;

//funcion para ordenar 
const sortBy = (rickData,seletSort)=>{
  let  orderRick  = rickData;
  if (seletSort === "a-z"){
    orderRick = data.sort((a,b)=> a.name.localeCompare(b.name));
  }
  if (seletSort === "z-a"){
    orderRick = data.sort((a, b) => a.name.localeCompare(b.name)).reverse();
  }
  return (orderRick);
}

sortBy();
window.sortBy = sortBy;


