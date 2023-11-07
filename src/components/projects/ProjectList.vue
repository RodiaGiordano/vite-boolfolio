<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {};
  },

  props: { projects: Array },

  components: {
    ProjectCard,
  },
};
</script>

<template>
  <h1>ProjectsList</h1>
  <div class="container">
    <div class="row row-cols-3 g-4">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
