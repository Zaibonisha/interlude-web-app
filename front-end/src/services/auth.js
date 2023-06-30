import http from "./httpService";

const signUp = (data) => {
  
    return http.post(process.env.REACT_APP_BASE_API + "register/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(process.env.REACT_APP_BASE_API)
  };


const singIn = (data) => {
  console.log('data', JSON.parse(data));
    return http.post(process.env.REACT_APP_BASE_API + "login/", data, {
      headers: {
        "Content-Type": " application/json",
      },
    });
};

const logout = (data)=> {
  localStorage.clear('token');
}

export {
  signUp,
  singIn
}