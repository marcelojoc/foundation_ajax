function Persona (nombre){
    this.nombre= nombre;
    
};

    Persona.prototype.hablar = function () {
    console.log(this.nombre);
    },
    
    Persona.prototype.saludar= function(){
        console.log("hola");
    };

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



(function()
{ 
    var inicio= getJson("http://127.0.0.1:82/datoJson/datos.json", function(dato){
        
        console.log(dato);
    }) 
        
   
    
    
})();