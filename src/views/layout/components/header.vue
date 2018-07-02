<template>
	<div class="kd-toolbar">
		<div class="kd-toolbar-left">
			<div class="kd-toolbar-tools">
				<hamburger></hamburger>
				<!--<open-window></open-window>-->
				<div class="logo">平台</div>
				<!--<go-home></go-home>
				<breadcrumb></breadcrumb>-->
			</div>
		</div>
		<div class="kd-toolbar-center"></div>
		<div class="kd-toolbar-right">
			<div class="kd-toolbar-tools">
				<lang-select class="kd-lang"></lang-select>
				<screenfull></screenfull>
				<!--<error-log></error-log>-->
			</div>
		</div>
	</div>
</template>

<script>
import Hamburger from '@/components/header/Hamburger'
import LangSelect from '@/components/header/LangSelect'
import Screenfull from '@/components/header/Screenfull'
/*import ErrorLog from '@/components/header/ErrorLog'
import GoHome from '@/components/header/GoHome'
import Breadcrumb from '@/components/header/Breadcrumb'
import OpenWindow from '@/components/header/OpenWindow'
*/
export default {
	components: {
		Hamburger,
		LangSelect,
		Screenfull
		/*ErrorLog,
		GoHome,
		Breadcrumb,
		OpenWindow*/
	},
	data() {
		return {
		}
	}
}
</script>