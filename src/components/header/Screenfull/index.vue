<template>
	<el-tooltip effect="white" :content="aaa" :open-delay="1000" placement="bottom">
		<el-button type="tools" size="small" @click="handlerScreenfull" :class="{'active':isFullscreen}">
			<span class="tools-icon screenfull">
				<span style="top: 0;left: 0;border-width: 2px 0 0 2px"></span>
				<span style="top: 0;right: 0;border-width: 2px 2px 0 0"></span>
				<span style="bottom: 0;left: 0;border-width: 0 0 2px 2px"></span>
				<span style="bottom: 0;right: 0;border-width: 0 2px 2px 0"></span>
			</span>
		</el-button>
	</el-tooltip>
</template>

<script>
import screenfull from 'screenfull'

export default {
	name: 'screenfull',
	data() {
		return {
			isFullscreen: false,
			aaa:'全拼'
		}
	},
	methods: {
		handlerScreenfull() {
			if (!screenfull.enabled) {
				this.$message({
					message: 'you browser can not work',
					type: 'warning'
				})
				return false
			}
			screenfull.toggle();
		}
	},
	mounted() {
		screenfull.onchange(val => {
			this.isFullscreen = screenfull.isFullscreen;
		})
	}
}
</script>