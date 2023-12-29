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

        /* let salida = `
                    <div>
                    <h1> ${producto.name}</h1>
                    </div>
                    `

        document.getElementById("mainContainer").innerHTML = salida; */
        
    } 

        
        
    

    /* ----- RENDER ----- */

   /*  const renderProducto = () => {

        const productos = cargarProductosLS();

        const producto = buscarProducto(productos.id);


document.getElementById("mainContainer").innerHTML = producto;

        } */
       
    
    
    
    
    renderHeader();
   /*  renderBanner(); */
    /* renderGalery(); */
    /* renderCategories(); */
    renderFooter();
    
    buscarProducto();
    