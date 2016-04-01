

function getJson(url, fRetorno){
    var jsonObj ={};
    //url= "datos.json";
    var ajax_request = new XMLHttpRequest();

    // Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
    ajax_request.onreadystatechange = function() {

    // readyState es 4
    if (ajax_request.readyState == 4 && ajax_request.status == 200) {

        // Analizaos el responseText que contendrá el JSON enviado desde el servidor
        jsonObj = JSON.parse( ajax_request.responseText );
        // La variable jsonObj ahora contiene un objeto con los datos recibidos
        fRetorno(jsonObj);
    }

}
    // Definimos como queremos realizar la comunicación
    ajax_request.open( "GET", url, true );
    //Enviamos la solicitud
    ajax_request.send();
};



var opts = {
  lines: 11 // The number of lines to draw
, length: 19 // The length of each line
, width: 21 // The line thickness
, radius: 41 // The radius of the inner circle
, scale: 0.25 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
}
var target = document.getElementById('contenido');
var spinner = new Spinner(opts).spin(target);

(function()
{ 

    window.addEventListener('load', function(){

        getJson("datos.json", function(dato){

        var contenedor = document.getElementById("contenido");
        var tmpl = document.getElementById("articulo_tpl").innerHTML;  
        var plantilla = Handlebars.compile(tmpl); 
        var html= plantilla(dato);
        contenedor.innerHTML=html;
        });
    });

})();















// function Persona (nombre){
//     this.nombre= nombre;
    
// };

//     Persona.prototype.hablar = function () {
//     console.log(this.nombre);
//     },
    
//     Persona.prototype.saludar= function(){
//         console.log("hola");
//     };