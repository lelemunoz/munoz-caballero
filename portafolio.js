// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/Foto-1.png",
    title: "Divône Pastelería & Galletería",
    about: "Trabajo colaborativo de branding para microemprendimiento Divône, que ofrece productos de repostería fina y bollería. Estado: En proceso.",
}, {
    figure: "media/Foto-2.png",
    title: "Amulen Termoterapia",
    about: "Creación de identidad visual para proyecto colaborativo con Amulen Termoterapia, microemprendimiento de la comuna de peñalolén. Estado: Finalizado.",
}, {
    figure: "media/Foto-3.png",
    title: "Tarjeta Presentación Fonoaudiología",
    about: "Diseño de tarjeta de presentación informativa para fonoaudióloga. Estado: Finalizado.",
}, {
    figure: "media/Foto-4.png",
    title: "Poster Instructivo Fonoaudiológico",
    about: "Trabajo infográfico con el objetivo de rediseñar una guía explicativa sobre Ejercicios de Ayuda para la Succión de la Universidad Andrés Bello, con la orientación guía de la fonoaudióloga Paulina Lin. Estado: Finalizado.",
}, {
    figure: "media/Foto-5.png",
    title: "SAJF",
    about: "Creación de identificador gráfico para Dj SAJF. El resultado fue el diseño de un logotipo que incluye las iniciales del nombre del usuario, utilizando el blanco y negro como variaciones de color. Estado: Finalizado.",
}, {
    figure: "media/Foto-6.png",
    title: "Hubby",
    about: "Diseño de tríptico informativo orientado a ferias y concursos de diseño, como proyecto colaborativo junto a emprendimiento Hubby Med, que ofrece un innovador dispositivo que monitorea el estado de salud del bebé en el proceso de embarazo. Estado: Finalizado.",
}, {
    figure: "media/Foto-7.png",
    title: "IMPACTA",
    about: "Diseño colaborativo de infografía para sintetizar resultados estadísticos encontrados luego de una evaluación del Programa Buenas Prácticas 2018. Estado: Finalizado.",
  }, {
      figure: "media/Foto-8.png",
      title: "Troda",
      about: "Creación de marca para proyecto universitario que busca rediseñar la silla de ruedas para situaciones de emergencia en edificios. Estado: Finalizado.",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
