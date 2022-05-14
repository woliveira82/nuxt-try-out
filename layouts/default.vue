<template>
  <div>
    <b-nav>
      <b-nav-item><NuxtLink :to="{ name: 'index' }">News</NuxtLink></b-nav-item>
      <b-nav-item><NuxtLink to="/character">Character</NuxtLink></b-nav-item>
      <b-nav-item><NuxtLink to="/city">City</NuxtLink></b-nav-item>
    </b-nav>
    <Nuxt />
  </div>
</template>

<script>
    export default {
        name: ''
    }
</script>