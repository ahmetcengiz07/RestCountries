import axios from 'axios';

export function getAllData() {
  return axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      return response.data; //asıl istenen objeyi bulmak için .datayı çağırdık
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function (response) {
      return response;
    });
}

export function getCountryData(countryName) {
  return axios
    .get(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => {
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function (response) {
      return response;
    });
}
