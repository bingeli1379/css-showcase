<template>
  <transition name="swipe">
    <a
      v-if="show"
      class="block absolute top-0 right-0 left-0 bg-white text-center py-2"
      href="#"
      @click.prevent="back"
    >
      back / 回去 / 回上一頁 / 給我回去上一頁拉！
    </a>
  </transition>
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
