<script>
import {store} from "../store"

export default{
    name: "AppMember",
    data(){
        return{
            store,
            members: {
                jasonBickford :{
                    name: "Jason Bickford",
                    role: `${store.roles.founderDirector.roleName}`,
                    photo: "jason-photo.jpg",
                    signature: "jason-signature.png"
                },
                pamelaHill :{
                    name: "Pamela Hill",
                    role: `${store.roles.dataAnalyst.roleName}`,
                    photo: "pamela-photo.jpg",
                    signature: "pamela-signature.png"
                },
                lindaBrown : {
                    name: "Linda Brown",
                    role: `${store.roles.creativeLeader.roleName}`,
                    photo: "linda-photo.jpg",
                    signature: "linda-signature.png"
                }
            }
        }
    },
    methods:{
        getImg(url){
            return new URL(url, import.meta.url).href;
        }
    }
}
</script>

<template>
<section>
    <div class="ms_container">
        <div class="member-img">
            <img :src="getImg(`../assets/img/${members.jasonBickford.photo}`)" alt="">
        </div>

        <div class="member-card">
            <h2>{{members.jasonBickford.name}}</h2>
            <p class="role">{{members.jasonBickford.role}}</p>
            <hr>
            <p>{{store.roles.founderDirector.roleShortText}}</p>
            <div class="signature-wrapper">
                <img :src="getImg(`../assets/img/${members.jasonBickford.signature}`)" :alt="members.jasonBickford.name">
            </div>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

</style>