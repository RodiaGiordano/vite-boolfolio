<script>
import axios from "axios";
import { store } from "../../data/store";
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      projects: [],
      pagination: {
        links: [],
      },
    };
  },
  components: { ProjectCard },
  methods: {
    fetchProjects(uri) {
      if (!uri) {
        uri = store.api.baseUrl + "projects";
      }
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
        this.pagination = response.data.links;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container">
    <h1>Project List</h1>
    <nav
      class="mt-5 d-flex justify-content-start align-items-start"
      aria-label="Page navigation example"
    >
      <ul class="pagination">
        <li
          v-for="link in pagination"
          @click="fetchProjects(link.url)"
          class="page-item"
        >
          <a class="page-link" href="#" v-html="link.label"></a>
        </li>
      </ul>
    </nav>

    <div class="row row-cols-3 g-4">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<style lang="scss"></style>
