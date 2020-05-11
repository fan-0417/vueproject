const Home = () => import(/* webpackChunkName: "group-foo" */ '@/pages/Home/Home.vue')
const Classification = () => import(/* webpackChunkName: "group-foo" */ '@/pages/Classification/Classification.vue')
const Worth = () => import(/* webpackChunkName: "group-foo" */ '@/pages/Worth/Worth.vue')
const Cart = () => import(/* webpackChunkName: "group-foo" */ '@/pages/Cart/Cart.vue')
const Personal = () => import(/* webpackChunkName: "group-foo" */ '@/pages/Personal/Personal.vue')
const Search = () => import(/* webpackChunkName: "group-foo" */ '@/pages/Search/Search.vue')


export default [
  {path:"/Home",component:Home,meta:{showList:true}},
  {path:"/Classification",component:Classification,meta:{showList:true}},
  {path:"/Worth",component:Worth,meta:{showList:true}},
  {path:"/Cart",component:Cart,meta:{showList:true}},
  {path:"/Personal",component:Personal,meta:{showList:false}},
  {
    path:"/Search",
    component:Search,
    meta:{showList:false},
    // children:{
    //   path:'/'
    // }
  },
  {path:"/", redirect:"/Home"}
]