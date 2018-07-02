import api from '@/api';

let login = (username,password) =>api.post('console/admin/login/',{
	username,
	password
});
let getUserInfo = (username,token) =>api.post('console/admin/userInfo/',{
	username,
	token
});
let role = (username,role) =>api.get('console/admin/role/',{
	username,
	role
});
let logout = () => api.post('/console/user/logout');
export default {
	login,
	getUserInfo,
	role,
	logout
}
