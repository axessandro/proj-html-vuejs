<script>
import AppHeader from './components/AppHeader.vue'
import {store} from './store'
import AppJumbo from "./components/AppJumbo.vue";
import AppSpecialties from './components/AppSpecialties.vue';
import AppMembers from './components/AppMembers.vue';
import AppEvents from './components/AppEvents.vue';
import AppRole from './components/AppRole.vue';
import AppNews from './components/AppNews.vue';
import AppTestimonials from './components/AppTestimonials.vue';
import AppContact from './components/AppContact.vue';
import AppFooter from './components/AppFooter.vue';

export default{
  data(){
    return{
      store,
      headerLinks:[
        {
          section: "homes",
          href: "/homes"
        },
        {
          section: "pages",
          href: "/pages"
        },
        {
          section: "blog",
          href: "/blog"
        },
        {
          section: "shop",
          href: "/shop"
        },
        {
          section: "events",
          href: "/events"
        },
        {
          section: "elements",
          href: "/elements"
        },
      ],
      footerLinks:[
        {
          section: "About me",
          href: "/about-me"
        },
        {
          section: "About us",
          href: "/about-us"
        },
        {
          section: "Language packs",
          href: "/language"
        },
        {
          section: "Become a coach",
          href: "/coach"
        },
        {
          section: "Monthly events",
          href: "/events"
        }
      ],
    }
  },
  components:{
    AppHeader,
    AppJumbo,
    AppSpecialties,
    AppMembers,
    AppEvents,
    AppRole,
    AppNews,
    AppTestimonials,
    AppContact,
    AppFooter
  }

}
</script>

<template>
  <!-- if hamburger true dark filter on page-->
  <div v-if="store.hamburgerClicked" class="dark-filter"></div>
  <!-- if hamburger true dark filter on page-->
  <AppHeader :links="headerLinks" :footerLinks="footerLinks"/>
  <AppJumbo/>
  <AppSpecialties/>
  <AppMembers/>
  <AppEvents/>
  <AppRole/>
  <AppNews/>
  <AppTestimonials/>
  <AppContact/>
  <AppFooter :links="footerLinks"/>
  <!-- btn to scroll up -->
  <a class="scroll-up" href="#">&uarr;</a>
  <!-- btn to scroll up -->
</template>

<style lang="scss">
@use "./style/general.scss" as *;
.dark-filter{
  background: linear-gradient(90deg, #9191918a, #2f2f2faa);
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 169px);
  height: 100vh;
  z-index: 999;
}
.scroll-up{
  background-color: $gray-bg;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  color: $primary-color;
  box-shadow: 0 0 10px 1px rgb(170, 170, 170);
  font-size: 20px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  text-decoration: none;
  transition: all .5s ease-in-out;
  writing-mode: vertical-rl;
  text-orientation: upright;
  &:hover{
    height: 90vh;
    background-color: $primary-color;
    color: white;
  }
}
</style>
