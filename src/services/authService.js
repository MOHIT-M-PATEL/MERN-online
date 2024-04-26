// services/authService.js
import axios from 'axios';

const authService = {
    checkAuth: () => {
        return axios.get('https://mern-online-b4p1.onrender.com/checkAuth', { withCredentials: true });
    },
    login: (username, password) => {
        return axios.post('https://mern-online-b4p1.onrender.com/login', { username, password }, { withCredentials: true });
    },
    signup: (username, password) => {
        return axios.post('https://mern-online-b4p1.onrender.com/signup', { username, password }, { withCredentials: true });
    },
    logout: () => {
        return axios.post('https://mern-online-b4p1.onrender.com/logout', {}, { withCredentials: true });
    }
};

export default authService;
