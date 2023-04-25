import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';


function getData(urlAPI){
    return fetch(urlAPI)
}

 
async function anotherFunction(urlAPI){
    const response = await getData(urlAPI)
    const data =  await response.json()
    return data;
}



async function* iterateGet(){
   const products = await anotherFunction(`${API}/products`);
   const product = await anotherFunction(`${API}/products/${products[0]?.id}`);
   const category = await anotherFunction(`${API}/categories/${product?.category?.id}`);

   yield console.log(products);
   yield console.log(product.title);
   yield console.log(category.name);

}

const g = iterateGet()

g.next().value;
g.next().value;
g.next().value;