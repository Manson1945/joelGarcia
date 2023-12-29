

const renderFooter = ()=> {

    const salida = `
    
    <section class="followUs"> 
    <h3>SEGUINOS</h3>
    <div class="webs">
        <a href="https://instagram.com/joel_garcia_369?igshid=MzRlODBiNWFlZA=="><i class="fa-brands fa-instagram"></i> <h4> @JOEL_GARCIA_369 </h4> </a>
        <a href="https://www.facebook.com/thedeaddandy?mibextid=ZbWKwL"><i class="fa-brands fa-square-facebook"></i> <h4> JOEL GARCIA </h4> </a> 
    </div>
   
</section>

<section class="shipments shipmentsWays">
    <h3>ENVIOS A TODO EL PAIS <i class="fa-solid fa-truck-fast"></i></h3>
    <div>
        <img class="oca" src="./ASSETS/ENVIOS/oca.png" alt="" >
        <img class="cruceroExpress" src="./ASSETS/ENVIOS/crucero-express.png" alt="" >
        <img class="rutaCargo" src="./ASSETS/ENVIOS/ruta-cargo-removebg-preview.png" alt="">
    </div>
    
</section>

    <section class="ftLinks">
        <h3>NAVEGACION</h3>
        <a href="./index.html">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
    </section>


<section class="contact" id="contact">
    <h3>CONTACTANOS</h3>
    <h4><i class="fa-brands fa-whatsapp icon"></i> +54 9 11 5345 6546</h4>
    <h4><i class="fa-solid fa-phone"></i> 2072-8287</h4>
</section>


<a href="https://www.google.com.ar/maps/place/Av.+Hip%C3%B3lito+Yrigoyen+5096,+B1824ABT+Gran+Buenos+Aires,+Provincia+de+Buenos+Aires/@-34.7139277,-58.3950838,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccd3db8786d2d:0x4bb17072dc5a2e9c!8m2!3d-34.7139277!4d-58.3925089!16s%2Fg%2F11gmz26gh_?entry=ttu" class="maps">
<img src="./ASSETS/ENVIOS/maps.jpg" alt=""">

    <div>
        <h4>H.Yrigoyen 5096</h4> 
        <h4>Lanús Oeste</h4>
        <h5>Ver Ubicación...</h5>
    </div>
   



</a>


<section class="hour">
    <h4>Horarios:</h4>
    <h4>Lunes a Viernes 10hs a 18hs</h4>
    <h4>Sábados 11.30hs a 15hs</h4>
</section>
                    `

                    document.getElementById("footer").innerHTML = salida;
}