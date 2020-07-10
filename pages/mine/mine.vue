<template>
	<view>
		<view class="tip">
			你没有登录
			<button type="default" @click="gologion">点我去登录页登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		
		methods: {
			gologion(){
				uni.redirectTo({
					url:'../login/login',
					success:(res=>{
						console.log(res)
					}),
					complete:(a=>{
						console.log(a)
					})
				})
			},
		}
	}
</script>

<style>

</style>
