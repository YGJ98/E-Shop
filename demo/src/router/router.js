export const routes = [
  {
    path: "/",
    redirect: { name: "home" }
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home/Home"),
    meta: {
      title: "首页"
    }
  },
  {
    path: "/catory",
    name: "catory",
    component: () => import("@/views/Catory/catory"),
    meta: {
      title: "分类"
    }
  },
  {
    path: "/car",
    name: "car",
    component: () => import("@/views/Car/Car"),
    meta: {
      title: "购物车"
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/Profile/Profile"),
    meta: {
      title: "个人中心"
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/Login"),
    meta: {
      title: "登录"
    }
  },
  {
    path: "/forget",
    name: "forget",
    redirect: "forget/phone",
    component: () => import("@/views/Forget/forget"),
    children: [
      {
        path: "phone",
        name: "phone",
        component: () => import("@/views/Forget/components/phone"),
        meta: {
          title: "忘记密码"
        }
      },
      {
        path: "code",
        name: "code",
        component: () => import("@/views/Forget/components/code"),
        meta: {
          title: "验证手机"
        }
      },
      {
        path: "rest",
        name: "rest",
        component: () => import("@/views/Forget/components/rest"),
        meta: {
          title: "重置密码"
        }
      },
      {
        path: "/search",
        name: "search",
        component: () => import("@/views/Search/search"),
        meta: {
          title: "搜索"
        }
      },
      {
        path: "/list",
        name: "list",
        component: () => import("@/views/List/list")
      },
      {
        path: "/detail",
        name: "detail",
        component: () => import("@/views/Detail/Detail"),
        meta: {
          title: "详情页"
        }
      }
    ]
  },
  {
    path: "/rest",
    name: "rest",
    component: () => import("@/views/Rest/Rest"),
    meta: {
      title: "注册"
    }
  }
];
