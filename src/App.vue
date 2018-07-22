<template>
  <div id="app">
    <form class="form-group">
      <h2>MEMORY</h2>
      <button class="btn btn-primary">START GAME</button>
      <button class="btn btn-primary">OPTIONS</button>
      <button class="btn btn-secondary">EXIT</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
#app {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100vh;
}

button {
  margin: 20px auto;
  width: 150px;
}

form {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}

h2 {
  color: white;
  font-size: 50px;
  margin: 40px auto;
}
</style>
