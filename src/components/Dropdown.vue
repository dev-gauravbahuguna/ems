<template>
  <div class="relative"  @mouseenter="showDropdown" @mouseleave="hideDropdown">
    <div :class="{'hover:bg-green-100': showDropdown, 'bg-yellow-100': hideDropdown}" class="rounded-lg">
    <slot  name="trigger"></slot>
  </div>
    <div v-if="isVisible" class="absolute z-20 top-full right-10 h-[300px] overflow-y-auto  bg-white border border-gray-300 rounded-lg shadow-2xl" :style="{ width:'400px'}">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'Dropdown',
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    showDropdown() {
      this.isVisible = true
    },
    hideDropdown() {
      this.isVisible = false
    }
  }
}
</script>

<style scoped>
/* Optional styling */
</style>
