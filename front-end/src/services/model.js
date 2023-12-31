import http from "./httpService";

const getUserData = (data) => {
  
    return http.post(process.env.REACT_APP_BASE_API + "getuserinfo/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };


const updateUserInfo = (data) => {
  return http.post(process.env.REACT_APP_BASE_API + "profileupdate/", data, {
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export {
  getUserData,
  updateUserInfo
}