<template>
	<view class="banner">
		<swiper :indicator-dots="indicatorDots" class="bannerBox"
		:autoplay="autoplay" :interval="interval" :duration="duration"
		 :indicator-color="indicatorColor" :indicator-active-color="indicatorActiveColor">
			<swiper-item v-for="(item,index) in banner" :key="index">
				<view class="banbg">
					<image :src="item.pic" mode="" class="banimg"></image>
					<text class="bantex" :style="{'backgroundColor':item.titleColor}">{{item.typeTitle}}</text>
				</view>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner: [],
				indicatorDots: true, //是否显示面板指示点
				autoplay: true, //是否自动播放
				interval: 5000, //自动切换时间间隔
				duration: 500, //滑动动画时长
				indicatorColor: 'rgba(0, 0, 0, .3)',
				indicatorActiveColor: '#FF2F23',//指针颜色
				backgroundColor:''
			}
		},
		methods: {
			getBanler() {
				this.$apiReq.req({
					url: "/banner?type=2",
					method: "get",
					success: (res => {
						this.banner = res.banners;
						this.backgroundColor = res.titleColor;
						console.log(this.banner)
						// console.log(this.backgroundColor)
					})

				})
			}
		},
		mounted() {
			this.getBanler()
		}
	}
</script>

<style lang="scss">
	.html{
		font-size: 15px;
	}
.banner{
	margin: 0;
	padding: 0;
	
	.bannerBox{
		height: 400rpx;
		margin: 0 ;
		padding: 0;
		.banbg{
			width: 94%;
			height: 340rpx;
			margin: 0 auto;
			position: relative;
			border-radius: 20rpx;
			.banimg{
				height: 100%;
				width: 100%;
				border-radius: 20rpx;
			}
			.bantex{
				position: absolute;
				right: 0;
				bottom: 0;
				display: inline-block;
				// background: #40A6F1;
				color: white;
				width: 100rpx;
				text-align: center;
				// padding-left: 12rpx;
				// border-radius: 8rpx;
				border-top-left-radius:20rpx;
				border-bottom-right-radius: 20rpx;
			}
		}
	}
}
</style>
