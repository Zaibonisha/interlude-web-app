import axios from 'axios';


const baseAPI = axios.create();

const signUp = (data) => {
  
    return baseAPI.post(process.env.REACT_APP_BASE_API + "register/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };


const singIn = (data) => {
  console.log('data', JSON.parse(data));
    return baseAPI.post(process.env.REACT_APP_BASE_API + "login/", data, {
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