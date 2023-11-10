<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {};
  },
  props: { project: Object, isDetail: Boolean },
  components: { RouterLink },
};
</script>

<template>
  <div class="col">
    <div class="card h-100 g-3 p-2">
      <h2>{{ project.title }}</h2>
      <hr />
      <div class="card-body text-center">
        <p class="fs-5">{{ project.description }}</p>

        <p
          class="fs-5 text-light rounded-2"
          :style="{
            backgroundColor: project.type.color,
          }"
          v-if="project.type"
        >
          {{ project.type.label }}
        </p>

        <p
          class="fs-5 text-light rounded-2"
          :style="{
            backgroundColor: technology.color,
          }"
          v-for="technology in project.technologies"
        >
          {{ technology.name }}
        </p>
      </div>
      <router-link
        v-if="!isDetail"
        class="btn btn-primary w-25 align-self-center"
        :to="{ name: 'project-detail', params: { slug: project.slug } }"
        >Vedi</router-link
      >
    </div>
  </div>
</template>

<style lang="scss"></style>
