const XMLHttpRequest = require('xmlhttmrequest').XMLHttpRequest;//una referencia de lo que se va a implementar
const API = 'https://api.escuelajs.co/api/v1'; // en MAY hace referencia a un valor que no va a cambiar va a estar presente
//es la referencia al route del api

function fetchDate(urlApi, callback) {
 let xhttp = new XMLHttpRequest();
 
 xhttp.open('GET', urlApi, true); //para abrir una conexión(obtener, url, habilitar)
 xhttp.onreadystatechange = function (event) {
    //validar el tipo de estado en que se encuentra
    if (xhttp.readyState === 4){
        /*
        0 → Se ha inicializado.
        1 → Loading (cargando).
        2 → Se ha cargado.
        3 → Procesamiento si existe alguna descarga.
        4 → Completado. */
        if (xhttp.status === 200) {
            /**
             * 200 → OK → Indica que todo está correcto.
                201 → Created → Todo está correcto cuando se hizo una solicitud POST, el recurso se creó y se guardó correctamente.
                204 → No Content → Indica que la solicitud se completó correctamente pero no devolvió información. Este es común cuando se hacen peticiones con el verbo DELETE.
                400 → Bad Request → Indica que algo está mal en la petición (no encontró algo).
                401 → Unauthorized → Significa que antes de hacer una solicitud al servidor nos debemos autenticar.
                403 → Forbidden → Indica que no tenemos acceso a ese recurso aunque se esté autenticado.
                404 → Not Found → Indica que no existe el recurso que se está intentando acceder.
                500 → Internal Server Error → Indica que algo falló, es un error que retorna el servidor cuando la solicitud no pudo ser procesada.
             */
            callback(null, JSON.parse(xhttp.resposeText));
        }
    } else {
        const error = new Error('Error' + urlApi);
        return callback(error, null);
    }
 }
 xhttp.send();//una forma que se usaba a los inicios de javaScript, fetch es lo actual
}