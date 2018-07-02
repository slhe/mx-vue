<template>
	<div class="login-container">
		<el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
			<div class="title-container">
				<h3 class="title">登陆</h3>
			</div>
			<el-form-item prop="username">
				<el-input name="username"  v-model="loginForm.username" autoComplete="on">
					<template slot="prepend">
						<span class="icon icon-username"></span>
					</template>
				</el-input>
			</el-form-item>

			<el-form-item prop="password">
				<el-input name="password" :type="passwordType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on">
					<template slot="prepend">
						<span class="icon icon-password"></span>
					</template>
				</el-input>
			</el-form-item>
			<div style="margin-top: 40px">
				<el-button type="primary"  style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">登陆</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>

export default {
	name: 'login',
	data() {
		return {
			loginForm: {
				username: '',
				password: ''
			},
			loginRules: {
				username: [{ required: true, trigger: 'blur', message: 'login.usernameVal' }],
				password: [{ required: true, trigger: 'blur', message: 'login.passwordVal' }]
			},
			passwordType: 'password',
			loading: false,
			showDialog: false
		}
	},
	methods: {
		handleLogin() {
			this.$refs.loginForm.validate(valid => {
				if (valid) {
					this.loading = true
					this.$store.dispatch('LoginByUsername', this.loginForm).then(data => {
						this.loading = false;
						if (data) {
							this.$router.push({ path: '/' })
						}
					}).catch(() => {
						this.loading = false
					})
				} else {
					return false
				}
			})
		}
	}
}
</script>

<style rel="stylesheet/scss" lang="scss">
.login-container {
	position: fixed;
	height: 100%;
	width: 100%;
	background-color: #2d3a4b;
	.login-form {
		position: absolute;
		left: 0;
		right: 0;
		width: 360px;
		padding: 35px 35px 15px 35px;
		margin: 120px auto;
	}
	.title-container {
		position: relative;
		.title {
			font-size: 26px;
			color: #eee;
			margin: 0 auto 40px auto;
			text-align: center;
			font-weight: bold;
		}
	}
	.el-form-item {
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		color: #454545;
	}
	.el-input {
		.el-input-group__prepend{
			background-color: rgba(0,0,0,0.1);
			border:0;
			padding-left: 12px;
			padding-right: 12px;
		}
		input {
			background-color: transparent!important;
			border: 0;
			-webkit-appearance: none;
			padding: 12px 10px;
			color: #eee;
			font-size: 16px;
			height: 47px;
			border-radius: 0;
			&:-webkit-autofill {
				box-shadow: 0 0 0 1000px #2d3a4b inset !important;
				-webkit-text-fill-color: #fff !important;
			}
		}
	}
	.icon{
		$color:#778993;
		display: block;
		margin: 0 auto;
		width: 24px;
		height: 24px;
		position: relative;
		&.icon-username{
			&::before,&::after{
				content: '';
				display: block;
				margin: 0 auto;
				border:2px solid $color;
				border-radius: 100%;
			}
			&::before{
				width: 10px;
				height: 10px;
			}
			&::after{
				width: 16px;
				height: 16px;
				margin-top: -1px;
				border-color: $color $color transparent transparent;
				transform: rotate(-45deg);
			}
		}
		&.icon-password{
			&::before,&::after{
				content: '';
				display: block;
				margin: 0 auto;
			}
			&::before{
				width: 10px;
				height: 8px;
				border:2px solid $color;
				border-top-left-radius: 50%;
				border-top-right-radius: 50%;
			}
			&::after{
				margin-top: -2px;
				width: 16px;
				height: 10px;
				border: 2px solid $color;
				border-radius: 3px;
			}
		}
	}
}
</style>
