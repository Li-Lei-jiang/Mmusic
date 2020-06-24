<template>
	<view>
		<view class="poptitle">
			<view class="potleft">懂你的精选歌单</view>
			<view class="potrig">查看更多</view>
		</view>
		<view class="popbox">
				<scroll-view scroll-x="true" class="barScroll" show-scrollbar="false" scroll-with-animation="true">
					<block v-for="(item,index) in popularitySong" :key="index">
						<view class="popItem">
							<image :src="item.picUrl" mode="" class="popimg"></image>
							<view class="pottex">{{item.name}}</view>
						</view>
					</block>				
				</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				popularitySong: [], //人气歌单列表
			}
		},
		methods: {
			getSongList() {
				this.$apiReq.req({
					url: '/personalized?limit=15',
					method: 'get',
					success: (res => {
						this.popularitySong = res.result;
						console.log(this.popularitySong)
					})
				})
			},
		},
		mounted() {
			this.getSongList()
		}
	}
</script>

<style lang="scss">
	.poptitle {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;

		.potleft {
			font-size: 30rpx;
			font-weight: bold;
			padding-left: 2%;
		}

		.potrig {
			font-size: 20rpx;
			border-radius: 20rpx;
			width: 132rpx;
			border: 1rpx solid #DDDDDD;
			text-align: center;
			line-height: 40rpx;
			margin-right: 3%;
		}
	}
	.popbox{
		.barScroll{
			white-space: nowrap;
			// display: flex;
			.popItem{
				display: inline-block;
				    margin-left: 2%;
				.popimg{
					width: 200rpx;
					height: 200rpx;
					border-radius:16rpx;
				}
				.pottex{
					width: 200rpx;
					height: 50rpx;
					line-height: 50rpx;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					
				}
			}
		}
	}
	
</style>
