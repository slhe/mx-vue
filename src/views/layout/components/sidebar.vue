<template>
	<div class="kd-sidebar" >
		<div class="kd-nav">
			<div class="kd-nav-group" v-for="(item, index) in menu" :key="item.name" >
				<div class="kd-nav-group-item">
					<router-link v-if="item.path" class="kd-nav-item-button" :to="item.path">{{item.name}}</router-link>
					<span v-else class="kd-nav-item-button" :to="item.path">{{item.name}}</span>
				</div>
				<div class="kd-nav-item" v-for="child in item.children" :key="child.name">
					<router-link class="kd-nav-item-button" :to="child.path">{{child.name}}</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const menu = [
	{name:'菜单1',path:'/abc',children:[
		{name:'菜单1.1',path:'/home'},
		{name:'菜单1.2',path:'/demo'},
		{name:'菜单1.3',path:'/abc1.3'}
	]},
	{name:'菜单2',path:'/qwe',children:[
		{name:'菜单2.1',path:'/qwe2.1'},
		{name:'菜单2.2',path:'/qwe2.2'},
		{name:'菜单2.3',path:'/qwe2.3'}
	]},
	{name:'菜单3',path:'',children:[]}
];
export default {
	data() {
		return {
			menu: [],
			namespaces: []
		}
	},
	computed: {
	},
	methods: {
	},
	mounted() {
		this.menu = menu;
	}
};
</script>
