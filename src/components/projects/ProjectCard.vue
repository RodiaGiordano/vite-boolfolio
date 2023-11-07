<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },
  props: { project: Object },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="card h-100 m-2">
    <div class="card-body">
      {{ project.title }}
      <hr />
      {{ project.description }}
      <hr />
      {{ project.slug }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
