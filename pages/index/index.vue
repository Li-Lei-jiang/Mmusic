<template>
	<view class="Home">
		<topSearch></topSearch>
		<banner></banner>
	</view>
</template>

<script>
	import topSearch from '../../components/topSearch/topSearch.vue'
	import banner from '../../components/banner/banner.vue'
	export default {
		data() {
			return {}
		},
		components:{
			topSearch,banner
		},

	}
</script>

<style>
	
</style>
