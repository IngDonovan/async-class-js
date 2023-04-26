import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFunction = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error){
        console.error(error);
    }
}

anotherFunction(API);



async function runCode() {
    // Tu código aquí 👈
    const url = 'https://domain-api-com';
    try {
      return await fetch(url);
    } catch {
      throw new Error('API Not Found');
    }
  }
runCode();

//otro ejercicio

async function runCode(url) {
  // Tu código aquí 👈
  if (url.substring(0, 8) != "https://") {
    throw new Error('Invalid URL');
  } else {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch {
      throw new Error('Something was wrong');
    }
  }
}

await fetchData('https://api.escuelajs.co/api/v1/categories');


