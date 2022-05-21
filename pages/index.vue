<template>
  <div>
      <div>
        <h2><NuxtLink :to="{ name: 'news' }">Login page</NuxtLink></h2>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'clean',
  head() {
    return {
      title: 'Try-out | Login'
    }
  }
}
</script>
