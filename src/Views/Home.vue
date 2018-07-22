<template>
  <div>
    <p>Hello, this is home</p>
    <button class="btn btn-primary" @click.prevent="navigateTo('menu')">BACK</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(uri) {
      this.$router.push({ name: uri });
    }
  }
};
</script>

<style scoped>
</style>


