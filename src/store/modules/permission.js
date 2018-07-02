import api from '../../views/login/service'
import {
  asyncRouterMap/*,
  constantRouterMap*/
} from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: [],//constantRouterMap,
    addRouters: [],
    menuRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      let targetRouter = constantRouterMap.concat(routers)
      state.routers = targetRouter

      let menuRouters = [];
      for (let i = 0; i < targetRouter.length; i++) {
        const element = targetRouter[i];
        if (!element.hidden) {
          if (element.children.length === 1 && !element.meta) {
            let c_path = element.children[0].path;
            let firstRoot = '';
            if (c_path.length > 0) {
              firstRoot = c_path.slice(0, 1) === '/' ? '' : '/';
            }
            element.children[0].path = element.path + firstRoot + c_path;
            menuRouters.push(element.children[0])
          } else {
            menuRouters.push(element);
          }
        }
      }

      state.menuRouters = menuRouters;
    }
  },
  actions: {
    GenerateRoutes({
      commit
    }, data) {
      return new Promise(resolve => {
        /*const {
          roles
        } = data
        let accessedRouters
        if (roles.indexOf('admin') >= 0) {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()*/
      	api.role("qwe", "admin").then(data => {
      		console.info("aipRole:"+data);
	         if(data) {
	         	console.info("通过递归实现动态路由数据");
	         	/**
	         	 *思路：通过权限查出可访问菜单、
	         	 * 			通过递归去匹配asyncRouterMap数据
	         	 * 			并组出新routers数据
	         	 */
	         	console.info(data);
	         	console.info("asyncRouterMap");
	         	console.info(asyncRouterMap);
	         	
	         	if (data.indexOf('admin') >= 0) {
	         		
	         	}
	         }
	         resolve()
	       }).catch(error => {
	       	console.info('异常');
	         reject(error)
	       })
      })
    }
  }
}

export default permission
