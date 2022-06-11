<template>
  <div>
    <div id="top-menu">
      <b-nav>
        <b-nav-item><NuxtLink :to="{ name: 'news' }">News</NuxtLink></b-nav-item>
        <b-nav-item><NuxtLink to="/character">Character</NuxtLink></b-nav-item>
        <b-nav-item><NuxtLink to="/city">City</NuxtLink></b-nav-item>
        <b-nav-item><NuxtLink to="/">Logout</NuxtLink></b-nav-item>
      </b-nav>
    </div>
    <CharacterBar />
    <div id="main">
      <Nuxt />
    </div>
  </div>
</template>

<script>
  export default {
    middleware: 'auth'
  }
</script>

<style>
  #top-menu, #main {
    padding: 0.4rem;
  }
</style>