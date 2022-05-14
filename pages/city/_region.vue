<template>
  <div>
    <b-nav pills>
      <b-nav-item><NuxtLink :to="{ name: 'index' }">News</NuxtLink></b-nav-item>
      <b-nav-item><NuxtLink to="/character">Character</NuxtLink></b-nav-item>
      <b-nav-item><NuxtLink to="/city">City</NuxtLink></b-nav-item>
    </b-nav>
    <div>
      <h2>Region {{ $route.params.region }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Region'
}
</script>
