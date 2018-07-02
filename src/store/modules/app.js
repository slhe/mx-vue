import Cookies from 'js-cookie'

//import i18n from '@/lang'

const app = {
	state: {
		sidebar: {
			opened: !+Cookies.get('sidebarStatus')
		},
		language: Cookies.get('language') || 'zh',
		namespace: Cookies.get('namespace')
	},
	mutations: {
		TOGGLE_SIDEBAR: state => {
			if (state.sidebar.opened) {
				Cookies.set('sidebarStatus', 1)
			} else {
				Cookies.set('sidebarStatus', 0)
			}
			state.sidebar.opened = !state.sidebar.opened
		},
		CHANGE_NAMESPACE: (state, namespace) => {
			state.namespace = namespace;
			Cookies.set('namespace', namespace)
		},
		TOGGLE_LANGUAGE: state => {
			if (state.language == 'zh') {
				state.language = 'en'
				Cookies.set('language', 'en')
				i18n.locale = 'en';
			} else {
				state.language = 'zh'
				Cookies.set('language', 'zh')
				i18n.locale = 'zh';
			}
		},
		SET_LANGUAGE: (state, language) => {
			state.language = language
			Cookies.set('language', language)
		}
	},
	actions: {
		toggleSideBar({
			commit
		}) {
			commit('TOGGLE_SIDEBAR')
		},
		changeNamespace({
			commit
		}, namespace) {
			commit('CHANGE_NAMESPACE', namespace)
		},
		setLanguage({
			commit
		}, language) {
			commit('SET_LANGUAGE', language)
		},
		toggleLanguage({
			commit
		}) {
			commit('TOGGLE_LANGUAGE')
		}
	}
}

export default app
