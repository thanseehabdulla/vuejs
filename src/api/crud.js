
import axios from 'axios'

function getData(data){
	axios.get(data.url)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

function putData(){
axios.put(data.url, data.params)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function deleteData(){
axios.delete(data.url, data.params)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function postData(){
axios.post(data.url, data.params)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export {
	getData,
	putData,
	postData,
	deleteData
}