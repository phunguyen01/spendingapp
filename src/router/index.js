import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";
// Hàm "requireAuth"  check khi người dùng đăng nhập mới được vào router (auth guard)
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;

  if (!user) next({ name: "Login", params: {} });
  else next();
};
// **
const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      text: "Spending App",
      leading: true,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "Profile",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/logout.vue"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "Report",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/report.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "Budget",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "budget" */ "../views/budget.vue"),
  },
  {
    path: "/newtransation",
    name: "NewTransation",
    meta: {
      text: "New Transation",
      leading: false,
      isShowFooter: false,
    },
    component: () =>
      import(/* webpackChunkName: "transation" */ "../views/newtransation.vue"),
  },
  {
    path: "/tool",
    name: "Tool",
    meta: {
      text: "Tools",
      leading: false,
      isShowFooter: false,
    },
    component: () => import(/* webpackChunkName: "tool" */ "../views/tool.vue"),
  },
  {
    path: "/privacy",
    name: "Privacy",
    meta: {
      text: "Privacy",
      leading: false,
      isShowFooter: false,
    },
    component: () =>
      import(/* webpackChunkName: "privacy" */ "../views/privacy.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
