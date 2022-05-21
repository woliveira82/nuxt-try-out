<template>
  <div>
    <div>
      <h2>Region {{ $route.params.region }}</h2>
    </div>
    <div>
      <ul>
        <li v-for="values, key in $route.params.v">
          <b>{{ key }}:</b> {{ values }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Try-out | Regions'
    }
  }
}
</script>
