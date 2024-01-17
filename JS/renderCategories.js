

const renderCategories = ()=> {

    const salida = `
             
    <a class="remeras category" href="../remeras.html">
    
            
                <img src="../ASSETS/PICS/CATEGORIAS/REMERAS.jpg" alt="" >

    
            <div class="skewCategories"></div>

            <div class="textYbtn">
                <h2>REMERAS</h2>
                <button>VER MÁS</button>
            </div>
    
        

        </a>

        <a class="buzosYcamperas category" href="../buzosYcamperas.html">
            <img src="../ASSETS/PICS/CATEGORIAS/CAMPERAS Y BUZOS.jpg" alt="" >

            <div class="skewCategories"></div>
            
            <div class="textYbtn">
                <h2>BUZOS Y CAMPERAS</h2>
                <button>VER MÁS</button>
            </div>

        </a>
                    `
            document.getElementById("categories").innerHTML = salida;
        
        }