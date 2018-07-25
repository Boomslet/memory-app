<template>
  <div class="container">
    <div class="info-bar">
      <h2>LEVEL: {{ level }}</h2>
      <button class="btn btn-primary" @click="navigateTo('menu')">BACK</button>
      <button class="btn btn-primary" @click="generateSequence">GEN</button>
      <button class="btn btn-primary" @click="playSequence">PLAY</button>
    </div>
    <div class="screen">
      <div class="box card" @click="userSelect(i)" v-for="(n, i) in 16" :key="n" :ref="i"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sequence: [],
      currentUserIndex: 0,
      level: 1
    };
  },
  methods: {
    navigateTo(uri) {
      this.$router.push({ name: uri });
    },
    generateSequence() {
      this.sequence = [];

      for (let i = 0; i < 5; i++) {
        this.sequence.push(Math.floor(Math.random() * 15) + 1);
      }
    },
    playSequence() {
      let i = 1;

      this.sequence.forEach(index => {
        let box = this.$refs[index][0];
        setTimeout(() => {
          box.style.backgroundColor = "white";
        }, 500 * i++);
        setTimeout(() => {
          box.style = null;
        }, 500 * i - 50);
      });
    },
    userSelect(index) {
      if (index === this.sequence[this.currentUserIndex]) {
        this.currentUserIndex++;

        if (this.currentUserIndex === 5) {
          this.level++;
          this.currentUserIndex = 0;
          this.generateSequence();
          this.playSequence();
        }
      } else {
        alert("RIP");
        return;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  background-color: #8a2be2;
  height: 75px;
  margin: 5px;
  width: 75px;
}

.box-selected {
  background-color: white;
  height: 75px;
  margin: 5px;
  width: 75px;
}

.box:hover {
  background-color: #007bff;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

h2 {
  color: white;
}

.info-bar {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 64px;
  justify-content: space-between;
  width: 100%;
}

.screen {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 400px;
  margin: auto;
  width: 400px;
}
</style>



