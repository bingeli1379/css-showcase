<template>
  <a v-if="show" class="block bg-white py-2" href="#" @click.prevent="back">
    back
  </a>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    show () {
      return this.$route.name !== 'Home'
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
