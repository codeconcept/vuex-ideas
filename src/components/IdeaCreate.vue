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
      console.log(this.title);
      this.title = "";
    }
  }
};
</script>

<style lang="scss" scoped></style>
