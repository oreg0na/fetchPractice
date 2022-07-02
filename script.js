'use strict';

const getData = () => {
    return fetch('db.json')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
};

let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
xhr.send(getData());

xhr.onload = () => console.log(xhr.response);
