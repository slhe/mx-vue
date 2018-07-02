const menuList = 
[
 {menuId:'1',menuPath:'path1',menuTitle:'菜单1',menuIcon:'icon',children:[
	 {menuId:'1.1',menuPath:'path1.1',menuTitle:'菜单1.1',menuIcon:'icon',children:[]},
	 {menuId:'1.2',menuPath:'path1.2',menuTitle:'菜单1.2',menuIcon:'icon',children:[]}
 ]},
 {menuId:'2',menuPath:'path2',menuTitle:'菜单2',menuIcon:'icon',children:[
 	{menuId:'2.1',menuPath:'path2.1',menuTitle:'菜单2.1',menuIcon:'icon',children:[]},
 	{menuId:'2.2',menuPath:'path2.2',menuTitle:'菜单2.1',menuIcon:'icon',children:[]}
 ]},
 {menuId:'3',menuPath:'path3',menuTitle:'菜单3',menuIcon:'icon',children:[]},
 {menuId:'4',menuPath:'path4',menuTitle:'菜单4',menuIcon:'icon',children:[
 	{menuId:'4.1',menuPath:'path4.1',menuTitle:'菜单4.1',menuIcon:'icon',children:[
 		{menuId:'4.1.1',menuPath:'path4.1.1',menuTitle:'菜单4.1.1',menuIcon:'icon',children:[]}
 	]},
 	{menuId:'4.2',menuPath:'path4.2',menuTitle:'菜单4.2',menuIcon:'icon',children:[]}
 ]}
];

export default {
	menuList: config => {
		return {
			code: 200,
			data: menuList
		}
	}
}
