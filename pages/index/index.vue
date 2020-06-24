<template>
	<view class="Home">
		<topSearch></topSearch>
		<banner></banner>
		<popularitySong></popularitySong>
		<foreignPopularChoice></foreignPopularChoice>
	</view>
</template>

<script>
	import topSearch from '../../components/topSearch/topSearch.vue'
	import banner from '../../components/banner/banner.vue'
	import popularitySong from '../../components/popularitySong/popularitySong.vue'
	import foreignPopularChoice from '../../components/foreignPopularChoice/foreignPopularChoice.vue'

	export default {
		data() {
			return {}
		},
		components: {
			topSearch,
			banner,
			popularitySong,
			foreignPopularChoice
		},

	}
</script>

<style>

</style>
