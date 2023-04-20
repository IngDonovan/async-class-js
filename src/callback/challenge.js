const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;//una referencia de lo que se va a implementar
const API = 'https://api.escuelajs.co/api/v1'; // en MAY hace referencia a un valor que no va a cambiar va a estar presente
//es la referencia al route del api

//funcion principal que obtendrá la informacion del producto como un objeto
function fetchData(urlApi, callback) {
    //inicializar un objeto de tipo XMLHttpRequest
 let xhttp = new XMLHttpRequest();
 //El metodo .open realiza la petición de apertura de comunicación, el metodo puede ser 'GET' o 'POST', luego se envia la URL, si es asincrono (true o false), usuario y contraseña. En esta caso solo se utiliza el metodo, la url y async
 xhttp.open('GET', urlApi, true); //para abrir una conexión(obtener, url, habilitar)
 //en este metodo Almacena el nombre de la función que se ejecutará cuando el objeto XMLHttpRequest cambie de estado
 xhttp.onreadystatechange = function (event) {
    //validar el tipo de estado en que se encuentra
    if (xhttp.readyState === 4){
        /*el atributo readyState define el estado del objeto XMLHttpRequest
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
            //se ejecuta el callback recibiendo como argumentos un objeto, como la respuesta de la API es un texto plano, el metodo JSON.parse tranformará este texto en un objeto.
            //El atributo devuelve un DOMString que contiene la  respuesta a la consulta como un texto o null si la consulta no tuvo exito o aun no ha sido completada.
            callback(null, JSON.parse(xhttp.responseText));
        }//si la respuesta de la API no es exitosa se captura el error
         else { //se inicializa un objeto de tipo Error donde se le envian como argumentos un mensaje de error y la URL de la API para conocer en dónde se produjo el error
            const error = new Error('Error ' + urlApi);
            //se ejecuta el callback recibiendo como argumentos el error y null debido a que no se pudo obtener el objeto
            return callback(error, null);
        }
    } 
 }//el método .send() envia la petición al servidor
 xhttp.send();//una forma que se usaba a los inicios de javaScript, fetch es lo actual
}

//hacer el llamado de la funcion
//se invoca el metodo fetchData() pasandole como argumentos la varible API concatenada con la cadena 'products' para acceder a la URL de la API deseada, y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos traidos por la API).
fetchData(`${API}/products`, function (error1, data1) {
    if(error1) return console.error(error1);//si en este punto se identifica un error se imprime en consola y se detiene el proceso
    //se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1, se envia como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una función anónima.
    fetchData(`${API}/products/${data1[0].id}`,function(error2, data2){
        if(error2) return console.error(error2);//Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, se envían como parametros la url de la API con la concatenación de 'Categories' y el atributo Id de categoria del objeto data2 de la función anterior
        //en este caso puntual se hace uso de Optional Caining el cual hace una evalucación de las propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la propiedad no exista o sea null.
        //igual que las anteriores e envia una funcion anonima con 2 argumentos, un objeto Error y un objeto de datos
        fetchData(`${API}/categories/${data2?.category?.id}`,function(error3, data3){
            if(error3) return console.error(error3);
             //Se imprime el objeto en la posición 1 del arreglo de los objetos obtenidos en el metodo invocado inicialmente
            console.log(data1[0]);
              //Se imprime el titulo del objeto que se consultó en la seguna invocación de la función
            console.log(data2.title);
            //Se imprime el nombre de la categoria a la que pertenece el objeto que se consultó en la seguna invocación del método.
            console.log(data3.name);

        });
    });
});