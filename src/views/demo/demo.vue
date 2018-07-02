<template>
	<el-row>
		<el-button @click="btn_click">默认按钮</el-button>
		<el-button @click="axios_btn_click">测试axios</el-button>
		<el-button @click="mock_btn_click">测试mock</el-button>
		<el-dialog custom-class="el-dialog-height" title="部署管理详情" :visible.sync="dialogVisible">
			<template v-loading="dialogLoading">
				<mx-jsoneditor :data='jsonData'></mx-jsoneditor>
			</template>
		</el-dialog>
	</el-row>
</template>

<script>
import service from './service';
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
			//this.jsonData = jsonData;
		},
		axios_btn_click: function(){
			service.getList().then(data => {
				this.jsonData = data;
			});
		},
		mock_btn_click: function(){
			
		}
	}
}
</script>

<style>

</style>