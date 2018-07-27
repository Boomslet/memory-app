<template>
  <div class="container">
    <div class="info-bar">
      <h2>LEVEL {{ level }}</h2>
      <div class="spaced-div">
        <button class="button btn btn-primary" :disabled="gameInProgress" @click="beginGame">PLAY</button>
        <button class="button btn btn-primary" @click="navigateTo('menu')">BACK</button>
      </div>
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
      count: 0,
      currentUserIndex: 0,
      gameInProgress: false,
      level: 1,
      sequence: []
    };
  },
  methods: {
    navigateTo(uri) {
      this.$router.push({ name: uri });
    },
    beginGame() {
      this.generateSequence();
      this.playSequence();
    },
    generateSequence() {
      this.sequence = [];

      for (let i = 0; i < this.level + 4; i++) {
        this.sequence.push(Math.floor(Math.random() * 15) + 1);
      }
    },
    playSequence() {
      this.gameInProgress = true;

      let i = 1;

      this.sequence.forEach(index => {
        let box = this.$refs[index][0];
        setTimeout(() => {
          box.style.backgroundColor = "gold";
        }, 500 * i++);
        setTimeout(() => {
          box.style = null;
        }, 500 * i - 50);
      });
    },
    userSelect(index) {
      if (index === this.sequence[this.currentUserIndex]) {
        this.count++;

        this.$refs[index][0].style =
          "background-color: chartreuse; transition all 0.2s ease-out;";
        setTimeout(() => {
          this.$refs[index][0].style = null;
        }, 200);

        if (++this.currentUserIndex === this.level + 4) {
          this.level++;
          this.currentUserIndex = 0;
          this.generateSequence();
          this.playSequence();
        }
      } else {
        this.gameInProgress = false;

        this.$refs[index][0].style =
          "background-color: crimson; transition all 0.2s ease-out;";
        setTimeout(() => {
          this.$refs[index][0].style = null;
        }, 200);

        alert(`You reach Level ${this.level} - matching ${this.count} tiles!`);
        this.count = 0;
        this.currentUserIndex = 0;
        this.level = 1;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  background-color: #8a2be2;
  height: 85px;
  margin: 5px;
  width: 85px;
  transition: all 0.2s ease-out;
}

.box:hover {
  background-color: #007bff;
}

button {
  font-size: 15px;
  margin: 20px;
  width: 75px;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

h2 {
  color: white;
  font-size: 25px;
}

.info-bar {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 64px;
  justify-content: space-between;
  margin-bottom: 32px;
  width: 100%;
}

.screen {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 480px;
  margin: auto;
  width: 470px;
}

.spaced-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>



