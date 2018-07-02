<template>
	<el-row>
		<el-button @click="btn_click">默认按钮</el-button>
		<el-dialog custom-class="el-dialog-height" title="部署管理详情" :visible.sync="dialogVisible">
			<template v-loading="dialogLoading">
				<mx-jsoneditor :data='jsonData'></mx-jsoneditor>
			</template>
		</el-dialog>
	</el-row>
</template>

<script>
	const jsonData = {
		a: 1,
		b: 2
	};

	export default {
		data() {
			return {            
				dialogVisible: false,
				jsonData: {}
			};
		},
		methods: {
			btn_click: function() {
				this.dialogVisible = true;
				this.jsonData = jsonData;
			}
		}
	}
</script>

<style>

</style>