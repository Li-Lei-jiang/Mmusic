<template>
	<view>
		aa
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
					    // console.log(res)
						 uni.setStorageSync('adminToken', res.token);
					})
				})
				
			},
		},
		mounted() {
			this.goLogin()
		},
	}
</script>

<style lang="scss">

</style>
