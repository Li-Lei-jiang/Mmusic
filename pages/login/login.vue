<template>
	<view id="login">
		这是登录页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		created() {
			this.goLogin()
		},
		methods:{
			goLogin(){
				this.$apiReq.req({
					url: "/login",
					method: "post",
					data:{
						email:'wl948704474@163.com',
						password:'lilei930309'
					},
					success: (res=>{
					   console.log(res)
						 uni.setStorageSync('adminToken', res.token);
						  console.log('登录完成')
					})
				})
				
			},
		},
		mounted() {
			
		},
	}
</script>

<style lang="scss">

</style>
