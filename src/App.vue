<script>
import AppHeader from './components/AppHeader.vue'
import AppJumbo from "./components/AppJumbo.vue";
import AppSpecialties from './components/AppSpecialties.vue';
import AppMembers from './components/AppMembers.vue';
import AppEvents from './components/AppEvents.vue';
import AppRole from './components/AppRole.vue';
import AppNews from './components/AppNews.vue';
import AppTestimonials from './components/AppTestimonials.vue';

export default{
    components:{
        AppHeader,
        AppJumbo,
        AppSpecialties,
        AppMembers,
        AppEvents,
        AppRole,
        AppNews,
        AppTestimonials
    }
}
</script>

<template>
  <AppHeader/>
  <AppJumbo/>
  <AppSpecialties/>
  <AppMembers/>
  <AppEvents/>
  <AppRole/>
  <AppNews/>
  <AppTestimonials/>
</template>

<style lang="scss">
@use "./style/general.scss" as *;

</style>
