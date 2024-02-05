
const renderHeader = ()=> {

   const salida= `
   
   
    <section class="mark">
        <img class="logo" src="./ASSETS/logo.png" alt="Logo" >
        <h1 class="headerTitle">JOEL GARCIA</h1>
    </section>

    <nav>
        <a href="./index.html"><i class="fa-solid fa-house"></i>INICIO</a>
        <a href="../productos.html"><i class="fa-solid fa-shirt"></i>PRODUCTOS</a> 
        <a href="#contact"><i class="fa-solid fa-phone-flip"></i>CONTACTO</a>
    </nav>
            `

            



        document.getElementById("header").innerHTML = salida;
}

