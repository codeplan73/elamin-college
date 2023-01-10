import axios from 'axios'
 const API_URL = 'http://localhost:5000/api/v1/auth/'

 const login = async(userData)=> {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
 }

 const logout = () => {
    localStorage.removeItem('user')
    const response = axios.get(API_URL + 'logout')
    return response.data
 }

const authService = {
    login,
    logout
 }

 export default authService;