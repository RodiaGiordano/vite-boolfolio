<script>
import axios from "axios";
import { store } from "../../data/store";
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      projects: [],
      pagination: { links: null },
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    projectType(url = store.api.baseUrl + "projects-by-type/" + this.type_id) {
      axios.get(url).then((response) => {
        this.projects = response.data.data;
        this.pagination.links = response.data.links;
      });
    },
  },

  created() {
    this.projectType();
  },

  props: { type_id: Number },
};
</script>

<template>
  <ProjectCard
    v-for="project in projects"
    :project="project"
    :isDetail="false"
  />
</template>

<style lang="scss" scoped></style>
