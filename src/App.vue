<script>
import AppHeader from './components/AppHeader.vue'
import AppJumbo from "./components/AppJumbo.vue";
import AppSpecialties from './components/AppSpecialties.vue';

export default{
    components:{
        AppHeader,
        AppJumbo,
        AppSpecialties
    }
}
</script>

<template>
  <AppHeader/>
  <AppJumbo/>
  <AppSpecialties/>
</template>

<style lang="scss">
@use "./style/general.scss" as *;

</style>
