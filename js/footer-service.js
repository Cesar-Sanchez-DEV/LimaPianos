const footer = document.getElementById('footer');
const newFooter = `
<div class="footer container">
    <section class="infoEmpresa">
        <div class="lgFooter">
            <a href="../index.html"><img src="../img/home/logo_1.svg" alt=""></a>
        </div>
        <div class="textInfo">
            <p>Donde el arte y la ingeniería se fusionan para dar vida a tus objetivos. Somos una empresa apasionada y comprometida con la creación de espacion excepcionales que reflejen tu visión única</p>
        </div>
        <div class="redesFooter">
            <h2>Nuestras Redes Sociales</h2>
            <ul>
                <li><a href=""><img src="../img/iconos/icon_f1.svg" alt="facebook">LIMA PIANOS</a></li>
                <li><a href=""><img src="../img/iconos/icon_i1.svg" alt="instagram">@LIMAPIANOS</a></li>
            </ul>
        </div>
    </section>
    <section class="servicios">
        <h2>Servicios</h2>
        <div class="services">
            <ul>
                <li><a href="services/service1.html"><i class="fa-solid fa-circle"></i>Servicio de <br> Arquitectura</a></li>
                <li><a href="services/service2.html"><i class="fa-solid fa-circle"></i>Ampliaciones y <br> remodelación</a></li>
                <li><a href="services/service3.html"><i class="fa-solid fa-circle"></i>Diseño de interiores</a></li>
                <li><a href="services/service4.html"><i class="fa-solid fa-circle"></i>Acabados y <br> revestimientos de <br> fachadas</a></li>
                <li><a href="services/service5.html"><i class="fa-solid fa-circle"></i>Diseño 3D y <br> visualizaciones</a></li>
            </ul>
            <ul>
                <li><a href="services/service6.html"><i class="fa-solid fa-circle"></i>Servicio de Ingeniería</a></li>
                <li><a href="services/service7.html"><i class="fa-solid fa-circle"></i>Obras Civiles</a></li>
                <li><a href="services/service8.html"><i class="fa-solid fa-circle"></i>Topografía</a></li>
                <li><a href="services/service9.html"><i class="fa-solid fa-circle"></i>Estructura metálicas</a></li>
                <li><a href="services/service10.html"><i class="fa-solid fa-circle"></i>Instalación de <br> blogestores</a></li>
            </ul>
        </div>
    </section>
    <section class="contactanos">
        <h2>Contáctanos</h2>
        <div class="telefono">
            <img src="../img/iconos/icon_phone.svg" alt="telefono">
            <div class="telefonoText">
                <h3>Teléfono</h3>
                <a href="">(+51)986 397 832</a>
                <a href="">(+51)966 316 570</a>
            </div>
        </div>
        <div class="linea"></div>
        <div class="email">
            <img src="../img/iconos/icon_mensaje.svg" alt="email">
            <div class="emailText">
                <h3>E-mail</h3>
                <a href="">limapianos@gmail.com</a>
            </div>
        </div>
        <div class="linea"></div>
        <div class="atencion">
            <img src="../img/iconos/icon_atencion.svg" alt="atencion">
            <div class="atencionText">
                <h3>Horario de Atención</h3>
                <p>Lunes a Viernes <br> 8:00 am - 7:00 pm</p>
                <p>Sábados <br> 8:00 am - 1:00 pm</p>
            </div>
        </div>
    </section>
</div>
`;
footer.insertAdjacentHTML('beforebegin', newFooter);