<template>
	<view>
		<view class="banner">
			<swiper :indicator-dots="indicatorDots" class="bannerBox" :autoplay="autoplay" :interval="interval" :duration="duration"
			 :indicator-color="indicatorColor" :indicator-active-color="indicatorActiveColor">
				<swiper-item v-for="(item,index) in banner" :key="index">
					<view class="banbg">
						<image :src="item.pic" mode="" class="banimg"></image>
						<text class="bantex" :style="{'backgroundColor':item.titleColor}">{{item.typeTitle}}</text>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="bar">
			<scroll-view scroll-x="true" class="barScroll" show-scrollbar="false" scroll-with-animation="true">
				<block v-for="item in navigation">
					<view class="barItem">
						<text>{{item}}</text>
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
				banner: [],
				indicatorDots: true, //是否显示面板指示点
				autoplay: true, //是否自动播放
				interval: 5000, //自动切换时间间隔
				duration: 500, //滑动动画时长
				indicatorColor: 'rgba(0, 0, 0, .3)',
				indicatorActiveColor: '#FF2F23', //指针颜色
				navigation: ['每日推荐', '歌单', '排行榜', '电台', '直播', '火前留名', '数字专辑', '唱聊', '线上演出'],
			}
		},
		methods: {
			getBanler() { //获取轮播图
				this.$apiReq.req({
					url: "/banner?type=2",
					method: "get",
					success: (res => {
						this.banner = res.banners;
						this.backgroundColor = res.titleColor;
						// console.log(this.banner)
					})

				})
			},
			barLeft() {},
			barRig() {},
		},
		mounted() {
			this.getBanler()
		}
	}
</script>

<style lang="scss">
	.html {
		font-size: 15px;
	}

	.banner {
		margin: 0;
		padding: 0;

		.bannerBox {
			height: 400rpx;
			margin: 0;
			padding: 0;

			.banbg {
				width: 94%;
				height: 340rpx;
				margin: 0 auto;
				position: relative;
				border-radius: 20rpx;

				.banimg {
					height: 100%;
					width: 100%;
					border-radius: 20rpx;
				}

				.bantex {
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
					border-top-left-radius: 20rpx;
					border-bottom-right-radius: 20rpx;
				}
			}
		}


	}

	.bar {
		margin-top: 50rpx;

		.barScroll {
			white-space: nowrap; //强制一行				

			.barItem {
				display: inline-block;
				width: 150rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				color: #666668 !important;
			}
		}
	}
</style>
