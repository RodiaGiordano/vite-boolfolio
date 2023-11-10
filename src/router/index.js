import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProjectPage from "../pages/ProjectPage.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";
import BlogTypePage from "../pages/BlogTypePage.vue";

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
    {
      name: "blog-type",
      path: "/blog/type/:type_id",
      component: BlogTypePage,
    },
  ],
});

export { router };
