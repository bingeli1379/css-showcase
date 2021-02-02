<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="flex-grow h-0">
      <router-view />
    </div>
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
