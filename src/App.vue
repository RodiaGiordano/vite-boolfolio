<script>
import ProjectList from "./components/projects/ProjectList.vue";
import ProjectCard from "./components/projects/ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      projects: [],

      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
      },
    };
  },

  components: { ProjectList, ProjectCard },

  methods: {
    fetchProjects(uri = this.api.baseUrl + "projects") {
      axios.get(this.api.baseUrl + "projects").then((response) => {
        this.projects = response.data.data;
        console.log(this.projects);
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <ProjectList :projects="projects" />
</template>

<style lang="scss"></style>
