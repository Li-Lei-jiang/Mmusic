<template>
	<view>
		<view class="Sonalb-title">
			<view class="titLeft">
				<view class="titLeft_text" @click="thactive" :class="falg ===false?'active':''">新歌</view> | <view class="titLeft_text" @click="thactives" :class="falg ===true?'active':''">新碟</view>
			</view>
			<view class="titRig">
				<text class="titRig_text" v-if="falg===false">更多新歌</text>
				<text class="titRig_text" v-else>更多新碟</text>
			</view>
		</view>
		<view class="Sonalb-main">
				<view class="Sonmain" v-show="falg === false">
					<scroll-view scroll-x="true" class="barScroll" show-scrollbar="false" scroll-with-animation="true">
						<block v-for="(item,index) in Sonlist" :key="index">
							<view class="popItem">
								<image :src="item.album.picUrl" mode="" class="popimg"></image>
								<view class="pottex">{{item.name}}</view>
							</view>
						</block>				
					</scroll-view>
				</view>
				<view class="Albmain" v-show="falg === true">
						<view class="Album_box">
								<view class="album-item" v-for="(item,index) in Album" :key="index">
										<image :src="item.picUrl" mode="" class="album_img"></image>
										<view class="albun_text">{{item.name}}</view>
								</view>
						</view>
				</view>
				
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				falg: false,
				Sonlist:[],
				Album:[],
			};
		},
		created() {
			this.getSonlist()
		},
		methods: {
			thactive() {//新歌
				// this.falg = !this.falg;
				this.falg =false ;
				// console.log(11)
			},
			thactives(){//切换到新碟
				this.falg =true ;
			},
			getSonlist(){//获取新歌列表
				this.$apiReq.req({
					url:'/top/song?type=0',
					method:'get',
					success:(res=>{
						this.Sonlist = res.data.slice(0,20)
						// console.log(this.Sonlist)
						this.getAlblist()
					})
				})
			},
			getAlblist(){//获取新碟列表
				this.$apiReq.req({
					url:'/top/album?offset=0&limit=20',
					method:'get',
					success:(res=>{
						this.Album = res.albums.slice(0,6);
						console.log(this.Album)
					})
				})
			},
		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	.Sonalb-title {
		margin: 0;
		padding: 0;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: space-between;

		.titLeft {
			display: flex;

			.titLeft_text {
				width: 100rpx;
				text-align: center;
				color: #666666;
			}

		}

		.titRig {
			margin-right: 3%;

			.titRig_text {
				display: inline-block;
				font-size: 10px;
				border-radius: 10px;
				width: 66px;
				border: 0.5px solid #DDDDDD;
				text-align: center;
				line-height: 20px;
				color: #666666;
			}
		}

		.active {
			font-size: 34rpx;
			color: #000000 !important;
			font-weight: 500;
		}
	}
	.Sonalb-main{
		.Sonmain{
			// height: 600rpx;
			.barScroll{
				white-space: nowrap;
				// white-space: pre-wrap;
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
		.Albmain{
			.Album_box{
				.album-item{
					display: inline-block;
					    margin-left: 2%;
					.album_img{
						width: 228rpx;
						height: 228rpx;
						border-radius:16rpx;
					}
					.albun_text{
						width: 200rpx;
						height: 50rpx;
						line-height: 50rpx;
						text-align: center;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
				}
			}
		}
	}
</style>
