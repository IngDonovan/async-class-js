import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//post data

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "IngDrm",
    "price": 1000,
    "description": "a boss",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/people"]
  }

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));

  /**
   * {
  statusCode: 400,
  message: [
    'title should not be empty',
    'title must be a string',
    'price should not be empty',
    'price must be a positive number',
    'description should not be empty',
    'description must be a string',
    'categoryId should not be empty',
    'categoryId must be a number conforming to the specified constraints',
    'images must contain at least 1 elements',
    'images should not be empty',
    'each value in images must be a URL address',
    'images must be an array'
  ],
  error: 'Bad Request'
}
   */

/**
 * {
  title: 'IngDrm',
  price: 1000,
  description: 'a boss',
  images: [ 'https://placeimg.com/640/480/people' ],
  category: {
    id: 1,
    name: 'Clothes',
    image: 'https://picsum.photos/640/640?r=7015',
    creationAt: '2023-04-24T12:19:29.000Z',
    updatedAt: '2023-04-24T12:19:29.000Z'
  },
  id: 229,
  creationAt: '2023-04-24T19:25:01.000Z',
  updatedAt: '2023-04-24T19:25:01.000Z'
}

 */