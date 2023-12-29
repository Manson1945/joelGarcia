fetch("./productos.json")

.then((response) => response.json())
    .then((data) => {
        productos = data;

        guardarProductosLS(productos);

    })

    .catch ((error) => {
        console.error("error al cargar el archivo JSON:" , error)
    });


    /*-----GUARDAR Y CARGAR JUEGOS-----*/



    const guardarProductosLS = (productos)=> {

        localStorage.setItem("productos" , JSON.stringify(productos));
    
         
    }
    
    
    const cargarProductosLS = () => {
    
        return JSON.parse(localStorage.getItem("productos")) || [];
    
    } 

    

    const buscarProducto = (id) => {

        const productos = cargarProductosLS();
    
        const producto = productos.find (item => item.id === id);

        console.log(producto);

        let salida = `
        <section class="prodContainer" onclick="buscarProducto(${producto.id})">

             

        <img src="${producto.img}" > 

        <div class="skewDiv"></div>
    
        <div class="infoContainer">


        <h3 class="infoTitle"> ${producto.name} </h3>

        <h3 class="infoPrice">$ ${producto.price} </h3>

        <a>Ver talles...</a>

        
        </div>
        
         

    </section>
                    `
                    

        document.getElementById("mainContainer").innerHTML = salida;

       
        
    } 

    

    

    /* ----- RENDER ----- */

    const renderProductos = () => {

        const productos = cargarProductosLS();
    
        let salida = "";
        
        for (prod of productos) {

    
            salida += ` 
            
            <section class="prodContainer" onclick="buscarProducto(${prod.id})">

             

            <img src="${prod.img}" > 
    
            <div class="skewDiv"></div>
        
            <div class="infoContainer">

    
            <h3 class="infoTitle"> ${prod.name} </h3>

            <h3 class="infoPrice">$ ${prod.price} </h3>

            <a>Ver talles...</a>
    
            
            </div>
            
             

        </section>

        
                        `
        }
    
        document.getElementById("mainContainer").innerHTML = salida;
    
    }
    
    
    renderHeader();
    renderFooter();
    renderProductos();
    