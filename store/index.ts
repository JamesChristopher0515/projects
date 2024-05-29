import sideBarItems from './data/sidebarItems';
import {defineStore} from 'pinia'
import {reactive, ref} from "vue";

export const useStore = defineStore('main', () => {
  const sidebarItems = reactive(sideBarItems)
  const isSidebarActive = ref(true)
  const isSlide = ref(false)
  const isDark = ref(true)
  const slideAnimation = () => isSlide.value = !isSlide.value
  const toggleSidebar = () => isSidebarActive.value = !isSidebarActive.value
  const closeSidebar = () => isSidebarActive.value = false
  const openSidebar = () => isSidebarActive.value = true
  const toggleDark = () => isDark.value = !isDark.value

  return {
    sidebarItems,
    isSidebarActive,
    isSlide,
    isDark,
    toggleDark,
    slideAnimation,
    toggleSidebar,
    closeSidebar,
    openSidebar
  }
})
