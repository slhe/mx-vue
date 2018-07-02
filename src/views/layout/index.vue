<template>
	<div class="layout">
		<kd-header></kd-header>
		<div class="kd-contents">
			<kd-sidebar></kd-sidebar>
			<kd-content></kd-content>
		</div>
	</div>
</template>

<script>
import KdHeader from './components/header.vue'
import KdSidebar from './components/sidebar.vue'
import KdContent from './components/content.vue'

export default {
	name: 'layout',
	components: {
		KdHeader,
		KdSidebar,
		KdContent
	},
	computed: {
		/*sidebar() {
			return this.$store.state.app.sidebar
		}*/
	}
}
</script>
