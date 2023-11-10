<script>
import axios from "axios";
import { store } from "../data/store";
import ProjectTypeList from "../components/projects/ProjectTypeList.vue";

export default {
  data() {
    return {
      type: null,
    };
  },

  components: {
    ProjectTypeList,
  },

  created() {
    axios
      .get(store.api.baseUrl + "types/" + this.$route.params.type_id)
      .then((response) => {
        this.type = response.data;
      });
  },
};
</script>

<template>
  <ProjectTypeList :type_id="type.id" v-if="type" />
</template>

<style lang="scss" scoped></style>
