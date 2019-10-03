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
/*window.sortBy = {
 sortBy = (rickData,seletSort)=>{

  if (seletSort === "az"){
    const orderRick =rickData.sort((a,b)=>{
      return a.name.localeCompare(b.name);
    })
    return orderRick;
  }
  else {
const orderRickZ=rickData.sort((a,b)=>{
  return b.name.localeCompare(a.name);
})
return orderRickZ
  }
}

} */

