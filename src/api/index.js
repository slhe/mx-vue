import axios from 'axios'
import {
	Message,
	Notification
} from 'element-ui'
//import store from '@/store'
/*import {
	getToken
} from '@/utils/auth'
*/
const service = axios.create({
	baseURL: process.env.BASE_API,
	timeout: 10000
})

/*service.interceptors.request.use(config => {
	if (store.getters.token) {
		config.headers['Along-Token'] = getToken()
	}
	//replace {:namespace} of global url
	config.url = config.url.replace(':namespace', store.getters.namespace);
	return config
}, error => {
	console.log(error)
	Promise.reject(error)
})*/

service.interceptors.response.use(
	response => {
		if (response.config.url.includes('static/map')) {
			return response.data;
		}
		const res = response.data;

		if (res.code === 200) {
			if(res.data != null){
				return res.data;
			}
			
		} else if (res.code === 20003) {
			MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', res.msg || '确定登出', {
				confirmButtonText: '重新登录',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				store.dispatch('FedLogOut').then(() => {
					location.reload();
				});
			});
			return Promise.reject('error');
		} else {
			Message({
				type: 'error',
				message: res.msg || '未知异常'
			});
			return Promise.reject('error');
		}
	}, error => {
		Message({
			message: error.message,
			type: 'error'
		})
		return Promise.reject(error)
	})

export default service
