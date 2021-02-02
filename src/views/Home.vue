<template>
  <div class="min-h-screen container px-4 mx-auto">
    <h1 class="text-6xl font-bold text-white text-center py-20">
      CSS Showcase
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 text-center">
      <div v-for="data of datalist" :key="data.id">
        <router-link :to="{ name: data.linkName }" class="block text-xl bg-white text-black rounded-lg py-4">
          {{ data.text }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      datalist: [
        {
          linkName: 'Hollow',
          text: '疝氣a簍空字體'
        }
      ]
    }
  }
}
</script>
