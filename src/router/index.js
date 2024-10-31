import { createWebHistory, createRouter } from "vue-router";
// import ProjectPage from "@/views/ProjectPage.vue"
// import SkillsPage from "@/views/SkillsPage.vue"
import IndexPage from "@/views/IndexPage.vue"
import ProjectDetail from "@/views/ProjectDetail.vue";
// import CourierPage from "@/views/CareerPage.vue"

const routes = [
    {
      path: "/",
      name: "Index",
      component: IndexPage,
      meta: {
        title:"장재근 - 웹 프론트엔드 개발자 포트폴리오",
      }
    },
    {
      path: "/project/:id",
      name: "project",
      component: ProjectDetail,
    },
    // {
    //   path: "/skills",
    //   name: "Skills",
    //   component: SkillsPage,
    // },
    // {
    //   path: "/courier",
    //   name: "Courier",
    //   component: CourierPage,
    // },
    // {
    //   path: "/project",
    //   name: "Project",
    //   component: ProjectPage,
    // },
  ];

const router = createRouter({
    history: createWebHistory("/jjg_vue/"),
    routes,
  });
router.afterEach((to) => {
  const title = to.meta.title||'장재근 - 웹 프론트엔드 개발자 포트폴리오';
  if(title)document.title = title;
})
  
  export default router;