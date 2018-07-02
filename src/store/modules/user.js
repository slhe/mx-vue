import api from '../../views/login/service'
import {
	getToken,
	setToken,
	removeToken
} from '@/utils/auth'

const user = {
	state: {
		token: getToken(),
		name: '',
		avatar: '',
		roles: [],
		introduction: ''
	},

	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_INTRODUCTION: (state, introduction) => {
			state.introduction = introduction
		},
		SET_NAME: (state, name) => {
			state.name = name
		},
		SET_AVATAR: (state, avatar) => {
	      state.avatar = avatar
	    },
		SET_ROLES: (state, roles) => {
	      state.roles = roles
	   },
	},

	actions: {
		// 用户名登录
	    LoginByUsername({ commit }, userInfo) {
	      return new Promise((resolve, reject) => {
	        api.login(userInfo.username.trim(), userInfo.password).then(data => {
	          if(data && data.token) {
	            commit('SET_TOKEN', data.token)
	            setToken(data.token)
	            resolve(true)
	          }
	          resolve(false)
	        }).catch(error => {
	          reject(error)
	        })
	      })
	    },
		// 获取用户信息
	    GetUserInfo({ commit, state }) {
	      return new Promise((resolve, reject) => {
	      	api.getUserInfo("admin", "admin").then(data => {
	         if(data) {
	         	commit('SET_ROLES', data.roles)
		        commit('SET_NAME', data.name)
		        commit('SET_AVATAR', data.avatar)
		        commit('SET_INTRODUCTION', data.introduction)
	         }
	         resolve(data)
	       }).catch(error => {
	         reject(error)
	       })
	      })
	    }
	}
}

export default user
