<template>
  <div class="overflow-hidden">
    <Header />
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'Layout',
  components: {
    Header
  }
}
</script>
