<script>
import axios from "axios";
import { store } from "../data/store";
import ProjectCard from "../components/projects/ProjectCard.vue";

export default {
  data() {
    return {
      project: null,
    };
  },

  components: { ProjectCard },

  created() {
    axios
      .get(store.api.baseUrl + "projects/" + this.$route.params.slug)
      .then((response) => {
        this.project = response.data;
      });
  },
};
</script>

<template>
  <ProjectCard :project="project" v-if="project" :isDetail="true" />
</template>

<style lang="scss" scoped></style>
