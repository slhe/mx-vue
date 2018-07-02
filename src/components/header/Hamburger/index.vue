<template>
	<el-tooltip effect="white" :content="'显示/隐藏 侧边栏'" :open-delay="1000" :disabled="disabled" placement="bottom" transition="none">
		<el-button type="tools" size="small" @click="toggleSideBar" :class="{'active':aaa}">
			<span class="tools-icon hamburger"></span>
		</el-button>
	</el-tooltip>
</template>

<script>
export default {
	data() {
		return {
			inter: null,
			disabled: false,
			aaa: ''
		}
	},
	name: 'hamburger',
	computed: {
		/*sidebar() {
			return this.$store.getters.sidebar
		}*/
	},
	methods: {
		toggleSideBar() {
			this.disabled = true;
			if (this.inter) {
				clearInterval(this.inter);
				this.inter = null;
			}
			this.inter = setTimeout(() => {
				this.disabled = false;
			}, 2000);

			this.$store.dispatch('toggleSideBar')
		}
	},
	mounted() {
	}
}
</script>
