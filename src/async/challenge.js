import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fectData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFn = async (urlApi) => {
    try {
        const products = await fectData(`${urlApi}/products`);
        const product = await fectData(`${urlApi}/products/${products[0].id}`);
        const category = await fectData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.log(error);
    }
}

anotherFn(API);