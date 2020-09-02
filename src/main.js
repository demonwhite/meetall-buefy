// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import Buefy from 'buefy'
import '~/assets/styles.scss'
// import 'buefy/dist/buefy.css'
export default function (Vue, { router, head, isClient }) {
  // add font Montserrat
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
  })
  // adding material design icons
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css'
  })
  Vue.use(Buefy)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
