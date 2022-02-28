<template>
  <div class="loading"></div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.loading {
  width: 60px;
  height: 60px;
  border: 3px solid @yellow;
  border-radius: 50%;
  border-top-color: yellow;
  animation: spin 1s linear infinite;
  margin: auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>