import api from '@/api';

let getList = () => api.get('/console/node');

export default {
	getList
}
