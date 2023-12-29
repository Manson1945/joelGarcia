/* ----- RENDER GALERY ------ */


const renderGalery = () => {


    const productos = cargarProductosLS();

    let salida = "";

    for (prod of productos) {

        salida +=   `
                    
                    <div class="pics">
                      <a href="#"> <img class="galeryImg" src="${prod.img}"> </a>  
                    </div>   
                     `  
    }
    
        
    document.getElementById("galery").innerHTML = salida;
}
