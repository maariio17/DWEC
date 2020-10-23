var radio = parseInt(prompt('Introduce el radio del circulo'));
function calcCircunference () {
    //var radio = parseInt(prompt('Introduce el radio del circulo'));
    const pi = Math.PI;
    document.write('<p>La circunferencia del circulo es '+(radio+radio)*pi+' u</p>');
}
calcCircunference();

function calcArea(){
    //var radio = parseInt(prompt('Introduce el radio del circulo'));
    const pi = Math.PI;
    document.write('<p>El area del circulo es '+radio*radio*pi+' u<sup>2</sup></p>');
}
calcArea();
