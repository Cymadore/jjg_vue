import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
      path: "/",
      name: "Post List",
      component: Main,
    },
    {
      path: "/:title",
      name: "PostDetail",
      component: PostDetail,
    },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;