<template>
    <div class="flex w-1/3 select-none hover:border-getir hover:border-2 justify-between items-center h-[50px] rounded bg-white cursor-pointer px-2" @click="isOpen = !isOpen">
      <div class="flex-none flex justify-start items-center">
        <client-only><country-flag country="tr" size="normal"/></client-only>
      </div>
      <div class="text-black/80 flex-grow">+90</div>
      <div class="flex-none"><client-only><v-icon :name="iconName" class="text-getir"/></client-only></div>
    </div>
</template>

<script>
export default {
  name: "SelectCountry",
  data() {
    return {
      countries: [
        {code: 'tr', name: '+90'},
        {code: 'us', name: '+1'}
      ],
      value: {},
      isOpen: false,
      iconName: 'angle-down'
    }
  },
  created() {
    this.value = this.countries[0]
  },
  watch: {
    isOpen(val) {
      if (val) {
        this.iconName = 'angle-up'
      } else {
        this.iconName = 'angle-down'
      }
    }
  }
}
</script>

<style scoped>

</style>
