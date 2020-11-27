window.addEventListener('load', function(){
    console.log('el contenido ha cargado');

    var imagenes = [];

    imagenes[0] = 'foto1.jpg';
    imagenes[1] = 'foto2.jpg';
    imagenes[2] = 'foto3.jpg';
    imagenes[3] = 'foto4.jpg';

    var indiceImagenes = 0;

    function cambiarImagen(){
        document.slider.src = imagenes[indiceImagenes];

        if (indiceImagenes < 2){
            indiceImagenes++;
        } else {
            indiceImagenes = 0;
        }
    }
});