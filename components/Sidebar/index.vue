<template>
    <div class="sidebar d-flex flex-column justify-content-between align-items-center">
        <div class="mb-4">
            This is Sidebar
        </div>
        <div>
            <ChatPopUp />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
    max-height: calc(100vh - 48px);
    height: calc(100vh - 48px);
}
</style>