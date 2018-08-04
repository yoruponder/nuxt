import axios from '_CFG_/axios';

let Api = {};

Api.test = () => axios.get('http://wikiapi.dev.8591.com.tw/', { params: { c: 'notification', a: 'notificationCategory' } });

export { Api };