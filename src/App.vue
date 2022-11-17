<script>
import {store} from "./store";
import AppHeader from './components/AppHeader.vue'
import AppJumbo from "./components/AppJumbo.vue";

export default{
    components:{
        AppHeader,
        AppJumbo
    }
}
</script>

<template>
  <AppHeader/>
  <AppJumbo/>
</template>

<style lang="scss">
@use "./style/general.scss" as *;

</style>
