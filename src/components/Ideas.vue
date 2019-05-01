<template>
  <div>
    <h1>Ideas</h1>
    <div>
      <draggable class="ideas" v-model="allIdeas" group="ideas">
        <Idea v-for="idea in allIdeas" :key="idea.id" :item="idea" />
      </draggable>
    </div>
    <div>
      <h3>Courses</h3>
      <draggable v-model="courses" group="ideas">
        <Idea v-for="course in courses" :key="course.id" :item="course" />
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Idea from "@/components/Idea";
export default {
  components: {
    draggable,
    Idea
  },
  computed: {
    allIdeas: {
      get() {
        return this.$store.getters.allIdeas;
      },
      set(value) {
        this.$store.dispatch("saveIdeasOrdering", value);
      }
    },
    courses: {
      get() {
        return this.$store.getters.courses;
      },
      set(value) {
        this.$store.dispatch("saveCoursesOrdering", value);
      }
    }
  }
};
</script>

<style scoped>
.ideas {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  height: 30vh;
}
</style>
