import { createWebHistory, createRouter } from "vue-router";
import ProjectPage from "@/views/ProjectPage.vue"
import SkillsPage from "@/views/SkillsPage.vue"
import IndexPage from "@/views/IndexPage.vue"
import CourierPage from "@/views/CourierPage.vue"

const routes = [
    {
      path: "/",
      name: "Index",
      component: IndexPage,
    },
    {
      path: "/skills",
      name: "Skills",
      component: SkillsPage,
    },
    {
      path: "/courier",
      name: "Courier",
      component: CourierPage,
    },
    {
      path: "/project",
      name: "Project",
      component: ProjectPage,
    },
  ];

const router = createRouter({
    history: createWebHistory("/jjg_vue/"),
    routes,
  });
  
  export default router;