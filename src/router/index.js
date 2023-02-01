
import { createRouter, createWebHistory } from 'vue-router'
import user from '@/store/user'
import VueApexCharts from "vue3-apexcharts";



const routes = [
  {
    component: () => import("@/layouts/default/Default.vue"),
    path: "/",
    children: [
      {
        path: "/",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
      },
      {
        path: "/products",
        name: "produts",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "products" */ "@/components/productsSection.vue"
          ),
        meta: {
          guard: "auth",
        },
      },
      {
        path: "/products/:filter",
        name: "produts-det",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "products" */ "@/components/productsSection.vue"
          ),
        props: "true",
        meta: {
          guard: "auth",
        },
      },
     
      {
        path: "/product-details/:id",
        name: "produts-details",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "products" */ "@/views/productDetails.vue"
          ),
        meta: {
          guard: "auth",
        },
      },
      {
        path: "/cart",
        name: "cart",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "cart" */ "@/views/myCart.vue"),
        meta: {
          guard: "auth",
        },
      },
      {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/aboutUs.vue"),
      },
      
      {
        path: "/contact",
        name: "contact",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "contact" */ "@/views/contactUs.vue"),
      },
      {
        path: "/login",
        name: "login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "login" */ "@/views/login.vue"),
        meta: {
          guard: "public",
        },
      },
      {
        path: "/profile",
        name: "profile",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "profile" */ "@/views/profileView.vue"),
        meta: {
          guard: "auth",
        },
      },
      
    ],
    
  },
  {
    component: () => import("@/layouts/dashboard/Default.vue"),
    path: "/",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "profile" */ "@/views/Dashborad.vue"),
        meta: {
          guard: "admin",
        },
      },
      {
        path: "/product-form/:method",
        name: "produtForm",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "products" */ "@/views/ProductForm.vue"
          ),
        meta: {
          guard: "admin",
        },
      },
      {
        path: "/product-form/:method/:id",
        name: "produtFormWithId",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "products" */ "@/views/ProductForm.vue"
          ),
        meta: {
          guard: "admin",
        },
      },
      {
        path: "/user-form/:method",
        name: "userForm",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "products" */ "@/views/UserForm.vue"
          ),
        meta: {
          guard: "admin",
        },
      },
      {
        path: "/user-form/:method/:id",
        name: "userFormWithId",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "products" */ "@/views/UserForm.vue"
          ),
        meta: {
          guard: "admin",
        },
      },
      {
        path: "/dashcharts",
        name: "dashCharts",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "products" */ "@/views/dashCharts.vue"
          ),
        meta: {
          guard: "admin",
        },
      },

    ],

  },
  { path: '/:pathMatch(.*)*', name: 'not-found',
   component: () => import("@/views/notFound.vue") 
  },
  
  // {
        
  //   // catch all 404 - define at the very end
  //   path: "*",
  //   component: () => import("@/views/notFound.vue")
  //   }

];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(function(to, from, next){
  const store = user()
  if(to.meta.guard ==='admin' && !store.isAdmin){
    next('/')
  }
  else if(to.meta.guard==='public'&& store.isLoggedIn){
    next('/')
  } else if(to.meta.guard==='auth'&& !store.isLoggedIn){
    next('/login')
  }
  else
  next()
})

// ...

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router





