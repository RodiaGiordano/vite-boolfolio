<script>
export default {
  data() {
    return {};
  },
  props: { project: Object },
};
</script>

<template>
  <div class="col">
    <div class="card h-100 g-3 p-2">
      <h2>{{ project.title }}</h2>
      <hr />
      <div class="card-body">
        <p class="fs-5">{{ project.description }}</p>
      </div>
      <button class="btn btn-primary w-25">Vedi</button>
    </div>
  </div>
</template>

<style lang="scss"></style>
