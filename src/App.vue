<script>
import AppHeader from './components/AppHeader.vue'
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
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
