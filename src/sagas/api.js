let axios = require('axios');
const urlGetMovies = "https://jsonplaceholder.typicode.com/posts";
const urlGetCountry = "https://raw.githubusercontent.com/cihanbas/turkiye_iller_ve_ilceler_json/master/country.json";
const posts = "https://jsonplaceholder.typicode.com/posts/1";

// function* posts(){
//     const response=
// }

function* getPostApi() {
    let data2 = '';
    const data = axios('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: "this.state.movieName",
            body: "this.state.relaseYear"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
         .then(resp => JSON.stringify(resp))
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        });
    console.log("merhabadsa dasd", data);
    return yield data.status === 200 ? data.data : [];
}


function* getMoviesFromApi() {
    const response = yield axios(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    });

    return yield response.status === 200 ? (response.data) : []
}

function* getCountryFromApi() {
    const response = yield axios(urlGetCountry, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    });

    return yield response.status === 200 ? (response.data) : []
}

export const Api = {
    getMoviesFromApi,
    getCountryFromApi,
    getPostApi
};