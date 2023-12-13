// all the routes over here 
const BASE_URL = "https://may-ecomm-backend.onrender.com" ||"http://localhost:3000";
const  urlConfig = {
    LOGIN_URL: BASE_URL + "/api/auth/login",
    SIGNUP_URL: BASE_URL + "/api/auth/signup",
    ALL_PRODUCT_URL: BASE_URL +"/api/product",
    LOGOUT_URL:BASE_URL+"/api/auth/logout"
}
export default urlConfig;



