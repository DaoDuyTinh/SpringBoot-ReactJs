import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if  (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(firstname,lastname,address,username, email, password,phone) {
    return axios.post(API_URL + "signup", {
      firstname,
      lastname,
      address,
      username,
      email,
      password,
      phone
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
  checkUser(role){
    return axios.get(API_URL+"check",role);
  }
}

export default new AuthService();
