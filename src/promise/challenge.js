import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
};

// fetchData(`${API}/products`)
//     .then(response => response.json())//para saber que hay en su respuesta
//     .then(products => {
//         console.log(products);
//     })//mostrarlo
//     .then(()=> {
//         console.log('Hola');
//     })
//     .catch(error => console.error(error));

    //multiples llamados

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`); //la segunda peticion
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`);
    })
    .then(response => response.json())
    .then(category => {
        console.log((category.name));
    })
    .catch(error => console.error(error))
    .finally(() => console.log('Finally'));