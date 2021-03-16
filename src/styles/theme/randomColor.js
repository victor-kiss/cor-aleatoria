

function hexaColor(){
    let result =`${'#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)}`
  
    return {result}
    }
    

    hexaColor()
    
  
    const {result} = hexaColor()

export default {
    title:'random color',
    color:result,
}