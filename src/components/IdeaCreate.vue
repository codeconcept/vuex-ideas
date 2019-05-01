<template>
  <div>
    <form @submit.prevent="create">
      <label for="idea-title"></label>
      <input
        type="text"
        id="idea-title"
        placeholder="idea title"
        v-model="title"
      />
      <button type="submit">create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    create() {
      const idea = {
        createdAt: new Date(),
        title: this.title
      };
      this.$store.dispatch("createIdea", idea);
      this.title = "";
    }
  }
};
</script>

<style lang="scss" scoped></style>
