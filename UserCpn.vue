<script setup>
import {
    ref,
    watchEffect
} from 'vue'

const props = defineProps(['userData'])

const avatar = ref()

watchEffect(async () => {
    avatar.value = (await import( /* @vite-ignore */ `../../assets/img/dashboard/${props.userData.photo}`)).default
})
</script>

<template>
<div class="w-full flex flex-row items-center border-2 active:border-[--main-btn-color] rounded-3xl p-2 mt-2 bg-white drop-shadow-lg cursor-pointer">
    <img v-if="userData.online" :src="avatar" class="w-12 rounded-full">
        <UserFilled v-if="!userData.online" class="w-10 overflow-hidden border border-gray-600 rounded-full border-1"/>
    <div class="p-1 text-sm">
        <span>
            {{userData.name}}
        </span>
        <p class="w-24 overflow-hidden text-ellipsis whitespace-nowrap">{{userData.text}}</p>
    </div>
</div>
</template>
