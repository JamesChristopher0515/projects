<script lang="ts" setup>
import { useStore } from '~/store';

let { slideAnimation, toggleSidebar } = useStore()

</script>
<template>
    <header class="mb-3">
        <Dark />
        <a href="#" class="burger-btn" @click="toggleSidebar">
            <i class="bi bi-justify fs-3"></i>
        </a>
        <a href="#" class="burger-btn d-block d-xl-none" @click="toggleSidebar">
            <i class="bi bi-justify fs-3"></i>
        </a>
    </header>      
</template>
