<template>
	<view class="serall">
		<view class="serleft">
			左边
		</view>
		<view class="sercent">中间</view>
		<view class="serrig">右边</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.serall{
	display: flex;
	justify-content:space-between;
}
</style>
