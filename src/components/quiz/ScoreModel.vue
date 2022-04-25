<template>
  <div class="container">
    <div class="content">
      <p>Score</p>
      <p>{{ finalScore }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["score"],
  computed: {
    finalScore() {
      return this.score + "/5";
    },
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
}

.container .content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 4rem 5rem;
  border-radius: 10px;
}
.container .content p {
  font-size: 4rem;
  text-align: center;
}
</style>
