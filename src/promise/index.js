const promise = new Promise (function (resolve, reject) {
    resolve('Hey!')
});

const cows = 15;
const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve (`We have ${cows} cows on the farm`);
    } else {
        reject ("There isn't no cows on the farm");
    }
});

countCows.then((result)=> {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));



function delay(time, message) {
    // Tu código aquí 👈
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message);
      }, time);
  
    });
  }

delay(2000, "Hello after 2s")
.then((message) => console.log(message));