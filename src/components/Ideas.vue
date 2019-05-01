<template>
  <div>
    <h1>Ideas</h1>
    <ul>
      <draggable>
        <li v-for="idea in allIdeas" :key="idea.id">{{ idea.title }}</li>
      </draggable>
    </ul>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  computed: {
    allIdeas() {
      return this.$store.getters.allIdeas;
    }
  }
};
</script>

<style lang="scss" scoped></style>
