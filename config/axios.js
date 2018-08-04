import axios from 'axios';
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

axios.defaults.timeout = 15000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = '/';

// NProgress.configure({ minimum: 0.2 });
// NProgress.configure({ easing: 'ease', speed: 500 });
// NProgress.configure({ showSpinner: false });

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // NProgress.start();

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    // NProgress.done();
    if(response.status == 200){
        return response.data;
    }else{
        return response
    }
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default axios;