import {
	param2Obj
} from '@/utils'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
};

export default {
	getUserInfo: config => {
		const token = JSON.parse(config.body).token
		if (userMap[token]) {
			const body = {
				code: 200,
				data: userMap[token]
			};
			return body
		} else {
			return false
		}
	},
	login: config => {
		const {
			username,
			password
		} = JSON.parse(config.body);
		if (username === 'admin' && password === '123456') {
			return {
				code: 200,
				data: {
					token: 'admin',
					introduction: '我是超级管理员',
					avatar: '/static/logo.png',
					name: 'Super Admin'
				}
			};
		} else {
			return {
				code: 20001,
				msg: "用户名或密码错误"
			}
		}
	},
	logout: () => {
		return {
			code: 0
		}
	}
}
