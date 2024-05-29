<script setup>
	const props = defineProps({
		title: {
			type: String,
			default: "No title"
		},
		value: {
			type: String,
			default: "0",
		},
		icon: {
			text: String,
			default: "iconly-boldProfile",
		},
		color: {
			type: String,
			default: "stats-icon purple"
		},
		iconType: {
			type: String,
			default: "icon"
		}
	});

	const prefixIconClass = "stats-icon ";
	const prefixIconPath = "_nuxt/assets/images/";

</script>

<template>
	<div class="card ">
		<img src="@/assets/images/union.svg" class="card-img" alt="...">
		<div class="card-body">
			<div class="d-flex justify-content-between align-items-center">
				<h6 class="text-muted font-semibold">{{ props.title }}</h6>
				<div :class="prefixIconClass + props.color">
					<img :src="prefixIconPath + icon" v-if="props.iconType=='svg'">
					<i :class="props.icon" v-if="props.iconType=='icon'"></i>
				</div>
			</div>
			<h6 class="quantity font-extrabold">{{ props.value }}</h6>
		</div>
	</div>
</template>

<style scoped>
	.card {
		padding: 0rem;
		height: 100% !important;
	}

	.card-img {
		position: absolute !important;
		width: 156px !important;
		right: 0 !important;
		bottom: 0 !important;

		border-bottom-right-radius: calc(.25rem - 1px) !important;
		border-bottom-left-radius: calc(.25rem - 1px) !important;
	}

	.cards-icon {
		position: relative;
		z-index: 1;
		top: 50%;
		left: 50%;

	}

	.quantity {
		font-size: 24px;
		font-weight: 600;
	}
</style>