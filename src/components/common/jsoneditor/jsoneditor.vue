<template>
	<div class="mx-jsoneditor">
	</div>
</template>

<script>
import * as JSONEditor from 'jsoneditor';

const  options = {
	onEditable: function(node){
		return false;
	}
}

export default {
	name: 'MxJsoneditor',
	props: {
		data: Object
	},
	data() {
		return {
			editor: null
		}
	},
	watch: {
		data() {
			this.initData();
		}
	},
	methods: {
		initData() {
			if (!this.editor) {
				//this.editor.destroy();
				this.editor = new JSONEditor(this.$el,options);
			}
			
			this.editor.set(this.data);
			this.editor.expandAll();
		}
	},
	mounted() {
		if(this.data){
			this.initData();
		}
		
	}
}
</script>

<style scoped>

</style>