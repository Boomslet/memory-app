<template>
  <div id="app">
    <router-view/>
    <form class="form-group">
      <h2>MEMORY</h2>
      <button class="btn btn-primary" @click.prevent="navigateTo('play')">START GAME</button>
      <button class="btn btn-primary" @click.prevent="navigateTo('options')">OPTIONS</button>
      <button class="btn btn-primary" @click.prevent="closeApp">EXIT</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(uri) {
      this.$router.push({ name: uri });
    },
    closeApp() {
      const remote = require("electron").remote;
      let w = remote.getCurrentWindow();
      w.close();
    }
  }
};
</script>


<style lang="scss" scoped>
#app {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 90vh;
}

button {
  font-size: 20px;
  margin: 20px auto;
  width: 200px;
}

form {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

h2 {
  color: white;
  font-size: 50px;
  margin: 40px auto;
}
</style>
