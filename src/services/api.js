import axios from "axios";

export function setTokenHeader(token){
  if(token){
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

//warpped the axios call in the apiCall function, to format errors, clean things up
//METHOD is the HTTP verb
///PATH is the route / endpoint
//DATA (optional) data in JSON that we want to get from a POST request
export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](path, data)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err.response.data.error);
      });
  });
}
