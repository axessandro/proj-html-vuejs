<script>
import AppHeader from './components/AppHeader.vue'
import AppJumbo from "./components/AppJumbo.vue";
import AppSpecialties from './components/AppSpecialties.vue';
import AppMembers from './components/AppMembers.vue';
import AppEvents from './components/AppEvents.vue';
import AppRole from './components/AppRole.vue';

export default{
    components:{
        AppHeader,
        AppJumbo,
        AppSpecialties,
        AppMembers,
        AppEvents,
        AppRole
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
</template>

<style lang="scss">
@use "./style/general.scss" as *;

</style>
