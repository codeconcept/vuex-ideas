<template>
  <div class="idea">
    <h3>{{ item.title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.idea {
  width: 200px;
  height: 55px;
  border: 2px solid #666;
  padding-bottom: 5px;
  cursor: pointer;
}
</style>
