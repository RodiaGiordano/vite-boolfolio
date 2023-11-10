import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProjectPage from "../pages/ProjectPage.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { name: "homepage", path: "/", component: HomePage },
    { name: "project", path: "/project", component: ProjectPage },
    {
      name: "project-detail",
      path: "/project/:slug",
      component: ProjectDetail,
    },
  ],
});

export { router };
