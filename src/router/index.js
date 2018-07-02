import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

import Layout from '../views/layout/index.vue'

export const constantRouters = [{
		path: '',
		component: Layout,
		redirect: '/home',
		children: [{
			path: '/home',
			name: 'home',
			component: _import('home/index')
		}]
	},
	{
		path: '/login',
		component: _import('login/index'),
		hidden: true
	},
	{
		path: '/401',
		component: _import('errorPage/401'),
		hidden: true
	},
	{
		path: '/404',
		component: _import('errorPage/404'),
		hidden: true
	},
	{
		path: '*',
		redirect: '/404',
		hidden: true
	}
];

export default new Router({
  mode: 'history',
	scrollBehavior: () => ({
		y: 0
	}),
	routes: constantRouters
})

//异步挂载的路由 动态需要根据权限加载的路由表
export const asyncRouterMap = [{
		path: '/demo',
		name: 'demo',
		component: _import('demo/demo')
		
}, { path: 'tinymce', component: _import('demo/demo'), name: 'tinymce-demo', meta: { title: 'tinymce' }},
      { path: 'markdown', component: _import('demo/demo'), name: 'markdown-demo', meta: { title: 'markdown' }},
      { path: 'json-editor', component: _import('demo/demo'), name: 'jsonEditor-demo', meta: { title: 'jsonEditor' }},
      { path: 'dnd-list', component: _import('demo/demo'), name: 'dndList-demo', meta: { title: 'dndList' }},
      { path: 'splitpane', component: _import('demo/demo'), name: 'splitpane-demo', meta: { title: 'splitPane' }},
      { path: 'avatar-upload', component: _import('demo/demo'), name: 'avatarUpload-demo', meta: { title: 'avatarUpload' }},
      { path: 'dropzone', component: _import('demo/demo'), name: 'dropzone-demo', meta: { title: 'dropzone' }},
      { path: 'sticky', component: _import('demo/demo'), name: 'sticky-demo', meta: { title: 'sticky' }},
      { path: 'count-to', component: _import('demo/demo'), name: 'countTo-demo', meta: { title: 'countTo' }},
      { path: 'mixin', component: _import('demo/demo'), name: 'componentMixin-demo', meta: { title: 'componentMixin' }},
      { path: 'back-to-top', component: _import('demo/demo'), name: 'backToTop-demo', meta: { title: 'backToTop' }}];