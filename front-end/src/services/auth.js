import http from "./httpService";

const signUp = (data) => {
    return http.post(process.env.REACT_APP_BASE_API + "register/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };


const singIn = (data) => {
  console.log('signin', data)
    return http.post(process.env.REACT_APP_BASE_API + "login/", data, {
      headers: {
        "Content-Type": " application/json",
      },
    });
};


export {
  signUp,
  singIn
}