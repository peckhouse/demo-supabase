import { createRouter, createWebHistory } from 'vue-router'

import useAuthUser from '../composables/useAuthUser'

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../pages/Home.vue"),
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("../pages/Register.vue"),
  },
  {
  name: "EmailConfirmation",
  path: "/email-confirmation",
  component: () => import("../pages/EmailConfirmation.vue"),
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("../pages/Login.vue"),
  },
  {
    name: "ForgotPassword",
    path: "/forgotPassword",
    component: () => import("../pages/ForgotPassword.vue"),
  },
  {
    name: "Me",
    meta: {
      requiresAuth: true,
    },
    path: "/me",
    component: () => import("../pages/Me.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  // here we check it the user is logged in
  // if they aren't and the route requries auth we redirect to the login page
  const { isLoggedIn } = useAuthUser()
  if (!isLoggedIn() && to.meta.requiresAuth) {
    return { name: "Login" }
  }
})

export default router